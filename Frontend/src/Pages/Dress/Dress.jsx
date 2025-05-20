import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaBasketShopping } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import "./dress.css"
import { useContext } from 'react';
import { BasketContext } from '../../Context/BasketContext';
import { Link } from 'react-router';
function Dress() {
    let [dress, setDress] = useState([])
    let [original, setOriginal] = useState([])
    let {basket , setBasket} = useContext(BasketContext)
    async function getAllDresses() {
        let res = await axios.get('http://localhost:3000/dress')
        setDress(res.data)
        setOriginal(res.data)

    }
    useEffect(() => {
        getAllDresses()
    }, [])


    function handleSearch(searchValue){
        let filtered = original.filter(x=>x.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
        setDress(filtered)
    }
    function handleSelece(selectValue){
        let filtered;
        switch(selectValue){
            case "low":
            filtered=[...original].sort((a,b)=>a.price - b.price)
            break;
            case "high":
            filtered=[...original].sort((a,b)=>b.price - a.price)
            break;
            case "a-z":
            filtered=[...original].sort((a,b)=>a.title.localeCompare(b.title))
            break;
            case "a-z":
            filtered=[...original].sort((a,b)=>b.title.localeCompare(a.title))
            break;
            case "all":
                filtered=[...original]
                break;
                default : 
                filtered=[...original]
                break;
        }
        setDress(filtered)
    }

    function handleAddBasket(i){
        let finded = basket.find(x=>x._id === i._id)
        if(finded){
            alert("Added")
        }
        else{
            setBasket([...basket,i])
        }
    }
    return (
        <div className="dresses">
            <div className="dress-text">
                <h3>Featured Products</h3>
                <p>We have your occasion covered</p>
            </div>
            <label htmlFor="search">
                <input type="text" name="" id="search" placeholder='Search...' onChange={(e)=>handleSearch(e.target.value)} />
            </label>
            <select name="" id="select" onClick={(e)=>handleSelece(e.target.value)}>
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            
            </select>
            <div className="dress-carts">
                {
                    dress.map((e) => {
                        return <div className="dress-cart" key={e._id}>
                            <img src={e.image} alt="" />
                            <h5>{e.title}</h5>
                            <p>{e.price}AZN</p>
                            <div className="cart-icons">
                                <button className='dress-basket' onClick={()=>handleAddBasket(e)}><FaBasketShopping /></button>
                                <Link to={`/detail/${e._id}`}><button className='dress-detail'><CgDetailsMore /></button></Link>
                                <button className='dress-heart'> <FaRegHeart /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Dress
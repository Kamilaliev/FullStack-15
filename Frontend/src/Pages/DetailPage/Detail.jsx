import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Detail() {
  let {id} =useParams()
  let [dress,setDress] = useState([])
  
  async function getDetail() {
    let res = await axios.get(`http://localhost:3000/dress/${id}`)
    setDress(res.data)
    
  }
  useEffect(()=>{
    getDetail()
  },[])
  return (
    <div className='container'>
    {
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dress.image} />
      <Card.Body>
        <Card.Title>{dress.title}</Card.Title>
        <Card.Text>
          {dress.price}
        </Card.Text>
        <Link to="/"><Button variant="primary">Go Back</Button></Link>
      </Card.Body>
    </Card>
    }
    </div>
  )
}

export default Detail
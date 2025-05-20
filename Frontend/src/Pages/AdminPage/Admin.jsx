import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from "yup";
import "./admin.css"
import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';
import { RiAdminFill } from "react-icons/ri";
import hellogo from "../../assets/user.png"
function Admin() {
    let [dress, setDress] = useState([])
    async function getAllDresses() {
        let res = await axios.get("http://localhost:3000/dress")
        setDress(res.data)

    }
    useEffect(() => {
        getAllDresses()
    }, [])
    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            price: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().min(5).max(60).required(),
            image: Yup.string().url().required(),
            price: Yup.number().min(1).required()
        }),
        onSubmit: async (values, action) => {
            let res = await axios.post("http://localhost:3000/dress", values)
            setDress([...dress, res.data])
            action.resetForm()
        },
    });
    async function handleDelete(id){
        let filtered = dress.filter(x=>x._id !== id)
        await axios.delete(`http://localhost:3000/dress/${id}`)
        setDress(filtered)
    }
    return (
        <>
        <Helmet>
            <title>Admin</title>
          <link rel="icon" href={hellogo} type="image/gif" sizes="16x16"/>

        </Helmet>
        
        <div className=" container" >
            <form onSubmit={formik.handleSubmit} >
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    />
                {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    />
                {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}

                <button type="submit" className='btn btn-primary '>Submit</button>
            </form>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            dress.map((e)=>{
                return<tr key={e._id}>
          <td>{e.title}</td>
          <td><img src={e.image} alt=""  width={200} /></td>
          <td>{e.price}</td>
          <td><button className='btn btn-danger' onClick={()=>handleDelete(e._id)}>Delete</button></td>
        </tr>
            })
        }
        
      </tbody>
    </Table>
        </div>
        </>
    )
}

export default Admin
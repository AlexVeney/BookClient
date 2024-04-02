import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const deployedHost = "https://bookapp2024-401e9436e711.herokuapp.com";
  const localHost = "http://localhost:8800";
  const [book,setBook] = useState({
    title:"",
    description:"",
    price: null,
    cover:""
  })
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e =>{
    e.preventDefault()

    try{
      await axios.post(deployedHost+"/books", book)
      // await axios.post(localHost+"/books", book)
      navigate("/")

    }catch(err){
      console.log(err)
    }
  }
  console.log(book)
  return (
    <div className='form'>
      <h2>Add New Book</h2>
      <input type="text" placeholder="title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="description" onChange={handleChange} name="description"/>
      <input type="number" placeholder="price" onChange={handleChange} name="price"/>
      <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
      <button class="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
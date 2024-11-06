import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate } from 'react-router-dom'

function Update() {

  const navigate = useNavigate();
  const {menuItemId} = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
    isAvailable: false,
  });

const fetchData = async ()=>{
    try {
      const response = await axios.get(`https://localhost:7298/getMenuById/${menuItemId}`);
      if(response && response.data){
        setFormData(response.data)
      }

    } catch (error) {
      console.log(error)
    }
}

useEffect(()=>{
fetchData()

},[])

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`https://localhost:7298/menuUpdate/${menuItemId}`, formData);
    console.log("Update successful:", response.data);
    navigate("/Admin/menuItems")
  } catch (error) {
    console.log("Error updating data:", error);
  }
};

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  });
};

  return (
    <>

<form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Available:</label>
        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Update Menu Item</button>
    </form>

    </>

  )
}

export default Update
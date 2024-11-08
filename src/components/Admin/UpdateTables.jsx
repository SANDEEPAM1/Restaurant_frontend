import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateTables() {
  const navigate = useNavigate();
  const { tableId } = useParams(); // Capture the tableId from the URL
  const [formData, setFormData] = useState({
    TableId:null,
    tableNumber: '',
    seats: '',
    location: '',
    isAvailable: false,
    specialFeature: '',
  });

  // Fetch data for the specified table
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://localhost:7298/getTableById/${tableId}`);
      if (response && response.data) {
        const { tableNumber, seats, location, isAvailable, specialFeature } = response.data;
        setFormData({ tableNumber, seats, location, isAvailable, specialFeature });
      }
    } catch (error) {
      console.log("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://localhost:7298/updateTable/${tableId}`, formData);
      console.log("Table update successful:", response.data);
      navigate("/Admin/tables"); // Redirect to the tables page after successful update
    } catch (error) {
      console.log("Error updating table:", error);
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
          <label>Table Number:</label>
          <input
            type="number"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Seats:</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
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

        <div>
          <label>Special Feature:</label>
          <input
            type="text"
            name="specialFeature"
            value={formData.specialFeature}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Table</button>
      </form>
    </>
  );
}

export default UpdateTables;

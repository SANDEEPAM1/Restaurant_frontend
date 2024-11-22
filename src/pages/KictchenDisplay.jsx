import React, { useState, useEffect } from 'react';
import KitchenCard from '../components/KitchenCard/KitchenCard';
import axios from 'axios';

const KitchenDisplay = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7298/kitchen');
      if (!response || !response.data) {
        console.log('No data from backend');
      } else {
        setOrderData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Kitchen Orders</h1>
      <div className="grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {orderData.map((item) => (
          <KitchenCard
            key={item.orderID}
            OrderId={item.orderID}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
};

export default KitchenDisplay;

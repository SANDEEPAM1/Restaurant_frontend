import React, { useEffect, useState } from 'react';
import axios from 'axios';

function KitchenCard({ OrderId, items }) {
  const [newState, setNewState] = useState('pending');

  const changeStatus = () => {
    if (newState === 'pending') {
      setNewState('cooking');
    } else if (newState === 'cooking') {
      setNewState('complete');
    }
  };

  const connectBackend = async () => {
    try {
      const response = await axios.patch(`https://localhost:7298/updateStatus/${OrderId}`, {
        Status: newState,
      });
      if (!response) {
        console.log('Something went wrong');
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleState = () => {
    changeStatus();
    console.log(newState);
  };

  useEffect(() => {
    if (newState !== 'pending') {
      connectBackend();
      console.log('from useEffect inside the if statement', newState);
    }

    console.log('from useEffect outside the if statement', newState);
  }, [newState]);

  const generateLabel = (newState) => {
    switch (newState) {
      case 'pending':
        return 'Start Cooking';
      case 'cooking':
        return 'Mark as Completed';
      case 'complete':
        return 'Completed';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center p-6 transition duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl">
      <div className="w-full mb-4 text-center">
        <h1 className="text-lg font-bold text-gray-700">Order ID: {OrderId}</h1>
      </div>
      <div className="mb-4">
        <h2 className="text-sm text-gray-500">Estimated Time: 33.34 mins</h2>
      </div>
      <div className="w-full mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="py-1">Item</th>
              <th className="py-1">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-sm text-gray-700">
                <td className="py-1">{item.title}</td>
                <td className="py-1 text-center">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          type="button"
          className={`py-2 px-4 rounded-lg text-white ${
            newState === 'complete'
              ? 'bg-green-500 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } focus:ring-2 focus:ring-blue-300 transition duration-300`}
          onClick={newState !== 'complete' ? handleState : null}
          disabled={newState === 'complete'}
        >
          {generateLabel(newState)}
        </button>
      </div>
    </div>
  );
}

export default KitchenCard;

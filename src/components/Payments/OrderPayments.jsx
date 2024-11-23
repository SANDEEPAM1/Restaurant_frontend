import React, { useContext, useState } from 'react';
import { usePayment } from '../../context/OrderPaymentContext';
import { cartContext } from '../../context/CartContext';
import axiosInstance from '../../Utility/api';
import { getUserId } from '../../Utility/authUtility';




const PaymentModal = () => {
    const {handleClose} = usePayment();
    const {cart} = useContext(cartContext)
    
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        phoneNumber: '',
        orderType: 'pickup', // Default to 'pickup'
        address: '',
        paymentMethod: 'credit', // Default to 'credit card'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (
            !formData.cardholderName ||
            !formData.cardNumber ||
            !formData.expiryDate ||
            !formData.cvv ||
            !formData.phoneNumber ||
            (formData.orderType === 'delivery' && !formData.address)
        ) {
            alert('Please fill in all the required fields.');
            return;
        }
        
       // onSubmit(formData); // Pass the data to the parent component
       // handleClose(); // Close the modal
       const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
       const UserId = getUserId();
       // organize data according to the dto
        const orderDto = {
            "phoneNumber": formData.phoneNumber,
            "status": "pending",
            "deliveryType": formData.orderType,
            "deliveyAddress": formData.address,
            "userId": UserId,
            "deliveryPerosnId": 0,
            "orderItems": cart.map((item) => ({
              "title":item.title,
              "quantity":item.quantity,
              "price":item.price,
              "orderID": 0,
              "menuItemId":item.menuItemId
            })),
            "payment": {
              "amount": totalPrice,
              "paymentMethod": formData.paymentMethod
            }
          }
       

          try {
            var response = await axiosInstance.post("/api/OnlineOrderHandle/orderData",orderDto);
            console.log(response)
            console.log(orderDto)
            console.log
          } catch (error) {
            
          }
          
    };

   // if (!isOpen) return null; // Don't render if modal is not open    
    // organize data according to the dto 
        

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                {/* Close Button */}
                <button
    className="absolute p-2 text-white bg-red-600 rounded-sm hover:bg-red-700 active:bg-red-800 top-3 right-3 focus:outline-none"
    onClick={() => handleClose()}
>
    &times;
</button>


                {/* Modal Title */}
                <h2 className="mb-6 text-xl font-bold text-center">Enter Payment Details</h2>

                {/* Payment Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Phone Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="123-456-7890"
                            required
                        />
                    </div>

                    {/* Order Type Dropdown */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Order Type</label>
                        <select
                            name="orderType"
                            value={formData.orderType}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            <option value="pickup">Pickup</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>

                    {/* Address Textbox for Delivery */}
                    {formData.orderType === 'delivery' && (
                        <div>
                            <label className="block mb-1 text-sm font-medium">Delivery Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                    )}

                    {/* Payment Method Radio Buttons */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Payment Method</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="credit"
                                    checked={formData.paymentMethod === 'credit'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Credit Card
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="debit"
                                    checked={formData.paymentMethod === 'debit'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Debit Card
                            </label>
                        </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Cardholder Name</label>
                        <input
                            type="text"
                            name="cardholderName"
                            value={formData.cardholderName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Card Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>

                    {/* Expiry Date and CVV */}
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="123"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={(e)=>handleSubmit(e)}
                        className="w-full p-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Submit Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;

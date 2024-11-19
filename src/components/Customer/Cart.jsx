import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { usePayment } from '../../context/OrderPaymentContext';


const Cart = () => {
  const { handlePayment } = usePayment(); 
  const { cart, dispatch } = useContext(cartContext);
  console.log('from cart page', cart)

  // Calculate total price and total items
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleIncrease = (id) => {
   const Index = cart.findIndex(p => p.menuItemId == id)
   if(cart[Index].quantity<10){
        dispatch({type:"Increase", id:id})
   }
  };

  const handleDecrease = (id) => {
    const Index = cart.findIndex(p => p.menuItemId == id)
    if(cart[Index].quantity >1){
         dispatch({type:"Decrease", id:id})
    }
  };

  const handleRemove = (menuItemId) => {
          dispatch({type:"Remove", id : menuItemId})
  };

  return (
    <div className="flex gap-8 p-6 ">
      {/* Right Side: Summary */}
      <div className="z-10 w-1/3 p-4 border rounded shadow">
        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
        <p className="mb-2">
          <strong>Number of Items:</strong> {totalItems}
        </p>
        <p className="mb-2">
          <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
        </p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={()=>handlePayment()} >
          Checkout
        </button>
      </div>

      {/* Left Side: Cart Items */}
      <div className="w-2/3 p-4 border rounded shadow">
        <h2 className="mb-4 text-xl font-bold">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Item</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.menuItemId} className="border-b">
                  <td className="py-2">{item.title}</td>
                  <td className="flex items-center gap-2 py-2">
                    <button
                      onClick={() => handleDecrease(item.menuItemId)}
                      className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.menuItemId)}
                      className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-2">{item.price}</td>
                  <td className="py-2">
                    <button
                      onClick={() => handleRemove(item.menuItemId)}
                      className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from 'react'
import Navbar from '../components/Navbar'
import CartItem from "../components/CartItem"
import { useState } from 'react'
import { useNavigate } from 'react-router'



interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}


const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: "Product A", price: 10.99, quantity: 1 },
    { id: 2, name: "Product B", price: 14.99, quantity: 2 },
  ]);

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate()
  return (
    <div className="max-w-md mx-auto mt-10 bg-emerald-200 p-6 rounded shadow-lg">
      <button className='p-1 w-full bg-blue-300'  onClick={() => {
                    navigate('/');
                }} >Find More Stuff !!!</button>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeItem}
          />
        ))
      ) : (
        <p className="text-center text-gray-600" >Your cart is empty.</p>
      )}
      <div className="flex justify-between mt-4 font-bold text-lg">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Checkout
      </button>
    </div>
  );
};

export default Cart

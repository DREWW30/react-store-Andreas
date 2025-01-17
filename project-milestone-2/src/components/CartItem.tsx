import React from 'react'

interface CartItemProps {
    item: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    };
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
  }
  
  const CartItem: React.FC<CartItemProps> = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
      <div className="flex justify-between items-center p-16  border-b bg-emerald-100">
        <div>
          <h3 className="text-lg font-semibold p-1">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => onDecrease(item.id)} className="px-2 py-1 bg-gray-300 rounded  ">-</button>
          <span className="px-3">{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)} className="px-2 py-1 bg-gray-300 rounded ">+</button>
        </div>
        <button onClick={() => onRemove(item.id)} className="px-3 py-1  bg-blue-500 text-white rounded">Remove</button>
      </div>
    );
  };
  

export default CartItem

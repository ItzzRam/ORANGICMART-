import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Organic Apple', price: 80, image: '/images/app.jpeg' },
    { id: 2, name: 'Organic Banana', price: 30, image: '/images/ba.jpeg' },
    { id: 3, name: 'Organic Carrot', price: 40, image: '/images/ca.jpeg' },
    { id: 4, name: 'Organic Spinach', price: 25, image: '/images/spi.jpeg' },
    { id: 5, name: 'Organic Broccoli', price: 70, image: '/images/broc.jpeg' },
    { id: 6, name: 'Organic Tomato', price: 35, image: '/images/tom.jpeg' },
    { id: 7, name: 'Organic Cucumber', price: 30, image: '/images/cu.jpeg' },
    { id: 8, name: 'Organic Avocado', price: 90, image: '/images/a.jpeg' },
    { id: 9, name: 'Organic Potato', price: 25, image: '/images/p.jpeg' },
    { id: 10, name: 'Organic Onion', price: 28, image: '/images/on.jpeg' },
    { id: 11, name: 'Organic Kale', price: 50, image: '/images/k.jpeg' },
    { id: 12, name: 'Organic Lettuce', price: 45, image: '/images/l.jpeg' },
    { id: 13, name: 'Organic Cherries', price: 120, image: '/images/c.jpeg' },
    { id: 14, name: 'Organic Peas', price: 55, image: '/images/pe.jpeg' },
    { id: 15, name: 'Organic Strawberries', price: 75, image: '/images/st.jpeg' },
    { id: 16, name: 'Organic Coconut Oil', price: 150, image: '/images/oil.jpg' },
    { id: 17, name: 'Organic Mustard Oil', price: 130, image: '/images/mu.jpg' },
    { id: 18, name: 'Organic Olive Oil', price: 200, image: '/images/ooo.jpg' },
    { id: 19, name: 'Organic Groundnut Oil', price: 140, image: '/images/g.jpeg' },
    { id: 20, name: 'Organic Sunflower Oil', price: 160, image: '/images/sun.jpeg' },
    { id: 16, name: 'Organic Basmati Rice', price: 120, image: '/images/bis.jpeg' },
    { id: 17, name: 'Organic Wheat Flour', price: 95, image: '/images/wh.jpeg' },
   { id: 18, name: 'Organic Moong Dal', price: 90, image: '/images/moo.jpeg' },
   { id: 19, name: 'Organic Chana Dal', price: 85, image: '/images/cha.jpeg' },
{ id: 20, name: 'Organic Rajma', price: 100, image: '/images/raj.jpeg' },
{ id: 21, name: 'Organic Turmeric Powder', price: 60, image: '/images/t.jpeg' },
{ id: 22, name: 'Organic Red Chili Powder', price: 70, image: '/images/re.jpeg' },
{ id: 23, name: 'Organic Coriander Powder', price: 65, image: '/images/cor.jpeg' },
{ id: 24, name: 'Organic Cumin Seeds', price: 75, image: '/images/u.jpeg' },
{ id: 25, name: 'Organic Mustard Seeds', price: 50, image: '/images/mus.jpeg' },
{ id: 28, name: 'Organic Honey', price: 180, image: '/images/h.jpeg' },
{ id: 29, name: 'Organic Jaggery', price: 55, image: '/images/jan.jpeg' },
{ id: 30, name: 'Organic Tea Leaves', price: 110, image: '/images/tea.jpeg' },


  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSubmit = () => {
    navigate('/DisplayPage', { state: { cart } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to OrganicMart 🛒</h1>
      <h2 style={{ marginTop: '30px' }}>Our Products</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: '220px',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
              style={{ borderRadius: '4px', objectFit: 'cover' }}
            />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '40px' }}>🛒 Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit & Go to Checkout
      </button>
    </div>
  );
};

export default FormPage;
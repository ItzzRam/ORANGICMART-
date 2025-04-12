import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function DisplayPage() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = totalPrice * 0.1; // 10% off
  const delivery = 50;
  const finalAmount = totalPrice - discount + delivery;

  // 🧾 Customer info state
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    doorNo: '',
    address: '',
  });

  const [payment, setPayment] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const placeOrder = () => {
    const { name, phone, email, district, doorNo, address } = customer;

    if (!name || !phone || !email || !district || !doorNo || !address) {
      alert('Please fill all customer details');
      return;
    }

    if (!payment) {
      alert('Please select a payment method');
      return;
    }

    alert(`Order placed successfully!\n
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${doorNo}, ${address}, ${district}
Payment Mode: ${payment}
Total Amount: ₹${finalAmount.toFixed(2)}
    `);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>🧾 Order Summary</h1>

      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <hr />
      <p>Total: ₹{totalPrice.toFixed(2)}</p>
      <p>Discount: -₹{discount.toFixed(2)}</p>
      <p>Delivery Charge: ₹{delivery}</p>
      <h3>Final Amount: ₹{finalAmount.toFixed(2)}</h3>

      <hr />
      <h2>📦 Delivery Details</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} />
      <input name="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
      <input name="district" placeholder="District" onChange={handleChange} style={inputStyle} />
      <input name="doorNo" placeholder="Door No." onChange={handleChange} style={inputStyle} />
      <textarea name="address" placeholder="Full Address" onChange={handleChange} style={inputStyle} />

      <h3>💳 Payment Method:</h3>
      <label>
        <input type="radio" value="Net Banking" name="payment" onChange={(e) => setPayment(e.target.value)} /> Net Banking
      </label>
      <br />
      <label>
        <input type="radio" value="Credit/Debit Card" name="payment" onChange={(e) => setPayment(e.target.value)} /> Credit/Debit Card
      </label>
      <br />
      <label>
        <input type="radio" value="Cash on Delivery" name="payment" onChange={(e) => setPayment(e.target.value)} /> Cash on Delivery
      </label>

      <br />
      <button onClick={placeOrder} style={buttonStyle}>
        Place Order
      </button>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  margin: '10px 0',
  padding: '8px',
  width: '100%',
  maxWidth: '500px',
};

const buttonStyle = {
  marginTop: '20px',
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default DisplayPage;

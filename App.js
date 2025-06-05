// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [gadgets, setGadgets] = useState([]);

  // Fetch gadgets from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/gadgets')
      .then(res => res.json())
      .then(data => setGadgets(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>गैजेट्स की दुकान 🚀</h1>
      <div className="gadgets-list">
        {gadgets.map(gadget => (
          <div key={gadget._id} className="gadget-card">
            <h3>{gadget.name}</h3>
            <p>₹{gadget.price}</p>
            <img src={gadget.image} alt={gadget.name} width="150" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

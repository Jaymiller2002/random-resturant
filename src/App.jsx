import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

const App = () => {
  const [menus, setMenus] = useState([]); // Array to hold menu data for each menu
  const [activeMenuIndex, setActiveMenuIndex] = useState(0); // Index of the active menu
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        console.log('API Response:', response.data); // Log API response for debugging
        setMenus([response.data]); // Initially set the first menu
        setError(null); // Reset error state if request succeeds
      } catch (error) {
        console.error('API Error:', error); // Log API error for debugging
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMenus();
  }, []);

  // Function to toggle between menus
  const toggleMenu = (index) => {
    setActiveMenuIndex(index);
  };

  return (
    <div className="app-container">
      <nav className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Menu Page</h1>
        <Link to="/about" className="text-lg font-semibold">Contact Us</Link>
      </nav>
      <div className="menu-tabs mb-3">
        {menus.map((menu, index) => (
          <button
            key={index}
            className={`menu-tab ${index === activeMenuIndex ? 'active' : ''}`}
            onClick={() => toggleMenu(index)}
          >
            Menu {index + 1}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="menu-items grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menus[activeMenuIndex].slice(0, 15).map(item => (
            <div key={item.id} className="menu-item p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-gray-600">Description: {item.description}</p>
              <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

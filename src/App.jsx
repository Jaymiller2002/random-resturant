import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [menu, setMenu] = useState([]); // Hold menu data
  const [isLoading, setIsLoading] = useState(true); // Loading State
  const [error, setError] = useState(null); // Error State

  // Define the addToCart function
  const addToCart = (product) => {
    // Your addToCart logic here
    console.log("Added to cart:", product);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/menu-items/');
        setMenu(response.data);
        setError(null);
      } catch (error) {
        console.error('API Error:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="app-container">
      <nav className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Menu Page</h1>
      </nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <div className="menu-items grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menu.map(item => (
              <div key={item.id} className="menu-item p-4 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">Description: {item.description}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Image from './assets/foodPic.jpg'


// Functional component
const App = () => {
  // State variables
  const [menu, setMenu] = useState([]); // Hold menu data
  const [isLoading, setIsLoading] = useState(true); // Loading State
  const [error, setError] = useState(null); // Error State

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Fetch menu data from the provided API endpoint
        const response = await axios.get('https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json');
        console.log('API Response:', response.data); // Log API response for debugging
        setMenu(response.data); // Set menu data
        setError(null); // Reset error state if request succeeds
      } catch (error) {
        console.error('API Error:', error); // Log API error for debugging
        setError(error); // Set error state if request fails
      } finally {
        setIsLoading(false); // Set loading state to false after request
      }
    };
    
    fetchMenu(); // invoke fetchMenu function
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // JSX structure for rendering the component
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
        <div className="menu-items grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menu.slice(1, 19).map(item => (
            <div key={item.id} className="menu-item p-4 shadow-md rounded-lg">
              <img src={Image} alt={item.title} />
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

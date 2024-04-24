import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Title = () => {
  return (
    <h1>
      Welcome to Our Restaurant
    </h1>
  );
};

function App() {
  const [restaurantImage, setRestaurantImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantImage = async () => {
      try {
        const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        setRestaurantImage(response.data.imageURL);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantImage();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <nav className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Restaurant Name</h1>
        <Link to="/about" className="text-lg font-semibold">About Us</Link>
      </nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <img src={restaurantImage} alt="Restaurant" className="w-full mb-5 rounded-lg" />
      )}
      <Title />
      <p className="text-lg mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet augue sit amet mauris dictum, id finibus purus venenatis. Quisque vitae justo non ex sodales sagittis.
      </p>
    </div>
  );
}

export default App;

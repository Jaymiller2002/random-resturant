import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function Online() {
  const [products, setProducts] = useState([]); // State to hold the products
  const [menuItems, setMenuItems] = useState([]); // State to hold the menu items
  const [cart, setCart] = useState([]); // State to hold the user's cart items

  // Fetch products from the backend API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/menu-items/');
        setProducts(response.data); // Set products fetched from the API
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch menu items from the backend API when the component mounts
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/products/');
        setMenuItems(response.data); // Set menu items fetched from the API
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchMenuItems();
  }, []);

  // Function to add an item to the cart
  const addToCart = (menuItem) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find((item) => item.id === menuItem.id);
    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart
      setCart([...cart, { ...menuItem, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    // Filter out the item with the provided itemId from the cart
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    // Use reduce to sum up the total price of all items in the cart
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to place the order
  const placeOrder = () => {
    // Log the cart items for now
    console.log("Order placed:", cart);
    // Show an alert indicating the order was placed successfully
    alert("Order placed successfully!");
    // Clear the cart after placing the order
    setCart([]);
  };

  return (
    <div className="center-card" style={{marginTop: '40px'}}>
      <div className="card">
        <h2 style={{ color: "white"}}>Online Ordering</h2>
        <div>
          {/* Display products fetched from the database */}
          {products.map((product) => (
            <div key={product.id}>
              <h3 style={{ color: "white" }}></h3>
              <p style={{ color: "white" }}>Price: ${product.price}</p>
              <p style={{ color: "white" }}>Description: {product.description}</p>
              <button className='text-light' onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* Display cart */}
        <h3 style={{ color: "white" }}>Cart</h3>
        {cart.length === 0 ? (
          <p style={{ color: "white" }}>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li style={{ color: "white" }} key={item.id}>
                {item.name} - ${item.price} x
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
                />
                <button className='text-light' onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {/* Display total price */}
        <h3 style={{ color: "white" }}>Total Price: ${calculateTotalPrice()}</h3>
        {/* Order button */}
        <button className='text-light' onClick={placeOrder}>Place Order</button>
      </div>

      {/* Display menu items fetched from the database-- DONT NEED THIS UNLESS YOU WANT TO SEE THE MENU ITEMS AGAIN*/}
      {/* <div className='card-right'>
        {menuItems.map((menuItem) => (
          <div key={menuItem.id}>
            <h3 style={{ color: "white" }}>{menuItem.title}</h3>
            <p style={{ color: "white" }}>Category: {menuItem.category}</p>
            <p style={{ color: "white" }}>Description: {menuItem.description}</p>
            <p style={{ color: "white" }}>Price: ${menuItem.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Online;


import React, { useState } from 'react';

function Online() {
  const [cart, setCart] = useState([]); // State to hold the user's cart items

  // Function to add an item to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to place the order
  const placeOrder = () => {
  // just log the cart items for now
    console.log("Order placed:", cart);
    alert("Order placed successfully!");
    setCart([]); // Clear the cart after placing the order
  };

  return (
    <div className="center-card">
        <div className="card">
      <h2>Online Ordering</h2>
      <div>
        {/* Display products */}
        <div>
          <h3>Eggs Benedict</h3>
          <p>Price: $9.99</p>
          <p>Description: </p>
          <button className='text-light' onClick={() => addToCart({ id: 1, name: "Product 1", price: 9.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Beef Satay</h3>
          <p>Price: $6.99</p>
          <p>Description: Marinated and grilled beef skewers served with a peanut dipping sauce</p>
          <button className='text-light' onClick={() => addToCart({ id: 2, name: "Product 2", price: 6.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Chicken Caesar Salad</h3>
          <p>Price: $8.99</p>
          <p>Description: A classic salad of romaine lettuce, grilled chicken, croutons, and caesar dressing</p>
          <button className='text-light' onClick={() => addToCart({ id: 3, name: "Product 3", price: 8.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Pork Tacos</h3>
          <p>Price: $11.99</p>
          <p>Description: Two soft tortillas filled with seasoned pork, onions, cilantro, and salsa</p>
          <button className='text-light' onClick={() => addToCart({ id: 4, name: "Product 4", price: 11.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Green Curry</h3>
          <p>Price: $13.99</p>
          <p>Description: A spicy thai curry made with coconut milk, green chilies, chicken,and vegetables</p>
          <button className='text-light' onClick={() => addToCart({ id: 5, name: "Product 5", price: 13.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Bloody Mary</h3>
          <p>Price: $7.99</p>
          <p>Description: A classic brunch cocktail made with vodka, tomato juice, and spices</p>
          <button className='text-light' onClick={() => addToCart({ id: 6, name: "Product 6", price: 7.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Shrimp & Grits</h3>
          <p>Price: $12.99</p>
          <p>Description: Buttery grits topped with shrimp, bacon and a spicy Cajun cream sauce</p>
          <button className='text-light' onClick={() => addToCart({ id: 7, name: "Product 7", price: 12.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Chicken Alfredo</h3>
          <p>Price: $14.99</p>
          <p>Description: Grilled chicked and fettuccine noodles tossed in a creamy Alfredo sauce</p>
          <button className='text-light' onClick={() => addToCart({ id: 8, name: "Product 8", price: 14.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Fish & Chips</h3>
          <p>Price: $12.99</p>
          <p>Description: Beer-battered cod and crispy fries served with tarter sauce</p>
          <button className='text-light' onClick={() => addToCart({ id: 9, name: "Product 9", price: 12.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Spicy Tuna Roll</h3>
          <p>Price: $8.99</p>
          <p>Description: A sushi roll filled with spicy tuna, avocado, and cucumber</p>
          <button className='text-light' onClick={() => addToCart({ id: 10, name: "Product 10", price: 8.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Fruit smoothie</h3>
          <p>Price: $6.99</p>
          <p>Description: A refreshing blend of fresh fruit, yogurt, and honey</p>
          <button className='text-light' onClick={() => addToCart({ id: 11, name: "Product 11", price: 6.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Meat Lover's Pizza</h3>
          <p>Price: $15.99</p>
          <p>Description: A pizza topped with pepperoni, sausage, bacon, and ham</p>
          <button className='text-light' onClick={() => addToCart({ id: 12, name: "Product 12", price: 15.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Avocado Toast</h3>
          <p>Price: $10.99</p>
          <p>Description: Toasted bread topped with mashed avocado, sliced tomatoes, and a poached egg</p>
          <button className='text-light' onClick={() => addToCart({ id: 13, name: "Product 13", price: 10.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Chips & Salsa</h3>
          <p>Price: $5.99</p>
          <p>Description: Freshly made salsa and crispy tortilla chips</p>
          <button className='text-light' onClick={() => addToCart({ id: 14, name: "Product 14", price: 5.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Chicken Teriyaki Bowl</h3>
          <p>Price: $10.99</p>
          <p>Description: Grilled chicken, vegetables, and teriyaki</p>
          <button className='text-light' onClick={() => addToCart({ id: 15, name: "Product 15", price: 10.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Caesar Salad</h3>
          <p>Price: $4.99</p>
          <p>Description: A smaller portion of a classic caesar salad</p>
          <button className='text-light' onClick={() => addToCart({ id: 16, name: "Product 16", price: 4.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Steak Fajitas</h3>
          <p>Price: $17.99</p>
          <p>Description: Sizzling strips of steak with peppers and onions, served with tortillas and rice</p>
          <button className='text-light' onClick={() => addToCart({ id: 17, name: "Product 17", price: 17.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>French Toast</h3>
          <p>Price: $8.99</p>
          <p>Description: Thick slices of bread dipped in egg batter and fried, topped with powdered sugar</p>
          <button className='text-light' onClick={() => addToCart({ id: 18, name: "Product 18", price: 8.99 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>Chicken Wings</h3>
          <p>Price: $9.99</p>
          <p>Description: Crispy fried chicken wings tossed in your choice of buffalo, barbecue or honey mustard</p>
          <button className='text-light' onClick={() => addToCart({ id: 19, name: "Product 19", price: 9.99 })}>
            Add to Cart
          </button>
        </div>
        {/* Display cart */}
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button className='text-light' onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {/* Display total price */}
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        {/* Order button */}
        <button className='text-light' onClick={placeOrder}>Place Order</button>
      </div>
      </div>
    </div>
  );
}

export default Online;
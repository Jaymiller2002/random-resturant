import React, { useState } from 'react';

function Signin() {
  // State to hold the username input value
  const [username, setUsername] = useState('');
  // State to hold the password input value
  const [password, setPassword] = useState('');
  // State to hold error message for failed sign-in attempts
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the sign-in process
  const handleSignIn = () => {
    // Could impliment backend but haven't learned any backend?
    // Set username and password to target JayMiller and Fatpanda76 as user & pass for simplicity
    if (username === 'JayMiller' && password === 'Fatpanda76') {
      // Successful sign-in
      alert('Sign in successful!');
    } else {
      // Failed sign-in
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="center-card">
        <div className="card">
      <h2 style={{color: "white"}}>Sign In</h2>
      {errorMessage && <div style={{ color: 'white' }}>{errorMessage}</div>}
      <div>
        <label htmlFor="username" style={{color: "white"}}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" style={{color: "white"}}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="text-light" onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}

export default Signin;
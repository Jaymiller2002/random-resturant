import React, { useState } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // Here you would typically send a request to your backend to authenticate the user
    // For simplicity, let's just check if the username and password are both 'admin'
    if (username === 'JayMiller' && password === 'Fatpanda76') {
      // Successful sign-in
      alert('Sign in successful!');
    } else {
      // Failed sign-in
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="text-light" onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Signin;
import React, { useState } from 'react';

function Signin() {
  // State to hold the username input value for sign-in
  const [signInUsername, setSignInUsername] = useState('');
  // State to hold the password input value for sign-in
  const [signInPassword, setSignInPassword] = useState('');
  // State to hold the username input value for sign-up
  const [signUpUsername, setSignUpUsername] = useState('');
  // State to hold the password input value for sign-up
  const [signUpPassword, setSignUpPassword] = useState('');
  // State to hold error message for failed sign-in or sign-up attempts
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the sign-in process
  const handleSignIn = () => {
    // Send sign-in request to the backend
    fetch('http://127.0.0.1:8000/sign-ins/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    })
      .then(response => {
        if (response.ok) {
          // Successful sign-in
          alert('Sign in successful!');
        } else {
          // Failed sign-in
          setErrorMessage('Invalid username or password');
        }
      })
      .catch(error => {
        console.error('Error signing in:', error);
        setErrorMessage('Failed to sign in. Please try again later.');
      });
  };

  // Function to handle the sign-up process
  const handleSignUp = () => {
    // Send sign-up request to the backend
    fetch('http://127.0.0.1:8000/sign-ups/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
    })
      .then(response => {
        if (response.ok) {
          // Successful sign-up
          alert('Sign up successful!');
        } else {
          // Failed sign-up
          setErrorMessage('Failed to sign up. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error signing up:', error);
        setErrorMessage('Failed to sign up. Please try again later.');
      });
  };

  return (
    <div className="center-card" style={{ marginTop: '40px' }}>
      <div className="card">
        <h2 style={{ color: "white" }}>Sign In</h2>
        {errorMessage && <div style={{ color: 'white' }}>{errorMessage}</div>}
        <div>
          <label htmlFor="signInUsername" style={{ color: "white" }}>Username:</label>
          <input
            type="text"
            id="signInUsername"
            value={signInUsername}
            onChange={(e) => setSignInUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="signInPassword" style={{ color: "white" }}>Password:</label>
          <input
            type="password"
            id="signInPassword"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </div>
        <button className="text-light" onClick={handleSignIn}>Sign In</button>
      </div>
      <div className="card">
        <h2 style={{ color: "white" }}>Sign Up</h2>
        {errorMessage && <div style={{ color: 'white' }}>{errorMessage}</div>}
        <div>
          <label htmlFor="signUpUsername" style={{ color: "white" }}>Username:</label>
          <input
            type="text"
            id="signUpUsername"
            value={signUpUsername}
            onChange={(e) => setSignUpUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="signUpPassword" style={{ color: "white" }}>Password:</label>
          <input
            type="password"
            id="signUpPassword"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
        </div>
        <button className="text-light" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signin;
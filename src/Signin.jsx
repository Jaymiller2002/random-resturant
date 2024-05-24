import React, { useState } from 'react';
// PAGE DOES NOT WORK
function Signin() {
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/sign-ins/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
      });

      if (response.ok) {
        // Successful sign-in
        alert('Sign in successful!');
      } else {
        // Failed sign-in
        const data = await response.json();
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('Failed to sign in. Please try again later.');
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/sign-ups/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
      });

      if (response.ok) {
        // Successful sign-up
        alert('Sign up successful!');
      } else {
        // Failed sign-up
        const data = await response.json();
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Failed to sign up. Please try again later.');
    }
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
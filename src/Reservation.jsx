import React, { useState } from 'react';
import './App.css';

function Reservation() {
    // State to hold the form data for reservation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        partySize: 1,
        specialRequest: ''
    });

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        // Extract name and value from the event target
        const {name, value} = e.target;
        // Update the corresponding field in the form data
        setFormData({...formData, [name]: value});
    }

    // Function to handle form submission 
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Log the submitted reservation data
        console.log("Reservation Submitted:", formData);
        // Show an alert indicating successful submission
        alert("Reservation submitted successfully!");
        // Reset the form data after submission
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            partySize: 1,
            specialRequest: ''
        });
    };
    return (
      <div className="center-card">
        <div className="card">
        <h2>Reservation Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input 
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  />
            </div>
            <div>
                <label htmlFor='date'>Date: </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  required
                  />
            </div>
            <div>
                <label htmlFor='time'>Time: </label>
                <input
                  type='time'
                  id='time'
                  name='time'
                  value={formData.time}
                  onChange={handleChange}
                  required
                  />
            </div>
            <div>
                <label htmlFor='partySize'>PartySize: </label>
                <input
                  type='partySize'
                  id='partySize'
                  name='partySize'
                  value={formData.partySize}
                  onChange={handleChange}
                  required
                  />
            </div>
            <div>
                <label htmlFor='specialRequest'>SpecialRequest: </label>
                <input
                  type='specialRequest'
                  id='specialRequest'
                  name='specialRequest'
                  value={formData.specialRequest}
                  onChange={handleChange}
                  required
                  />
            </div>
            <button className='text-light' type='submit'>Submit Reservation</button>
        </form>
        </div>
      </div>
    )
  }
  
  export default Reservation
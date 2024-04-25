import React, { useState } from 'react';
import './App.css';

function Reservation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        partySize: 1,
        specialRequest: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Submitted:", formData);
        alert("Reservation submitted successfully!");
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
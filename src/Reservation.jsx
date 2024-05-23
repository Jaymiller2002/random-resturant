import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch existing reservations when the component mounts
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/reservations/');
            setReservations(response.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
            alert("Failed to fetch reservations. Please try again later.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/reservations/', formData);
            alert("Reservation submitted successfully!");
            setFormData({
                name: '',
                email: '',
                date: '',
                time: '',
                partySize: 1,
                specialRequest: ''
            });
            // Refresh reservations after submitting
            fetchReservations();
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert("Failed to submit reservation. Please try again later.");
        }
    };

    return (
        <div className="center-card" style={{ marginTop: '40px' }}>
            <div className="card">
                <h2 style={{ color: "white" }}>Reservation Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" style={{ color: "white" }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ color: "white" }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                      <label htmlFor='date' style={{color: "white"}}>Date:</label>
                      <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor='time' style={{color: "white"}}>Time:</label>
                      <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor='partySize' style={{color: "white"}}>PartySize:</label>
                      <input
                          type="number"
                          id="partySize"
                          name="partySize"
                          value={formData.partySize}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor='specialRequest' style={{color: "white"}}>SpecialRequest:</label>
                      <input
                          type="text"
                          id="specialRequest"
                          name="specialRequest"
                          value={formData.specialRequest}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <button className="text-light" type="submit">Submit Reservation</button>
                </form>
            </div>
            <div className="card">
                <h2 style={{ color: "white" }}>Existing Reservations</h2>
                <ul>
                    {reservations.map(reservation => (
                        <li key={reservation.id} style={{color: "white"}}>
                            {/* Display reservation information */}
                            {reservation.name} - {reservation.email} - {reservation.date} - {reservation.time} - {reservation.partySize} - {reservation.specialRequest}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Reservation;

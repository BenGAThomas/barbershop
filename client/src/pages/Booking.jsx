import React, { useState } from "react";
import Calender from 'react-calendar';

import { useNavigate } from "react-router-dom";

const services = [
    'Haircut',
    'Hair Coloring',
    'Event Styling',
    'Beard Trim',
];

const barbers = [
    'Denzel Washington',
    'Samuel L Jackson',
    'Marsherali Ali',
    'Mike Coulter',
];

const Booking = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date())
    const [service, setService] = useState('');
    const [barber, setBarber] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, date, service, barber})
        })

        if(response.ok){
            alert(`Booking for ${name} on ${date.toLocaleDateString()} at ${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} was successful. We will send an email to ${email} for confirmation.`);
            navigate('/');
        } else {
            alert('Booking failed. Please try again.');
        }
    }

    return (
        <div>
            <h2>Book and Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='name' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>

                    {/*This is the calender and time component to allow a person to book a date, time, barber, and style. */}
                    <label htmlFor="">Date</label>
                    <Calender
                    onChange={setDate} value={date} required />

                    <p>Date Selected: {date.toLocaleDateString()}</p>
                    <p>Time Selected: {time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} </p>
                </div>

                <div>
                    <label htmlFor="service">Services</label>
                    <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                        <option value="" disabled>Select a Service</option>
                        {services.map((service, index) => ( <option key={index} value={service}>{service}</option>))}
                    </select>
                </div>
                
                <div>
                    <label htmlFor="barber">Barber: </label>
                    <select id="barber" value={barber} onChange={(e) => setBarber(e.target.value)}>
                        <option value="" disabled>Select a Barber (optional)</option>
                        {barbers.map((barber, index) => ( <option key={index} value={barber}>{barber}</option>))}   
                    </select>
                </div>
                <button type='submit'>Book</button>

            </form>
        </div>
    )
}

export default Booking;
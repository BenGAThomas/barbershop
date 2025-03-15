const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect().then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('Unsuccessful connection', error)
});

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    date: { type: String, required: true},
    time: { type: String, required: true},
    service: { type: String, required: true},
    barber: { type: String, required: false},
});


const Booking = mongoose.model('Booking', BookingSchema);

app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({date: 1})
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings' });
    }
}

)

app.post('/api/bookings', async (req, res) => {
    try {
          
        const{name, email, date, time, service, barber } = req.body
        const newBooking = new Booking({name, email, date, time, service, barber })
        await newBooking.save()
        res.json(newBooking);
    } catch (error) {
        console.error('Error saving bookings:', error);
        res.status(500).json({ message: 'Error saving bookings' });
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
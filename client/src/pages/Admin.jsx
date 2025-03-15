import React, {useState, useEffect} from "react";

const Admin = () => {

    const [bookings,setBookings] = useState([])

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings')
            const data = await response.json()
            setBookings(data)
        }

        fetchBookings()
    },[])

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.email} - {new Date(booking.date).toLocaleDateString()} - {new Date(booking.time).toLocaleTimeString()} - {booking.service} - {booking.barber}
                    </li>
                )

                )}
            </ul>
        </div>
    )
}

export default Admin;
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header> The Actor's Barbershop</header>
      <h1>The Barborshop</h1>
      <nav>
        <a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">admin</a>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App

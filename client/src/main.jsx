import  React  from 'react'
import  ReactDOM  from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx';
import Staff from './pages/staff.jsx';
import Services from './pages/services.jsx';
import Booking from './pages/booking.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route  path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="staff" element={<Staff />}/>
        <Route path="services" element={<Services />}/>
        <Route path="booking" element={<Booking />}/>
        <Route path="admin" element={<Admin />}/>
      </Route>
    </Routes>
  </Router>,
)

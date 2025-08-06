import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Rides from './pages/Rides'
import './App.css'
import Home from './pages/Home'
import BookForm from './pages/BookForm'
import Ride from './pages/Ride'
import BookedTickets from './components/BookedTickets'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/book" element={<BookForm />} />
          <Route path="/booking" element={<BookedTickets />} />
          <Route path="/rides/:id" element={<Ride />} />
        </Routes>
      </div>
    </>
  )
}

export default App

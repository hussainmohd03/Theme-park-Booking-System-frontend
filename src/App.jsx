import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Rides from './pages/Rides'
import './App.css'
import Home from './pages/Home'
import Ride from './pages/Ride'
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<Ride />} />
        </Routes>
      </div>
    </>
  )
}

export default App

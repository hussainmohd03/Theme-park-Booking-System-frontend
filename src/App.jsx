import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import './App.css'
import Ride from './pages/Ride'

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/rides" element={<Home />} />
          <Route path="/rides/:id" element={<Ride />} />
        </Routes>
      </div>
    </>
  )
}

export default App

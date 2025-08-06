import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Rides from './pages/Rides'
import './App.css'
import Home from './pages/Home'
import BookForm from './pages/BookForm'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/booking" element={<BookForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App

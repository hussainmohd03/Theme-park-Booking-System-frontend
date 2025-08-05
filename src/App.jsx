import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App

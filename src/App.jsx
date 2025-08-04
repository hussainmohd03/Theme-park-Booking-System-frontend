import { Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

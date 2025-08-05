import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">🎢 WonderWorld</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rides">Rides</NavLink>
        <NavLink id="nav-button">Book Now</NavLink>
      </div>
    </nav>
  )
}

export default Nav

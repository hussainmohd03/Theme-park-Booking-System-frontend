import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="logo">🎢 WonderWorld</div>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rides">Rides</NavLink>
        <NavLink to="/booking">booking</NavLink>
        <NavLink id="nav-button" to="/book">
          Book Now
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav

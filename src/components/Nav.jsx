import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar">
      <h3>Theme Park</h3>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rides"> Rides </NavLink>
        <NavLink>Some</NavLink>
      </div>
    </nav>
  )
}

export default Nav

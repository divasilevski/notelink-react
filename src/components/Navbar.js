import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-success">
      <div className="navbar-brand">
        Notelink React
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
          >
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about"
          >
            Инфо
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
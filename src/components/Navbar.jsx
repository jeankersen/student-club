import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Club Étudiant</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/projet">Projet</NavLink>
        </li>
        <li>
          <NavLink to="/commanditaires">Commanditaires</NavLink>
        </li>
        <li>
          <NavLink to="/histoire">Histoire</NavLink>
        </li>
        <li>
          <NavLink to="/competitions">Compétitions</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

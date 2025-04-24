import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4 shadow-sm w-100">
      <div className="container-fluid w-100">
        <NavLink to="/" className="navbar-brand fw-bold">
          <img src="assets/images/logo.png" alt="Logo" height="50" /> 
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        > 
          <span className="visually-hidden">Toggle navigation</span>  
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/proveedores" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Proveedores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/clientes" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/usuarios" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/logout" 
                className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link text-danger"}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

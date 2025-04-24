import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // <nav className='navbar navbar-dark bg-primary'>
    //   <NavLink className></NavLink>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">Home</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
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

export default NavBar
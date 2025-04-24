import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
      navigate('/');
    }
  };

  return (
    <div className="container mt-5 text-black">
      <h2 className='text-danger'>Logout</h2>
      <p className="lead">Si cierra sesión, será redirigido a la página de inicio.</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Logout;

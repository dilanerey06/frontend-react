import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-5 text-black">
      <h1 className="display-4 fw-bold mb-4">Bienvenido al Panel Administrativo</h1>
      <p className="lead">
        Este proyecto es un ejercicio práctico desarrollado con <strong>React</strong> y <strong>Vite</strong>, el cual simula un <strong>panel administrativo moderno</strong> para gestionar distintos recursos de una organización.
      </p>
      
      <hr className="my-4 text-white"/>

      <h2 className="h4 mt-4">Características del proyecto:</h2>
      <ul className="list-unstyled mt-3">
        <li>✔️ Navegación moderna usando <strong>React Router</strong>.</li>
        <li>✔️ Barra de navegación superior con logo y enlaces a secciones: <strong>Clientes, Proveedores, Usuarios y Logout</strong>.</li>
        <li>✔️ Uso del framework <strong>Bootstrap</strong> para estilos rápidos, consistentes y responsivos.</li>
        <li>✔️ Estructura clara para facilitar el mantenimiento y escalabilidad del proyecto.</li>
      </ul>

      <p className="mt-4">
        Esta aplicación sirve como una base para futuros desarrollos de sistemas administrativos o dashboards personalizados.
      </p>
      <h2 className="h4 mt-4">Realizado por:</h2>
        <ul className="list-unstyled mt-3">
        <li>👤 Dilan Esteban Rey Sepúlveda - 2190397</li>
        <li>👤 Silvia Alejandra Cárdenas Santos - 2210102</li>
      </ul>
    </div>
  )
}

export default HomePage;

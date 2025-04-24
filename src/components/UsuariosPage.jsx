import React from 'react';

const UsuariosPage = () => {
  const usuarios = [
    { id: 1, nombre: 'Ana López', rol: 'Administrador', email: 'ana.lopez@example.com' },
    { id: 2, nombre: 'Pedro Sánchez', rol: 'Usuario', email: 'pedro.sanchez@example.com' },
    { id: 3, nombre: 'Sofía Ruiz', rol: 'Usuario', email: 'sofia.ruiz@example.com' },
    { id: 4, nombre: 'Javier Martínez', rol: 'Moderador', email: 'javier.martinez@example.com' },
  ];

  return (
    <div className="container mt-5 text-black">
      <h2 className="text-primary">Sección de usuarios</h2>

      <p className="lead">
        Aquí puedes ver los usuarios registrados en el sistema con sus respectivos roles.
      </p>

      <ul className="list-group mt-4">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="list-group-item">
            <h5>{usuario.nombre}</h5>
            <p><strong>Rol:</strong> {usuario.rol}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsuariosPage;

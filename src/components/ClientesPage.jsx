import React from 'react';

const ClientesPage = () => {
  const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', telefono: '123-456-789' },
    { id: 2, nombre: 'María Gómez', email: 'maria.gomez@example.com', telefono: '987-654-321' },
    { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@example.com', telefono: '555-123-456' },
    { id: 4, nombre: 'Laura Martínez', email: 'laura.martinez@example.com', telefono: '444-567-890' },
  ];

  return (
    <div className="container mt-5 text-black">
      <h2 className="text-primary">Sección de clientes</h2>

      <p className="lead">
        Aquí puedes encontrar los clientes registrados en el sistema.
      </p>

      <ul className="list-group mt-4">
        {clientes.map((cliente) => (
          <li key={cliente.id} className="list-group-item">
            <h5>{cliente.nombre}</h5>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientesPage;

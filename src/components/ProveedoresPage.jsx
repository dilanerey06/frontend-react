import React from 'react';

const ProveedoresPage = () => {
  const proveedores = [
    { id: 1, nombre: 'Proveedor A', productos: 'Electrónica, Accesorios' },
    { id: 2, nombre: 'Proveedor B', productos: 'Ropa, Calzado' },
    { id: 3, nombre: 'Proveedor C', productos: 'Muebles, Decoración' },
    { id: 4, nombre: 'Proveedor D', productos: 'Alimentos, Bebidas' },
  ];

  return (
    <div className="container mt-5 text-black">
      <h2 className="text-primary">Sección de proveedores</h2>

      <p className="lead">
        Aquí puedes encontrar los proveedores registrados en el sistema.
      </p>

      <ul className="list-group mt-4">
        {proveedores.map((proveedor) => (
          <li key={proveedor.id} className="list-group-item">
            <h5>{proveedor.nombre}</h5>
            <p><strong>Productos:</strong> {proveedor.productos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProveedoresPage;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProveedoresPage from './components/ProveedoresPage';
import ClientesPage from './components/ClientesPage';
import UsuariosPage from './components/UsuariosPage';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import Logout from './components/Logout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/proveedores" element={<ProveedoresPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProveedoresPage from './components/ProveedoresPage'
import ClientesPage from './components/ClientesPage'
import UsuariosPage from './components/UsuariosPage'
import NavBar from './components/Navbar'

import './App.css'
import Logout from './components/Logout'

function App() {
    return (
    <div className='p-0 m-0'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/proveedores' element={<ProveedoresPage />}></Route>
          <Route path='/clientes' element={<ClientesPage />}></Route>
          <Route path='/usuarios' element={<UsuariosPage />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App

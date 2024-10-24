import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';  // Importamos los estilos de Materialize
import Home from './pages/Home';
import Events from './pages/Events';
import Alquiler from './pages/Alquiler';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <nav className="nav-wrapper blue">
        <div className="container">
          <ul id="nav-mobile" className="left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Eventos</Link></li>
            <li><Link to="/alquiler">Alquiler</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

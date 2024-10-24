import React from 'react';

const Home = () => {
  const eventos = [
    { id: 1, nombre: "Fiesta Temática Retro", fecha: "2024-11-01", lugar: "O'Farrell Sala 1" },
    { id: 2, nombre: "Concierto de Rock", fecha: "2024-11-15", lugar: "O'Farrell Sala 2" },
    { id: 3, nombre: "Fiesta Electrónica", fecha: "2024-12-05", lugar: "O'Farrell Sala 3" },
  ];

  return (
    <div>
      <h1>Bienvenidos a O'Farrell</h1>
      <p>Próximos eventos destacados:</p>
      <ul className="collection">
        {eventos.map(evento => (
          <li key={evento.id} className="collection-item">
            <strong>{evento.nombre}</strong> - {evento.fecha} en {evento.lugar}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

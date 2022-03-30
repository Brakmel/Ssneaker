import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">Tienes {completed} de {total} tiendas con Stock disponible</h2>
  );
}

export { TodoCounter };
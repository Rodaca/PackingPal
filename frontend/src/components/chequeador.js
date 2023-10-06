import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function Chequeador(props) {
  // Estado para almacenar el ícono actual
  const [icono, setIcono] = useState(props.datos.estado ? faCheck : faTimes);

  // Función para cambiar el ícono cuando se hace clic en el botón
  const cambiarIcono = () => {
    setIcono(icono === faCheck ? faTimes : faCheck);
  };

  return (
    <button onClick={cambiarIcono} className="chequeador">
      <FontAwesomeIcon icon={icono} style={{ color: icono === faCheck ? "#28a953" : "#d00b0b" }} />
    </button>
  );
}



export default Chequeador;

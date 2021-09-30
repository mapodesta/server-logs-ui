import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const ServersContext = createContext();

const ServersProvider = (props) => {
  const [busqueda, buscarErrores] = useState({
    nombre: '',
    categoria: '',
  });
  const [consultar, guardarConsultar] = useState(false);

  const { descripcion, server } = busqueda;

  const [errores, servers] = useFetch(busqueda, consultar, server, descripcion);

  return (
    <ServersContext.Provider
      value={{
        errores,
        servers,
        buscarErrores,
        guardarConsultar,
      }}
    >
      {props.children}
    </ServersContext.Provider>
  );
};

export default ServersProvider;

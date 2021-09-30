import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ServersContext = createContext();

const ServersProvider = (props) => {
  const [errores, guardarErrores] = useState([]);
  const [servers, guardarServer] = useState([]);
  const [busqueda, buscarErrores] = useState({
    nombre: '',
    categoria: '',
  });
  const [consultar, guardarConsultar] = useState(false);

  const { descripcion, server } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerDataServer = async () => {
        console.log(busqueda);
        const url = `https://server-log-api.herokuapp.com/api/users/getinfobydesc`;

        const resultado = await axios.get(url, {
          params: {
            descripcion,
            server,
          },
        });
        guardarErrores(resultado.data);
      };
      obtenerDataServer();
    }
  }, [busqueda, consultar, server, descripcion]);

  useEffect(() => {
    const obtenerResultado = async () => {
      const url = `https://server-log-api.herokuapp.com/api/users/geterrores`;
      const resultado = await axios.get(url);
      const urlServers = `https://server-log-api.herokuapp.com/api/users/getservers`;
      const listadoServers = await axios.get(urlServers);
      guardarErrores(resultado.data);
      guardarServer(listadoServers);
    };
    obtenerResultado();
  }, []);

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

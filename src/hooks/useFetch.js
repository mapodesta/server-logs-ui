import { API } from '../axios/config';
import { useEffect, useState } from 'react';

const useFetch = (busqueda, consultar, server, descripcion) => {
  const [errores, guardarErrores] = useState([]);
  const [servers, guardarServer] = useState([]);

  useEffect(() => {
    if (consultar) {
      const obtenerDataServer = async () => {
        const resultado = await API.get('/getinfobydesc', {
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
      const resultado = await API.get('/geterrores');
      const listadoServers = await API.get('/getservers');
      guardarErrores(resultado.data);
      guardarServer(listadoServers);
    };
    obtenerResultado();
  }, []);

  return [errores, servers];
};

export default useFetch;

import { API } from '../axios/config';
import { useEffect, useState } from 'react';

const useFetch = (search, consult, server, description) => {
  const [errors, saveErrors] = useState([]);
  const [servers, saveServers] = useState([]);

  useEffect(() => {
    if (consult) {
      const getDataServer = async () => {
        const result = await API.get('/getinfobydesc', {
          params: {
            description,
            server,
          },
        });
        saveErrors(result.data);
      };
      getDataServer();
    }
  }, [search, consult, server, description]);

  useEffect(() => {
    const getResult = async () => {
      const result = await API.get('/geterrores');
      const listadoServers = await API.get('/getservers');
      saveErrors(result.data);
      saveServers(listadoServers);
    };
    getResult();
  }, []);

  return [errors, servers];
};

export default useFetch;

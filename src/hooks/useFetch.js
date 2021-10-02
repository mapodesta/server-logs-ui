import { API } from '../axios/config';
import { useEffect, useState } from 'react';

const useFetch = (search, consult, server, description, offset) => {
  const [errors, saveErrors] = useState([]);
  const [servers, saveServers] = useState([]);
  const [paginationInfo, savePaginationInfo] = useState({});

  useEffect(() => {
    if (consult) {
      const getDataServer = async () => {
        const result = await API.get('/getinfobydesc', {
          params: {
            description,
            server,
            offset,
          },
        });
        saveErrors(result.data.serverInfo);
        savePaginationInfo(result.data.paginationValue);
      };
      getDataServer();
    }
  }, [search, consult, server, description, offset]);

  useEffect(() => {
    const getResult = async () => {
      const listadoServers = await API.get('/getservers');
      saveServers(listadoServers);
    };
    getResult();
  }, []);

  return [errors, servers, paginationInfo];
};

export default useFetch;

import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const ServersContext = createContext();

const ServersProvider = (props) => {
  const [search, searchErrors] = useState({
    description: '',
    server: '',
  });
  const [consult, saveConsult] = useState(false);

  const { description, server } = search;

  const [errors, servers] = useFetch(search, consult, server, description);

  return (
    <ServersContext.Provider
      value={{
        errors,
        servers,
        searchErrors,
        saveConsult,
      }}
    >
      {props.children}
    </ServersContext.Provider>
  );
};

export default ServersProvider;

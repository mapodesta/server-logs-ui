import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const ServersContext = createContext();

const ServersProvider = (props) => {
  const [search, searchErrors] = useState({
    description: '',
    server: '',
  });

  const [offset, setOffset] = useState(0);

  const [consult, saveConsult] = useState(false);

  const { description, server } = search;

  const [errors, servers, paginationInfo] = useFetch(
    search,
    consult,
    server,
    description,
    offset
  );

  return (
    <ServersContext.Provider
      value={{
        errors,
        servers,
        offset,
        paginationInfo,
        searchErrors,
        saveConsult,
        setOffset,
      }}
    >
      {props.children}
    </ServersContext.Provider>
  );
};

export default ServersProvider;

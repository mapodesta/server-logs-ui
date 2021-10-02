import React, { useContext, useState } from 'react';
import { ServersContext } from '../context/ServersContext';

const Formulario = () => {
  const [search, saveSearch] = useState({
    description: '',
    server: '',
  });

  const { searchErrors, saveConsult, servers } = useContext(ServersContext);

  const getData = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchErrors(search);
        saveConsult(true);
      }}
    >
      <div className="text-center">
        <h2>Monitoreo Servidores MELI</h2>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            data-testid="description"
            name="description"
            className="form-control"
            type="text"
            placeholder="Descripcion de falla"
            onChange={getData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            data-testid="server"
            name="server"
            onChange={getData}
          >
            <option value="" data-testid="serveroptions">
              Selecciona server
            </option>
            {servers?.data?.length &&
              servers.data.map((server, index) => {
                return (
                  <option
                    name="server"
                    key={index}
                    value={server.server}
                    onChange={getData}
                  >
                    {server.server}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-md-4">
          <input
            data-testid="btn-submit"
            type="submit"
            className="btn btn-primary"
            value="Buscar Fallos"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;

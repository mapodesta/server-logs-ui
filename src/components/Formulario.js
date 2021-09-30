import React, { useContext, useState } from 'react';
import { ServersContext } from '../context/ServersContext';

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    descripcion: '',
    server: '',
  });

  const { buscarErrores, guardarConsultar, servers } =
    useContext(ServersContext);

  const obtenerDatos = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        console.log(busqueda);
        e.preventDefault();
        buscarErrores(busqueda);
        guardarConsultar(true);
      }}
    >
      <div className="text-center">
        <h2>Monitoreo Servidores MELI</h2>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            data-testid="descripcion"
            name="descripcion"
            className="form-control"
            type="text"
            placeholder="Descripcion de falla"
            onChange={obtenerDatos}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            data-testid="server"
            name="server"
            onChange={obtenerDatos}
          >
            <option value="" data-testid="serveroptions">
              Selecciona server
            </option>
            {servers &&
              servers.data &&
              servers.data.map((server, index) => {
                return (
                  <option
                    name="server"
                    key={index}
                    value={server.server}
                    onChange={obtenerDatos}
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

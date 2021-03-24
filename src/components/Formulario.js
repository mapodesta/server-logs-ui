import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);

  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  const obtenerDatosRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca Bebidas por categorias o ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="buscar por ingrediente"
            onChange={obtenerDatosRecetas}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosRecetas}
          >
            <option value="">Selecciona categoria</option>
            {categorias.map((categoria) => {
              return (
                <option
                  name="categoria"
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                  onChange={obtenerDatosRecetas}
                >
                  {categoria.strCategory}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//creacion del context
export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  const [categorias, guardarCategorias] = useState([]);
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const respuesta = await axios.get(url);

      guardarCategorias(respuesta.data.drinks);
    };
    obtenerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

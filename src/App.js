import React from 'react';
import Header from './components/header';
import Formulario from './components/Formulario';
import ListaErrores from './components/ListaErrores';
import ServersProvider from './context/ServersContext';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

function App() {
  return (
    <ServersProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
        <ListaErrores />
      </div>
    </ServersProvider>
  );
}

export default App;

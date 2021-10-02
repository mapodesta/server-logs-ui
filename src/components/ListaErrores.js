import React, { useContext } from 'react';
import { ServersContext } from '../context/ServersContext';
import Paginator from './Paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { columns } from '../constants/table';

const ListaErrores = () => {
  const { errors } = useContext(ServersContext);
  return (
    <>
      <div className="row mt-5">
        <BootstrapTable keyField="idServers" data={errors} columns={columns} />

        <Paginator />
      </div>
    </>
  );
};
export default ListaErrores;

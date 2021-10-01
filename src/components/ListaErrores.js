import React, { useContext } from 'react';
import { ServersContext } from '../context/ServersContext';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

const ListaErrores = () => {
  const { errors } = useContext(ServersContext);

  const columns = [
    {
      dataField: 'server',
      text: 'Server Name',
    },
    {
      dataField: 'idServers',
      text: 'Server Id',
    },
    {
      dataField: 'description',
      text: 'Error Description',
    },
    {
      dataField: 'server_type',
      text: 'Server Type',
    },
  ];
  return (
    <>
      <div className="row mt-5">
        <BootstrapTable
          keyField="idServers"
          data={errors}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    </>
  );
};
export default ListaErrores;

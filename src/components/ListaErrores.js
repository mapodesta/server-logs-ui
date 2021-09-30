import React, { useContext } from 'react';
// import { Table } from 'react-bootstrap';
import { ServersContext } from '../context/ServersContext';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

const ListaErrores = () => {
  const { errores } = useContext(ServersContext);

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
          data={errores}
          columns={columns}
          pagination={paginationFactory()}
        />
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Server Name</th>
              <th>Error Description</th>
              <th>Server Type</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {errores?.map((error, index) => (
              <tr key={error.idServers}>
                <td>{index + 1}</td>
                <td>{error.server}</td>
                <td>{error.description}</td>
                <td>{error.server_type}</td>
                <td>{error.created_at}</td>
              </tr>
            ))}
          </tbody>
        </Table> */}
      </div>
    </>
  );
};
export default ListaErrores;

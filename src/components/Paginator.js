import { useContext, useEffect } from 'react';
import { ServersContext } from '../context/ServersContext';
import Pagination from 'react-bootstrap/Pagination';

const Paginator = () => {
  const { offset, setOffset, paginationInfo, saveConsult } =
    useContext(ServersContext);

  const currentPageNumbers = Array.from(
    Array(paginationInfo.totalPages).keys()
  );

  useEffect(() => {
    saveConsult(true);
  }, [offset, saveConsult]);

  return (
    <>
      {currentPageNumbers?.map((pages, index) => (
        <Pagination.Item
          key={index}
          onClick={() => setOffset(index)}
          active={offset === index}
        >
          {pages + 1}
        </Pagination.Item>
      ))}
    </>
  );
};

export default Paginator;

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export function Pages({
  handlePagesFn,
  currentPageNum,
  MAX_RESULTS_PER_PAGE,
  totalPages,
  totalResults,
}) {
  const pageNumbers =
    totalResults > MAX_RESULTS_PER_PAGE &&
    [...Array(totalPages + 1).keys()].slice(1);

  //   let pageOffsetPos;
  //   let pageOffsetNeg;
  let currentButtonStart;
  //   let currentButtonEnd;
  const currentPageNumbers = [];

  const handlePageNumbers = () => {
    // pageOffsetPos = currentPageNum + 3;
    // pageOffsetNeg = currentPageNum - 3;
    // currentButtonStart = currentPageNum <= 3 ? 1 : pageOffsetNeg;
    // currentButtonEnd = currentPageNum <= 3 ? 6 : pageOffsetPos;
    // if (currentPageNum >= pageNumbers?.length - 3) {
    //   currentButtonEnd = Math.max(pageNumbers?.length, 1);
    //   currentButtonStart = Math.max(pageNumbers?.length - 5, 1);
    // }
    // while (currentPageNumbers.length) {
    //   currentPageNumbers.pop();
    // }
    // for (let i = currentButtonStart; i <= currentButtonEnd; i++) {
    //   currentPageNumbers.push(i);
    // }
    return (
      <>
        {/* <Pagination.First onClick={() => handlePagesFn(1)} /> */}
        {/* <Pagination.Prev onClick={() => handlePagesFn(currentButtonStart)} /> */}
        {/* {currentButtonStart > 1 ? <Pagination.Ellipsis /> : null} */}
        {currentPageNumbers.map((pages, index) => (
          <Pagination.Item
            key={index}
            onClick={() => handlePagesFn(index + currentButtonStart)}
            active={currentPageNum === index + currentButtonStart}
            className="pagination__item"
          >
            {pages}
          </Pagination.Item>
        ))}
        {/* {pageOffsetPos < pageNumbers?.length ? <Pagination.Ellipsis /> : null} */}
        {/* <Pagination.Next onClick={() => handlePagesFn(currentButtonEnd)} />
        <Pagination.Last onClick={() => handlePagesFn(pageNumbers?.length)} /> */}
      </>
    );
  };

  return (
    totalResults > MAX_RESULTS_PER_PAGE && (
      <Pagination>{handlePageNumbers()}</Pagination>
    )
  );
}

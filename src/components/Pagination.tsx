import React from 'react';

type PaginationProps = {
  startPage: number;
  endPage: number;
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
};

export default function Pagination({
  startPage,
  endPage,
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className='mx-auto'>
      <div className='pagination my-4 flex justify-center gap-0 pt-2 md:gap-2'>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={number === currentPage ? 'bg-blue-600' : ''}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}

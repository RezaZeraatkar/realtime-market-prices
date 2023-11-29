import { useCallback, useState } from 'react';

export const usePagination = (itemsPerPage: number, dataLength: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = dataLength ? Math.ceil(dataLength / itemsPerPage) : 0;

  // Calculate the page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Adjust the start and end page if we're at the end of the page range
  if (endPage - startPage < 4 && startPage > 1) {
    startPage = Math.max(1, endPage - 4);
  }

  // Function to handle page change
  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  // Get the items for the current page
  const startItem = (currentPage - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;

  return {
    startPage,
    endPage,
    currentPage,
    totalPages,
    handlePageChange,
    startItem,
    endItem,
  };
};

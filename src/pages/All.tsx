import React, { useEffect, useState } from 'react';
import Table from 'components/Table';
import { ICoin } from '../@types/ICoin';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket from 'react-use-websocket';
import { setData, setReadyState } from 'store/slices/webSocketSlice';
import Pagination from 'components/Pagination';

export default function All() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const socketUrl = 'wss://api.bgcrypto.io/v1/public/markets';
  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      dispatch(setData(JSON.parse(lastMessage.data)));
      setLoading(false);
    }
    dispatch(setReadyState(readyState));
  }, [lastMessage, readyState, dispatch]);

  // @ts-ignore
  const data: ICoin = useSelector((state) => state.webSocket.data);
  // @ts-ignore
  const currentReadyState = useSelector((state) => state.webSocket.readyState);

  const itemsPerPage = 15;

  // Calculate the total number of pages
  const totalPages = data
    ? Math.ceil(Object.keys(data.data).length / itemsPerPage)
    : 0;

  // Calculate the page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Adjust the start and end page if we're at the end of the page range
  if (endPage - startPage < 4 && startPage > 1) {
    startPage = Math.max(1, endPage - 4);
  }

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get the items for the current page
  const startItem = (currentPage - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;
  const currentItems = data
    ? Object.keys(data.data).slice(startItem, endItem)
    : [];

  return (
    <div className='w-full'>
      <Table data={data} currentItems={currentItems} loading={loading} />
      {!loading && (
        <Pagination
          startPage={startPage}
          endPage={endPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

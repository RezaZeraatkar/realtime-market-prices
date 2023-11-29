// All.tsx
import React, { useEffect, useState } from 'react';
import Table from 'components/table';
import { ICoin } from 'types/ICoin';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState as rs } from 'react-use-websocket';
import { setData, setReadyState } from 'store/slices/webSocketSlice';
import Pagination from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { RootState } from 'store/rootReducer';

// Table header
const cols = [
  'Product',
  'Price',
  '24h Change',
  'Market',
  '24h baseVolume',
  'quoteVolume',
  'Actions',
];
// number of rows in each table page
const itemsPerPage = 15;

export default function All() {
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

  const currentReadyState = useSelector(
    (state: RootState) => state.webSocket.readyState
  );
  useEffect(() => {
    switch (currentReadyState) {
      case rs.CONNECTING:
        // The connection is being established
        console.log('Connecting to WebSocket server...');
        break;
      case rs.OPEN:
        // The connection is open and ready to communicate
        console.log('WebSocket connection established');
        break;
      case rs.CLOSING:
        // The connection is closing
        console.log('WebSocket connection closing...');
        break;
      case rs.CLOSED:
        // The connection is closed or couldn't be opened
        console.log('WebSocket connection closed');
        // You can attempt to reconnect here
        break;
      default:
        // The WebSocket object is not yet instantiated
        console.log('WebSocket not instantiated');
        break;
    }
  }, [currentReadyState]);

  const data: ICoin = useSelector((state: RootState) => state?.webSocket?.data);
  const dataLength = data ? Object.keys(data.data).length : 0;
  const {
    startPage,
    endPage,
    currentPage,
    totalPages,
    handlePageChange,
    startItem,
    endItem,
  } = usePagination(itemsPerPage, dataLength);

  // Get the items for the current page
  const currentItems = data
    ? Object.keys(data.data).slice(startItem, endItem)
    : [];

  return (
    <div className='w-full'>
      <Table
        cols={cols}
        data={data}
        currentItems={currentItems}
        loading={loading}
      />
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

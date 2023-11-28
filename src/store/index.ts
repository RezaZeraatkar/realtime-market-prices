import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from 'store/slices/webSocketSlice';

const store = configureStore({
  reducer: {
    webSocket: webSocketReducer,
  },
});

export default store;

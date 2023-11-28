import { createSlice } from '@reduxjs/toolkit';
import { ReadyState } from 'react-use-websocket';

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState: { data: null, readyState: ReadyState.CONNECTING },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setReadyState: (state, action) => {
      state.readyState = action.payload;
    },
  },
});

export const { setData, setReadyState } = webSocketSlice.actions;

export default webSocketSlice.reducer;

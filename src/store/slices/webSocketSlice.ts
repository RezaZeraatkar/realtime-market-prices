// webSocketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadyState } from 'react-use-websocket';
import { ICoin } from 'types/ICoin';

// Define an interface for your state
interface WebSocketState {
  data: ICoin;
  readyState: ReadyState;
}

// Use the interface in your initial state
const initialState: WebSocketState = {
  data: { event: '', data: {} },
  readyState: ReadyState.CONNECTING,
};

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      // Replace 'any' with the actual type of your data
      state.data = action.payload;
    },
    setReadyState: (state, action: PayloadAction<ReadyState>) => {
      state.readyState = action.payload;
    },
  },
});

export const { setData, setReadyState } = webSocketSlice.actions;

export default webSocketSlice.reducer;

// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import webSocketReducer from 'store/slices/webSocketSlice';

const rootReducer = combineReducers({
  webSocket: webSocketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

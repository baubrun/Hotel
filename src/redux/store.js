import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from "./roomSlice";


export default configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
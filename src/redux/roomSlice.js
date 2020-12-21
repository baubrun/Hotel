import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../api";
import { formatData } from "../util";

export const getRooms = createAsyncThunk("/getRooms", async () => {
  try {
    const res = await axios.get(`${domain}/rooms`);
    return res.data;
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});


export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    loading: false,
  },
  reducers: {

  },
  extraReducers: {

    [getRooms.pending]: (state) => {
      state.loading = true;
    },
    [getRooms.fulfilled]: (state, action) => {
      state.loading = false;
      const {error, rooms} = action.payload
      if (error) {
        state.error = error;
      } else {
        state.rooms = rooms
      }
    },
    [getRooms.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    
  },
});

export const roomsState = (state) => state.rooms;
export default roomsSlice.reducer;

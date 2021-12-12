import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 1,
  sort: 'R',
}
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    reset: (state) => {
      state = {...state}
    },
    update: (state, action) => {
      state = {...state, ...action}
    }
  }
})



export const { reset, update } = searchSlice.actions;
export const searchSelector = (state) => state

export default searchSlice.reducer
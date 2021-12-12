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
    nextPage: (state) => {
      console.log('ping', state)
      state.page += 1
    },
    prevPage: (state) => {
      state.page -= 1
    },
    choosePage: (state, action) => {
      state.page = action.payload
    }
  }
})



export const { reset, nextPage, prevPage, choosePage } = searchSlice.actions;

export default searchSlice.reducer
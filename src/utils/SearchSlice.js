import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "Search Slice",
  initialState: { list: {}, query: "" },
  reducers: {
    addValue: (state, payload) => {
      const obj = { [payload.payload.key]: payload.payload.values };
      Object.assign(state, { list: { ...state.list, ...obj } });
    },
    selectedQuery: (state, action) => {
      state.query = action.payload.query;
    },
  },
});

export default searchSlice.reducer;
export const { addValue, selectedQuery } = searchSlice.actions;

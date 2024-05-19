import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

// export const selectValueFilters = (state) => state.filters.value;

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
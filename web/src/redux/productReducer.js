import { createSlice } from "@reduxjs/toolkit";

export const productDetails = createSlice({
  name: "productDetails",
  initialState: {},
  reducers: {
    updateProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.

      state.product = action.payload;
    },

    updateVariant: (state, action) => {
      state.variant = action.payload;
    },

    updateDestination: (state, action) => {
      state.destination = action.payload;
    },

    updateSelectedVariant: (state, action) => {
      state.selectedVariant = action.payload;
    },

    resetData: (state) => {
      state = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProduct,
  updateVariant,
  updateDestination,
  updateSelectedVariant,
  resetData
} = productDetails.actions;

export default productDetails.reducer;

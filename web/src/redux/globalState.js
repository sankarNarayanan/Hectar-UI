import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const globalState = createSlice({
  name: "globalState",
  initialState: {},
  reducers: {
    updateState: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.

      state[action.payload.name] = action.payload.data;
    },
  },
});

/**
 * The Custom hook The global state that can be shared accross components and
 * differentiated by name for different instances
 * @param {string} name - Name of the State that can be shared across componentrs
 * @param {any} defaultValue - Default value to update
 *
 */
export function useGlobalState(name, defaultValue) {
  // Using the usereducer hook to get the value for the specific name
  let globalStateValue = useSelector((state) => state.globalState[name]);

  // If the state value is underined assuming the value is unset and
  // returning the default value
  if (globalStateValue === undefined) {
    globalStateValue = defaultValue;
  }
  const dispatch = useDispatch();

  // Setting the value into the redux
  const setGlobalState = (data) => {
    dispatch(globalState.actions.updateState({ name, data }));
  };
  return [globalStateValue, setGlobalState];
}

export default globalState.reducer;

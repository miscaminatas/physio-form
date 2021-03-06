import { createSlice } from "@reduxjs/toolkit";
import { initErrorState } from "@common/globalConstants";

const initialState = {
  userData: undefined,
  loading: true,
  error: initErrorState,
};

/**
 * User (Practitioner) resource redux slice for storing a selected user's data from FHIR.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.userData = initialState.userData;
      state.error = initialState.error;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    clearUserError: (state) => {
      state.error = initialState.error;
    },
  },
});

export const {
  setUser,
  setUserLoading,
  clearUser,
  setUserError,
  clearUserError,
} = userSlice.actions;

export default userSlice.reducer;

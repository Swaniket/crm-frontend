import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    registrationPending: (state, action) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload;
    },
    registrationFail: (state, action) => {
      state.isLoading = false;
      state.status = "error";
      state.message = action.payload;
    },
  },
});

const { reducer, actions } = userRegistrationSlice;

export const { registrationPending, registrationSuccess, registrationFail } =
  actions;

export default reducer;

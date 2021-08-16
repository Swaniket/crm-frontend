import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  email: "",
  showResetPasswordForm: true,
};

const passwordSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    otpRequestPending: (state, action) => {
      state.isLoading = true;
    },
    otpRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload.message;
      state.email = action.payload.email
      state.showResetPasswordForm = false;
    },
    updatePasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload;
    },
    otpRequestFail: (state, action) => {
      state.isLoading = false;
      state.status = "error";
      state.message = action.payload;
    },
  },
});

const { reducer, actions } = passwordSlice;

export const {
  otpRequestPending,
  otpRequestSuccess,
  otpRequestFail,
  updatePasswordSuccess,
} = actions;

export default reducer;

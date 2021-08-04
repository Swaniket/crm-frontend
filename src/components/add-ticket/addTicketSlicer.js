import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};

const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    openNewTicketPending: (state, action) => {
      state.isLoading = true;
    },
    openNewTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload;
    },
    openNewTickeFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetSuccessMsg: (state, action) => {
      state.isLoading = false;
      state.successMsg = "";
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTickeFail,
  resetSuccessMsg,
} = actions;

export default reducer;

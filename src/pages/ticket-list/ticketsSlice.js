import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  selectedTicket: {},
  replyMsg: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTicket: (state, action) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!action.payload) return row;
        return row.subject.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    fetchSingleTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.selectedTicket = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    replyTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.replyMsg = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    replyTicketFail: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = action.payload;
    },
    closeTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.replyMsg = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    closeTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetResponseMsg: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = "";
      state.replyMsg = "";
    },
  },
});

const { reducer, actions } = ticketListSlice;

// Action creators
export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
  resetResponseMsg,
} = actions;

// Reducers
export default reducer;

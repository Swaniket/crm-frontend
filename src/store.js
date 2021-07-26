import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-list/ticketsSlice";

// Wrap all the reducers
const store = configureStore({
  reducer: {
      tickets: ticketsReducer
  },
});

export default store;

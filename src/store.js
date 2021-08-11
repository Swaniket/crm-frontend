import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import addNewTicketReducer from "./components/add-ticket/addTicketSlicer";
import userRegistrationReducer from "./components/registration-form/userRegistrationSlice";

// Wrap all the reducers
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    openTicket: addNewTicketReducer,
    registration: userRegistrationReducer,
  },
});

export default store;

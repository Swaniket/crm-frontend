import { getAllTickets } from "../../api/ticketApi";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} from "./ticketsSlice";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  // Fetch data from API
  try {
    const result = await getAllTickets()
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (e) {
    dispatch(fetchTicketFail(e.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};

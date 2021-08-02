import {
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
} from "./ticketsSlice";
import {
  getAllTickets,
  getSingleTicket,
  updateTicketReply,
  updateTicketStatusClose,
} from "../../api/ticketApi";

// Action for fetching All Tickets
export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (e) {
    dispatch(fetchTicketFail(e.message));
  }
};

// Action for fetching the Searched Tickets
export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};

// Action for fetching Single Ticket
export const fetchSingleTickets = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result !== undefined && result.data.result
      )
    );
  } catch (e) {
    dispatch(fetchSingleTicketFail(e.message));
  }
};

// Action for Replying on Tickets
export const replyOnTickets = (_id, replyMsgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateTicketReply(_id, replyMsgObj);
    console.log(result);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }
    dispatch(fetchSingleTickets(_id));
    dispatch(replyTicketSuccess(result.message));
  } catch (e) {
    console.log(e);
    dispatch(replyTicketFail(e.message));
  }
};

// Action for Closing a ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClose(_id);
    console.log(result);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }
    dispatch(fetchSingleTickets(_id));
    dispatch(closeTicketSuccess(result.message));
  } catch (e) {
    console.log(e);
    dispatch(closeTicketFail(e.message));
  }
};

import {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTickeFail,
} from "./addTicketSlicer";
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(openNewTicketPending());

      const result = await createNewTicket(formData);

      if (result.status === "error") {
        return dispatch(openNewTickeFail(result.message));
      }

      dispatch(openNewTicketSuccess(result.message));
    } catch (e) {
      console.log(e);
      dispatch(openNewTickeFail(e));
    }
  });
};

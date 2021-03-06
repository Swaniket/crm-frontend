import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const ticketUrl = rootUrl + "ticket/";
const closeTicketUrl = rootUrl + "ticket/close-ticket/";

// Fetch all ticket backend API call
export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

// Get a ticket by ID API call
export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrl + _id, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });
      console.log(result);
      resolve(result);
    } catch (e) {
      console.log(e.message);
      reject(e);
    }
  });
};

// Reply to a message API call
export const updateTicketReply = (_id, replyMsgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(ticketUrl + _id, replyMsgObj, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });
      resolve(result.data);
    } catch (e) {
      console.log(e.message);
      reject(e);
    }
  });
};

// Close a ticket
export const updateTicketStatusClose = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
          },
        }
      );
      resolve(result.data);
    } catch (e) {
      console.log(e.message);
      reject(e);
    }
  });
};

// Open a new ticket
export const createNewTicket = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(ticketUrl, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });
      resolve(result.data);
    } catch (e) {
      console.log(e.message);
      reject(e);
    }
  });
};

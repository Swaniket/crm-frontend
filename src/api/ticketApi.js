import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const getSingleTicketUrl = rootUrl + "ticket/";

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
      const result = await axios.get(getSingleTicketUrl + _id, {
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
      const result = await axios.put(getSingleTicketUrl + _id, replyMsgObj, {
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

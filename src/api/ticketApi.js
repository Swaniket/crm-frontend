import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YW5pa2V0NEBlbWFpbC5jb20iLCJpYXQiOjE2MjczNzgxNDUsImV4cCI6MTYyNzM3OTk0NX0.XgF6twCDiWS5gpJD-0mYfGMZNEywhJSYB3fqsDJpXmQ",
        },
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

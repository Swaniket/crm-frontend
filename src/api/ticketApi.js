import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YW5pa2V0NEBlbWFpbC5jb20iLCJpYXQiOjE2MjczMDcyNDMsImV4cCI6MTYyNzMwOTA0M30.JmLqyqgrIz3nFWGGIrRf6YS4D0vQxloXZwKlFe9f6to",
        },
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

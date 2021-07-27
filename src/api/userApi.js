import axios from "axios";

const rootURL = "http://localhost:3001/v1/";
const loginURL = rootURL + "user/login";
const userProfileURL = rootURL + "user";

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginURL, formData);
      resolve(result.data);

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
    } catch (e) {
      reject(e);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token Not found!");
      }
      const result = await axios.get(userProfileURL, {
        headers: {
          Authorization: `Bearer ${accessJWT}`,
        },
      });
      console.log(result);
      resolve(result.data);

      
    } catch (e) {
      console.log(e)
      reject(e.message);
    }
  });
};

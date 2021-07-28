import axios from "axios";

const rootURL = "http://localhost:3001/v1/";
const loginURL = rootURL + "user/login";
const userProfileURL = rootURL + "user";
const logoutURL = rootURL + "user/logout";
const newAccessJWT = rootURL + "tokens";

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
      resolve(result.data);
    } catch (e) {
      console.log(e);
      reject(e.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutURL, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject("Token Not found!");
      }
      const result = await axios.get(newAccessJWT, {
        headers: {
          Authorization: `Bearer ${refreshJWT}`,
        },
      });

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }

      resolve(true);
    } catch (e) {
      if (e.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite")
      }
      reject(false);
    }
  });
};

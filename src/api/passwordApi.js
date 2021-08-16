import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const otpRequestUrl = rootUrl + "/user/reset-password";
const updatePasswordUrl = rootUrl + "/user/reset-password";

// Requests OTP to reset password
export const requestPasswordOtp = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(otpRequestUrl, { email });
      console.log(data);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

// Update password API call
export const updateUserPassword = (passObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(updatePasswordUrl, passObj);
      console.log(data);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

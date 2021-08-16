import {
  otpRequestPending,
  otpRequestSuccess,
  otpRequestFail,
  updatePasswordSuccess,
} from "./passwordSlice";
import { requestPasswordOtp, updateUserPassword } from "../../api/passwordApi";

export const passwordResetOtpAction = (email) => async (dispatch) => {
  try {
    dispatch(otpRequestPending());

    const result = await requestPasswordOtp(email);
    result.status === "success"
      ? dispatch(otpRequestSuccess({ message: result.message, email }))
      : dispatch(otpRequestFail(result.message));

    console.log(result);
  } catch (e) {
    dispatch(otpRequestFail(e.message));
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  try {
    dispatch(otpRequestPending());

    const result = await updateUserPassword(formData);
    result.status === "success"
      ? dispatch(updatePasswordSuccess(result.message))
      : dispatch(otpRequestFail(result.message));

    console.log(result);
  } catch (e) {
    dispatch(otpRequestFail(e.message));
  }
};

import {
  registrationPending,
  registrationSuccess,
  registrationFail,
} from "./userRegistrationSlice";
import { userRegistration } from "../../api/userApi";

export const userRegistrationAction = (formData) => async (dispatch) => {
  try {
    dispatch(registrationPending());

    const result = await userRegistration(formData);
    result.status === "success"
      ? dispatch(registrationSuccess(result.message))
      : dispatch(registrationFail(result.message));

    console.log(result);
  } catch (e) {
    dispatch(registrationFail(e.message));
  }
};

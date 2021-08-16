import React from "react";
import { useSelector } from "react-redux";
import ResetPassword from "../../components/password-reset/ResetPassword";
import UpdatePasswordForm from "../../components/password-reset/UpdatePasswordForm";
import "./passwordResetPage.css";

function PasswordResetPage() {
  const { showResetPasswordForm } = useSelector((state) => state.password);

  return (
    <div className="entry-page">
      {showResetPasswordForm ? <ResetPassword /> : <UpdatePasswordForm />}
    </div>
  );
}

export default PasswordResetPage;

import React, { useState } from "react";
import LoginForm from "../../components/login/Login";
import ResetPassword from "../../components/password-reset/ResetPassword";
import "./EntryStyle.css";

function EntryPage() {
  const [selectedForm, setSelectedForm] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const fromSwitcher = (from) => {
    setSelectedForm(from);
  };

  return (
    <div className="entry-page">
      {selectedForm === "login" && <LoginForm fromSwitcher={fromSwitcher} />}

      {selectedForm === "reset" && (
        <ResetPassword
          // handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          fromSwitcher={fromSwitcher}
          // email={email}
        />
      )}
    </div>
  );
}

export default EntryPage;

import React, { useState } from "react";
import { Card, Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/login/Login";
import ResetPassword from "../../components/password-reset/ResetPassword";
import "./EntryStyle.css";

function EntryPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedForm, setSelectedForm] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill Up the form");
    }

    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please Enter Email");
    }

    console.log(email);
  };

  const fromSwitcher = (from) => {
    setSelectedForm(from);
  };

  return (
    <div className="entry-page">
        {selectedForm === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            fromSwitcher={fromSwitcher}
            email={email}
            password={password}
          />
        )}

        {selectedForm === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            fromSwitcher={fromSwitcher}
            email={email}
          />
        )}
    </div>
  );
}

export default EntryPage;

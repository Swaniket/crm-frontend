import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import { userRegistrationVerification } from "../../api/userApi";
import "./UserVerificationStyle.css";

const initialResponse = {
  status: "",
  message: "",
};

function UserVerification() {
  const { _id, email } = useParams();
  const data = { _id, email };

  const [response, setResponse] = useState(initialResponse);

  console.log(data);

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(data);
      setResponse(result);
      console.log(result);
    };

    !response.status && apiCall();
  }, [response]);

  return (
    <div className="verification-page">
      {!response.status && <Spinner variant="info" animation="grow" />}
      {response.status && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
}

export default UserVerification;

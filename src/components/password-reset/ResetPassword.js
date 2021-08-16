import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { passwordResetOtpAction } from "./passwordAction";

function ResetPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { isLoading, status, message } = useSelector((state) => state.password);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(passwordResetOtpAction(email));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            Reset Password
          </Card.Title>
        </Card.Body>
        {message && (
          <Alert variant={status === "success" ? "success" : "danger"}>
            {message}
          </Alert>
        )}
        <Card.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Client Email"
                className="mb-2"
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Button type="submit" className="mt-2" disabled={isLoading}>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              Reset
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Link href="/">Login</Card.Link>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default ResetPassword;

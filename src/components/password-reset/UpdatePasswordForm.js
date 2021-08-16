import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import "./updatePasswordForm.css";
import { updatePassword } from "./passwordAction";

const initialState = {
  pin: "",
  password: "",
  confirmPass: "",
};

const passVerificationError = {
  hasLength: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpecial: false,
  confirmPassword: false,
};

function UpdatePasswordForm() {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message, email } = useSelector(
    (state) => state.password
  );

  useEffect(() => {}, [newPassword]);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setNewPassword({ ...newPassword, [id]: value });

    if (id === "password") {
      const hasLength = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecial = /[!,@,#,$,%,&]/.test(value);

      setPasswordError({
        ...passwordError,
        hasLength,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpecial,
      });
    }

    if (id === "confirmPass") {
      setPasswordError({
        ...passwordError,
        confirmPassword: newPassword.password === value,
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { pin, password } = newPassword;
    const newPassObj = {
      email,
      pin,
      newPassword: password,
    };
    dispatch(updatePassword(newPassObj));
  };

  return (
    <Card className="py-4">
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            Update Password
          </Card.Title>
        </Card.Body>
        <Card.Body>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="OTP"
                className="mb-2"
                type="number"
                inputId="pin"
                value={newPassword.pin}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>
            <hr />
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Password"
                className="mb-2"
                type="password"
                inputId="password"
                value={newPassword.password}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Confirm Password"
                className="mb-2"
                type="password"
                inputId="confirmPass"
                value={newPassword.confirmPass}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>
            <Form.Text>
              {!passwordError.confirmPassword && (
                <small className="text-danger">Password doesn't match!</small>
              )}
            </Form.Text>

            <ul className="py-2">
              <li
                className={
                  passwordError.hasLength ? "text-success" : "text-danger"
                }
              >
                <small>Minimum 8 Characters</small>
              </li>
              <li
                className={
                  passwordError.hasUpper ? "text-success" : "text-danger"
                }
              >
                <small>Should Contain Atleast One Upper Case Letter</small>
              </li>
              <li
                className={
                  passwordError.hasLower ? "text-success" : "text-danger"
                }
              >
                <small>Should Contain Atleast One Lower Case Letter</small>
              </li>
              <li
                className={
                  passwordError.hasNumber ? "text-success" : "text-danger"
                }
              >
                <small>Should Contain Atleast One Number</small>
              </li>
              <li
                className={
                  passwordError.hasSpecial ? "text-success" : "text-danger"
                }
              >
                <small>
                  Should Contain One of The Spectial Characters i.e, ! @ # $ % &
                </small>
              </li>
            </ul>

            <Button
              type="submit"
              className="py-2"
              disabled={Object.values(passwordError).includes(false)}
            >
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              Update Password
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Text>
            Already Registered? <a href="/">Login Now!</a>
          </Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default UpdatePasswordForm;

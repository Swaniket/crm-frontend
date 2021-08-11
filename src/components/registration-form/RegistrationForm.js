import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { userRegistrationAction } from "./userRegistrationAction";

const initialState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  address: "",
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

function RegistrationForm() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setNewUser({ ...newUser, [id]: value });

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
        confirmPassword: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(userRegistrationAction(newUser));
  };

  return (
    <Card className="py-4">
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            Client Registration
          </Card.Title>
        </Card.Body>
        <Card.Body>
          {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                type="text"
                label="Name"
                inputId="name"
                className="mb-2"
                onChange={handleOnChange}
                value={newUser.name}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Phone No."
                className="mb-2"
                type="text"
                inputId="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Company Email"
                className="mb-2"
                type="email"
                inputId="email"
                value={newUser.email}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Company Name"
                className="mb-2"
                type="text"
                inputId="company"
                value={newUser.company}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Address"
                className="mb-2"
                type="text"
                inputId="address"
                value={newUser.address}
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
                value={newUser.password}
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
                value={newUser.confirmPass}
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
              {/* disabled={isLoading} */}
              {isLoading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}{" "}
              Register Now
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

export default RegistrationForm;

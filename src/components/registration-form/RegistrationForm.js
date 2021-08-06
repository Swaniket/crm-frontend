import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

const initialState = {
  name: "Prem Acharya",
  phone: "0410000000",
  email: "fakeemail@email.com",
  company: "Dented Code",
  address: "George st Sydney",
  password: "sfsd#3Dsg",
  confirmPass: "sfsd#3Dsg",
};

function RegistrationForm() {
  const handleOnChange = (e) => {};

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            Client Registration
          </Card.Title>
        </Card.Body>
        <Card.Body>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Name"
                className="mb-2"
                type="text"
                name="name"
                value={initialState.name}
                onChange={handleOnChange}
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
                name="phone"
                value={initialState.phone}
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
                name="email"
                value={initialState.email}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Company"
                className="mb-2"
                type="text"
                name="company"
                value={initialState.company}
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
                name="address"
                value={initialState.address}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Password"
                className="mb-2"
                type="password"
                name="password"
                value={initialState.password}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Password"
                className="mb-2"
                type="password"
                name="confirmPass"
                value={initialState.confirmPass}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Button type="submit" className="mt-2">
              {/* disabled={isLoading} */}
              {/* {isLoading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}{" "} */}
              Register Now
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Text className="py-2">
            Already Registered? <a href="/">Login Now!</a>
          </Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default RegistrationForm;

import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function ResetPassword({
  handleOnChange,
  handleOnResetSubmit,
  fromSwitcher,
  email,
}) {
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text">Reset Password</Card.Title>
        </Card.Body>

        <Card.Body>
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                className="mb-2"
                value={email}
                onChange={handleOnChange}
                placeholder="Client Email"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Reset
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Link href="#!" onClick={() => fromSwitcher("login")}>
            Login
          </Card.Link>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default ResetPassword;

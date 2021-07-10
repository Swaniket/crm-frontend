import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function LoginForm({
  handleOnChange,
  handleOnSubmit,
  fromSwitcher,
  email,
  password,
}) {
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text">Client Login</Card.Title>
        </Card.Body>
        <Card.Body>
          <Form onSubmit={handleOnSubmit}>
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

            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                className="mb-2"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Login
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Link href="#!" onClick={() => fromSwitcher("reset")}>
            Forget Password
          </Card.Link>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default LoginForm;

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ResetPassword({
  handleOnChange,
  handleOnResetSubmit,
  fromSwitcher,
  email,
}) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="heading-text">RESET PASSWORD</h1>
            <hr />
            <Form onSubmit={handleOnResetSubmit}>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Client Email"
                  required
                />
              </Form.Group>

              <Button type="submit" className="button-global-primary" block>
                Reset
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" className="links" onClick={() => fromSwitcher("login")}>
              Login
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResetPassword;

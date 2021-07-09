import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function LoginForm({handleOnChange, handleOnSubmit, fromSwitcher, email, password}) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="heading-text">CLIENT LOGIN</h1>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email"
                  value = {email}
                  onChange = {handleOnChange}
                  placeholder="Client Email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  name="password"
                  value = {password}
                  onChange = {handleOnChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button type="submit" className="button-global-primary" block>
                Login
              </Button>
            </Form>
            <hr/>
          </Col>
        </Row>

        <Row>
            <Col>
                <a href="#!"  className="links" onClick={() => fromSwitcher('reset')}>Forget Password</a>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;

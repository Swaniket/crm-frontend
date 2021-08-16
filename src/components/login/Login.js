import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Card,
  Spinner,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { userLogin } from "../../api/userApi";

function LoginForm({ fromSwitcher }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/dashboard");
  }, [isAuth, history]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { type, value } = e.target;
    switch (type) {
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill Up the form");
    }
    dispatch(loginPending());
    try {
      const isAuth = await userLogin({ email, password });
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            CRM Ticket System
          </Card.Title>
          <Card.Title
            className="heading-text text-center"
            style={{ marginTop: 0 }}
          >
            <small>Sign In</small>
          </Card.Title>
        </Card.Body>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
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

            <Form.Group>
              <FloatingLabel
                as="input"
                controlId="floatingInput"
                label="Password"
                className="mb-2"
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                required
              ></FloatingLabel>
            </Form.Group>

            <Row>
              <Col>
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
                  Sign In
                </Button>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddomg: 0,
                  margin: 0,
                }}
              >
                <Card.Text className="mt-2">
                  <a href="/registration">Register Now!</a>
                </Card.Text>
              </Col>
            </Row>
          </Form>
        </Card.Body>

        <Card.Body className="link-text">
          <Card.Link href="/password-reset">
            Forgot Password
          </Card.Link>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default LoginForm;

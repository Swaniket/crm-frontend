import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import { shortText } from "../../utils/validation";
import { openNewTicket } from "./addTicketAction";
import { resetSuccessMsg } from "./addTicketSlicer";

const initialFromData = {
  subject: "",
  issueDate: "",
  message: "",
};

const initialFromError = {
  subject: false,
  issueDate: false,
  message: false,
};

function AddTicketForm() {
  const dispatch = useDispatch();
  const { isLoading, error, successMsg } = useSelector(
    (state) => state.openTicket
  );
  const {
    user: { name },
  } = useSelector((state) => state.user);

  const [fromData, setFromData] = useState(initialFromData);
  const [fromDataError, setFromDataError] = useState(initialFromError);

  useEffect(() => {
    // Cleanup function
    return () => {
      successMsg && dispatch(resetSuccessMsg());
    };
  }, [fromData, fromDataError, successMsg, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...fromData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFromDataError(initialFromError);
    const isSubjectValid = await shortText(fromData.subject);

    !isSubjectValid &&
      setFromDataError({
        ...initialFromError,
        subject: !isSubjectValid,
      });

    dispatch(openNewTicket({ ...fromData, sender: name }));
    console.log("DATA:", { ...fromData, sender: name });
  };

  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">
            Create a Ticket
          </Card.Title>
        </Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}

        <Card.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Text className="text-danger" style={{ fontSize: ".7em" }}>
                {fromDataError.subject && "*Subject is Required!"}
              </Form.Text>
              <Form.Control
                type="text"
                name="subject"
                className="mb-2"
                value={fromData.subject}
                onChange={handleOnChange}
                placeholder="Issue Subject"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="date"
                name="issueDate"
                className="mb-2"
                value={fromData.issueDate}
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                name="message"
                minLength="4"
                className="mb-2"
                rows="5"
                value={fromData.message}
                onChange={handleOnChange}
                placeholder="Please enter issue details"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-4 mb-3" block>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              Add Ticket
            </Button>
          </Form>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default AddTicketForm;

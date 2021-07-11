import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function AddTicketForm({
  handleOnSubmit,
  handleOnChange,
  fromData,
  fromDataError,
}) {
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="heading-text text-center">Create a Ticket</Card.Title>
        </Card.Body>
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
                name="details"
                minLength="4"
                className="mb-2"
                rows="5"
                value={fromData.details}
                onChange={handleOnChange}
                placeholder="Please enter issue details"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-4 mb-3" block>
              Add Ticket
            </Button>
          </Form>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default AddTicketForm;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-ticket.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import ReplyTicket from "../../components/reply-ticket/ReplyTicket";

const ticket = tickets[0];
function Ticket() {
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {}, [replyMessage]);

  const handleOnChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Details" />
        </Col>
      </Row>

      <Row style={{ alignItems: "center" }}>
        <Col>
          <div className="subject">
            <strong>Subject:</strong>{" "}
            <span className="text-muted">{ticket.subject}</span>
          </div>
          <div className="date">
            <strong>Open Date:</strong>{" "}
            <span className="text-muted">{ticket.addedAt}</span>
          </div>
          <div className="status">
            <strong>Status:</strong>{" "}
            <span className="text-muted">{ticket.status}</span>
          </div>
        </Col>
        <Col as="div" style={{ textAlign: "right" }}>
          <Button className="btn-lg btn-outline-success">
            <i className="fa fa-check"></i> Close This Ticket
          </Button>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <MessageHistory message={ticket.history} />
        </Col>
      </Row>

      {/* <hr /> */}
      <Row className="mt-3">
        <Col>
          <ReplyTicket
            replyMessage={replyMessage}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Ticket;

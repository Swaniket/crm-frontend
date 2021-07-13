import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-ticket.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import ReplyTicket from "../../components/reply-ticket/ReplyTicket";

// const ticket = tickets[0];
function Ticket() {
  const {tId} = useParams()

  const [replyMessage, setReplyMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i])
        continue
      }
    }
  }, [replyMessage, tId]);

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
        {tId}
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
          {ticket.history && <MessageHistory message={ticket.history} />}
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
import React, { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import MessageHistory from "../../components/message-history/MessageHistory";
import ReplyTicket from "../../components/reply-ticket/ReplyTicket";
import { fetchSingleTickets } from "../ticket-list/ticketsAction";

function Ticket() {
  const dispatch = useDispatch();

  const { tId } = useParams();
  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    dispatch(fetchSingleTickets(tId));
  }, [dispatch, tId]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Details" />
        </Col>
      </Row>

      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>

      <Row style={{ alignItems: "center" }}>
        <Col>
          {tId}
          <div className="subject">
            <strong>Subject:</strong>{" "}
            <span className="text-muted">{selectedTicket.subject}</span>
          </div>
          <div className="date">
            <strong>Open Date:</strong>{" "}
            <span className="text-muted">
              {selectedTicket.openAt &&
                new Date(selectedTicket.openAt).toLocaleString()}
            </span>
          </div>
          <div className="status">
            <strong>Status:</strong>{" "}
            <span className="text-muted">{selectedTicket.status}</span>
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
          {selectedTicket.conversation && (
            <MessageHistory message={selectedTicket.conversation} />
          )}
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <ReplyTicket _id={tId} />
        </Col>
      </Row>
    </Container>
  );
}

export default Ticket;

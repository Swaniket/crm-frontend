import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket/AddTicketForm";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./AddTicket.css";

function AddTicket() {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col className="add-ticket-page">
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicket;

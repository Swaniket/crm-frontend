import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col><PageBreadcrumb page="Dashboard" /></Col>
      </Row>
      <Row style={{ textAlign: "center" }} className="mb-5">
        <Col>
          <Card>
            <Card.Header>Total tickets:</Card.Header>
            <Card.Body>
              <Card.Title> 10</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Pending tickets:</Card.Header>
            <Card.Body>
              <Card.Title> 20</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ textAlign: "center" }} className="mb-5">
        <Col>
          <div to="/add-ticket">
            <Button className="btn-lg">
              <i className="fa fa-plus"></i> Create New Ticket
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket"><TicketTable tickets={tickets}/></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

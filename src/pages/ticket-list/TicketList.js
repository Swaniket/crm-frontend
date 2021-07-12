import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";

function TicketList() {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {
  }, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>Add new ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
        <hr className="mt-4" />
        <Row>
          <Col>
            <TicketTable tickets={dispTicket} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default TicketList;

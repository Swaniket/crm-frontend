import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket/AddTicketForm";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import { shortText } from "../../utils/validation";
import "./AddTicket.css";

const initialFromData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFromError = {
  subject: false,
  issueDate: false,
  details: false,
};

function AddTicket() {
  const [fromData, setFromData] = useState(initialFromData);
  const [fromDataError, setFromDataError] = useState(initialFromError);
  useEffect(() => {}, [fromData, fromDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...fromData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFromDataError(initialFromError)
    const isSubjectValid = await shortText(fromData.subject);

    !isSubjectValid &&
      setFromDataError({
        ...initialFromError,
        subject: !isSubjectValid,
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col className="add-ticket-page">
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            fromData={fromData}
            fromDataError={fromDataError}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicket;

import React from "react";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-list/ticketsAction";
import { Form, Row, Col } from "react-bootstrap";

function SearchForm() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicket(value));
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Col ms="6">
          <Form.Control
            name="searchbar"
            onChange={handleOnChange}
            placeholder="Search..."
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;

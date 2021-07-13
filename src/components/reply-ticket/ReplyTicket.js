import React from "react";
import { Form, Button } from "react-bootstrap";
import "./replyTicket.css";

function ReplyTicket({ replyMessage, handleOnChange, handleOnSubmit }) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Control
        placeholder="Type your reply..."
        name="detail"
        as="textarea"
        rows="8"
        className="mt-5 mb-3 replybox"
        value={replyMessage}
        onChange={handleOnChange}
      />
      <div className="mb-4" style={{ float: "right" }}>
        <Button type="submit">
          Reply <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
        </Button>
      </div>
    </Form>
  );
}

export default ReplyTicket;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { replyOnTickets } from "../../pages/ticket-list/ticketsAction";
import "./replyTicket.css";

function ReplyTicket({ _id }) {
  const dispatch = useDispatch();
  const [replyMessage, setReplyMessage] = useState("");

  const {
    user: { name },
  } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const replyMsgObj = {
      message: replyMessage,
      sender: name,
    };
    dispatch(replyOnTickets(_id, replyMsgObj));
    setReplyMessage("");
  };

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
        required
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

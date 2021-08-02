import React from "react";
import { Card } from "react-bootstrap";
import "./MessageHistory.css";

function MessageHistory({ message }) {
  if (!message) return null;

  return (
    <div className="scrollbar">
      {message.map((row, i) => (
        <Card className="message-history mt-3" key={i}>
          <Card.Body className="send font-weight-bold">
            <div className="sender">
              <strong>{row.sender}</strong>
            </div>
            <div className="date">
              {row.msgAt && new Date(row.msgAt).toLocaleString()}
            </div>
          </Card.Body>

          <div className="message text-muted">{row.message}</div>
        </Card>
      ))}
    </div>
  );
}

export default MessageHistory;

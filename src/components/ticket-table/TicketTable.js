import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TicketTable({ tickets }) {
  return (
    <Table borderless hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Open Date</th>
        </tr>
      </thead>

      <tbody>
        {tickets.length ? (
          tickets.map((ticket) => (
            <tr key={ticket.id} className="table-secondary">
              <td>{ticket.id}</td>
              <td>
                <Link to={`/ticket/${ticket.id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Ticket to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TicketTable;

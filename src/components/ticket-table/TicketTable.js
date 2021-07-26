import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TicketTable() {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;

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
        {searchTicketList.length ? (
          searchTicketList.map((ticket) => (
            <tr key={ticket._id} className="table-secondary">
              <td>{ticket._id}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.openAt}</td>
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

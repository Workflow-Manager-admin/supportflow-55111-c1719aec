import React from "react";
import TicketDetailModal from "./TicketDetailModal";

// PUBLIC_INTERFACE
function TicketList({ user }) {
  /** Displays a list of tickets assigned to or created by the user.
   * In admin mode, shows all tickets with filter/search.
   * Replace placeholder with list fetched from backend.
   */
  const [modalOpen, setModalOpen] = React.useState(false);
  const mockTickets = [
    { id: 1, subject: "Cannot log in", status: "open" },
    { id: 2, subject: "Feature request: Dark mode", status: "closed" }
  ];

  return (
    <div className="ticket-list-panel">
      <div className="panel-header">
        <h3>Tickets</h3>
        <button className="btn" style={{ marginLeft: "auto" }} onClick={() => setModalOpen(true)}>
          + New Ticket
        </button>
      </div>
      <ul className="ticket-list">
        {mockTickets.map(ticket => (
          <li className="ticket-list-item" key={ticket.id}>
            <span>
              <b>#{ticket.id}</b> {ticket.subject}
            </span>
            <span className={`ticket-status status-${ticket.status}`}>{ticket.status}</span>
          </li>
        ))}
      </ul>
      {modalOpen && <TicketDetailModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default TicketList;

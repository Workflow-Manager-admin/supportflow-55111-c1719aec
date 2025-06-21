import React from "react";

// PUBLIC_INTERFACE
function TicketDetailModal({ onClose }) {
  /** Modal with ticket details (view/update/close/comment) */
  // Placeholder data & logic
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Ticket Details</h3>
        <div className="modal-body">
          <b>Subject:</b> Cannot log in
          <br />
          <b>Status:</b> open
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default TicketDetailModal;

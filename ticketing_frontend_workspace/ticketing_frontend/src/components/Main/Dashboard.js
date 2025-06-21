import React from "react";
import TicketList from "./TicketList";
import Sidebar from "./Sidebar";

// PUBLIC_INTERFACE
function Dashboard({ user }) {
  /** Admin/user dashboard layout with sidebar and ticket list */
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <TicketList user={user} />
      </div>
    </div>
  );
}

export default Dashboard;

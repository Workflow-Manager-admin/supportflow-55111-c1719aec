import React from "react";

// PUBLIC_INTERFACE
function Sidebar() {
  /** Sidebar component for filtering, searching, or navigation in dashboard/admin views */
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h4>Filter</h4>
        <div>
          <label>Status: </label>
          <select>
            <option>All</option>
            <option>Open</option>
            <option>In progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>
      <div className="sidebar-section">
        <h4>Search</h4>
        <input className="input" type="text" placeholder="Search tickets..." />
      </div>
    </aside>
  );
}

export default Sidebar;

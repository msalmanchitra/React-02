import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <>
      {/* Mobile Dark Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        {/* Dashboard Section */}
        <div className="sidebar-section-title">Dashboard</div>
        <ul className="sidebar-list">
          <li>
            <a href="#default" className="sidebar-item active">
              <div className="sidebar-item-left">
                <i className="fa-regular fa-compass"></i>
                <span>Default</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#analytics" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-solid fa-desktop"></i>
                <span>Analytics</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#invoice" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-regular fa-file-lines"></i>
                <span>Invoice</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#crm" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-solid fa-dharmachakra"></i>
                <span>CRM</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#blog" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-regular fa-rectangle-list"></i>
                <span>Blog</span>
              </div>
            </a>
          </li>
        </ul>

        <div className="sidebar-divider"></div>

        {/* Widget Section */}
        <div className="sidebar-section-title">Widget</div>
        <ul className="sidebar-list">
          <li>
            <a href="#statistics" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-solid fa-bullseye"></i>
                <span>Statistics</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#data" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-regular fa-clipboard"></i>
                <span>Data</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#chart" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-solid fa-chart-column"></i>
                <span>Chart</span>
              </div>
            </a>
          </li>
        </ul>

        <div className="sidebar-divider"></div>

        {/* Application Section */}
        <div className="sidebar-section-title">Application</div>
        <ul className="sidebar-list">
          <li>
            <a href="#users" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-regular fa-user"></i>
                <span>Users</span>
              </div>
              <i className="fa-solid fa-chevron-down sidebar-arrow"></i>
            </a>
          </li>
          <li>
            <a href="#customer" className="sidebar-item">
              <div className="sidebar-item-left">
                <i className="fa-solid fa-headset"></i>
                <span>Customer</span>
              </div>
              <i className="fa-solid fa-chevron-down sidebar-arrow"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
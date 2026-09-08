import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardContent from './Components/DashboardContent/DashboardContent'; // Dashboard content import kiya
import SettingsDrawer from './Components/SettingsDrawer/SettingsDrawer';    // Floating Settings Drawer import kiya

function App() {
  // Desktop par pehle se open rakhne ke liye initial state true rakhi hai
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', position: 'relative' }}>
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Layout Area */}
      <div style={{ display: 'flex', overflowX: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        {/* Dashboard ka Main Content area */}
        <main style={{ flex: 1, padding: '20px', transition: 'all 0.3s ease' }}>
          {/* DashboardContent yahan render ho raha hai */}
          <DashboardContent />
        </main>
      </div>

      {/* Right side par floating settings drawer */}
      <SettingsDrawer />
    </div>
  );
}

export default App;
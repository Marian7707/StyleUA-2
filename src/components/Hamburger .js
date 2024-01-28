import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button id="hamburger" onClick={toggleSidebar}>☰</button>
      <div id="sidebar" className={isSidebarOpen ? 'active' : ''}>
        {/* Ваш контент Sidebar */}
      </div>
    </>
  );
};

export default HamburgerMenu;

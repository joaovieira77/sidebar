
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaBars, FaHome, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

const user = {
  name: 'Jane Doe',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const navLinks = [
  { icon: <FaHome />, label: 'Home' },
  { icon: <FaUser />, label: 'Profile' },
  { icon: <FaEnvelope />, label: 'Messages' },
  { icon: <FaCog />, label: 'Settings' },
  { icon: <FaSignOutAlt />, label: 'Logout' },
];

const Sidebar = () => {
  // Sidebar is always visible, no overlay or floating toggle button
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState('Home');

  return (
    <aside
    className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-all duration-300
  bg-gradient-to-br from-black via-black/90 to-green-900/80 backdrop-blur-xl shadow-2xl border-r border-black/70
  ${collapsed ? 'w-20' : 'w-72'}`}
  style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
    >
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setCollapsed((v) => !v)}
  className={`absolute top-4 right-[-18px] z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-black to-green-800 text-green-200 shadow-lg border-2 border-black/60 hover:scale-110 hover:bg-green-900/80 transition-all duration-200`}
        aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      {/* User Profile */}
  <div className={`flex flex-col items-center justify-center h-36 border-b border-green-700 bg-black/80 transition-all duration-300 ${collapsed ? 'h-20' : ''}`}>
        <img
          src={user.avatar}
          alt="User Avatar"
          className={`transition-all duration-300 ${collapsed ? 'w-10 h-10 mb-0' : 'w-16 h-16 mb-2'} rounded-full border-4 border-green-700 shadow-lg object-cover`}
        />
        {!collapsed && (
          <span className="text-lg font-semibold text-green-200 drop-shadow-md">{user.name}</span>
        )}
      </div>
      {/* Logo */}
      <div className={`flex items-center justify-center h-16 transition-all duration-300 ${collapsed ? 'h-10' : ''}`}>
        <span className={`text-2xl font-extrabold tracking-widest text-green-600 drop-shadow-lg transition-all duration-300 ${collapsed ? 'text-base' : ''}`}>ELEVVO</span>
      </div>
      {/* Nav Links */}
      <nav className={`flex-1 py-6 px-4 space-y-2 transition-all duration-300 ${collapsed ? 'px-1' : 'px-4'}`}>
        {navLinks.map((link, idx) => {
          const isActive = active === link.label;
          return (
            <a
              key={link.label}
              href="#"
              onClick={() => setActive(link.label)}
              className={`group flex items-center ${collapsed ? 'justify-center' : ''} gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 relative overflow-hidden
                text-green-100 hover:bg-black/80 hover:text-green-300
                ${isActive ? 'bg-black/90 text-green-400 shadow-lg' : ''}`}
            >
              <span className={`text-xl group-hover:scale-110 transition-transform duration-200 drop-shadow-lg ${isActive ? 'text-green-400' : ''}`}>{link.icon}</span>
              {!collapsed && (
                <span className={`relative z-10 ${isActive ? 'font-bold' : ''}`}>{link.label}</span>
              )}
              <span className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-black ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all duration-300 ${collapsed ? 'hidden' : ''}`}></span>
            </a>
          );
        })}
      </nav>
      {/* Creative Footer */}
      <div className={`p-4 text-xs text-green-200/60 text-center tracking-wide transition-all duration-300 ${collapsed ? 'opacity-0 h-0 p-0' : 'opacity-100 h-auto'}`} style={{ pointerEvents: collapsed ? 'none' : 'auto' }}>
        <span>&copy; 2025 João Vieira. All rights reserved.</span>
      </div>
    </aside>
  );
};

export default Sidebar;

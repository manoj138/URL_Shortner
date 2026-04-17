import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Link2, User, LogOut, Zap } from 'lucide-react';

const Asidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Links', path: '/links', icon: Link2 }, // Note: /links could be added later or pointing to '/' for now
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <aside className="w-64 h-screen bg-surface-dark text-gray-300 flex flex-col sticky top-0 border-r border-slate-800 hidden md:flex">
      {/* Brand Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20">
          <Zap size={24} fill="currentColor" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">URLly</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout / Bottom Action */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-danger/10 hover:text-danger transition-colors text-gray-400 group">
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Asidebar;
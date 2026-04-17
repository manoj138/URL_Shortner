import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from "../../components/common/ThemeToggle";
import Avatar from "../../components/common/Avatar";
import { Bell, Zap, LayoutDashboard, Link2 } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Links', path: '/links', icon: Link2 },
  ];

  return (
    <header className="h-16 sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between">
      {/* Left side - Logo & Nav */}
      <div className="flex items-center gap-8">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20 group-hover:scale-105 transition-transform">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-indigo-600 hidden sm:block">
            URLly
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <link.icon size={16} />
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-2 pr-2 sm:pr-4 border-r border-gray-200 dark:border-slate-800">
          <ThemeToggle className="!p-2 shadow-none border-none hover:bg-gray-100 dark:hover:bg-slate-800" />
          <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-danger rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Manoj Chougule</p>
            <p className="text-xs text-gray-500">Premium User</p>
          </div>
          <Avatar 
            initials="MC" 
            status="online"
            size="sm"
            className="cursor-pointer hover:ring-4 hover:ring-brand-500/10 transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
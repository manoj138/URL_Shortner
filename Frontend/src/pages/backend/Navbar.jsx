import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from "../../components/common/ThemeToggle";
import Avatar from "../../components/common/Avatar";
import { Bell, Zap, LayoutDashboard, Link2, Sparkles } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Links', path: '/links', icon: Link2 },
  ];

  return (
    <header className="h-20 sticky top-0 z-50 px-4 sm:px-6 flex items-center justify-center pointer-events-none">
      <div className="w-full max-w-7xl h-16 glass rounded-[2rem] px-6 flex items-center justify-between pointer-events-auto border border-white/40 dark:border-slate-800/50 shadow-premium">
        {/* Left side - Logo & Nav */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Zap size={22} fill="currentColor" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
                URLly
                </span>
                <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest leading-none mt-1">
                Premium
                </span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800/50'
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-gray-100 dark:border-slate-800/50">
            <ThemeToggle className="!p-2.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-colors" />
            <button className="p-2.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-800/50 text-gray-500 transition-all relative group">
              <Bell size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
          </div>
          
          <div className="flex items-center gap-3 pl-1">
            <div className="text-right hidden lg:block mr-1">
              <p className="text-sm font-black text-gray-900 dark:text-gray-100 leading-none">Manoj Chougule</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <Sparkles size={10} className="text-amber-500" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">PRO Member</span>
              </div>
            </div>
            <Avatar 
              initials="MC" 
              status="online"
              size="sm"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
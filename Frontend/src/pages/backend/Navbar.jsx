import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from "../../components/common/ThemeToggle";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import { Bell, Zap, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-20 sticky top-0 z-50 px-4 sm:px-6 flex items-center justify-center pointer-events-none font-sans">
      <div className="w-full max-w-7xl h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-2xl px-6 flex items-center justify-between pointer-events-auto border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Logo - Professional Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
            <Zap size={18} fill="white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            URL<span className="text-indigo-600">ly.</span>
          </span>
        </Link>

        {/* Nav Links - Professional SaaS Style */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Platform', path: '/' },
            { label: 'Inventory', path: '/links' },
            { label: 'Solutions', path: '#' },
          ].map((link) => (
            <Link 
              key={link.label}
              to={link.path} 
              className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-100 dark:border-white/5">
            <ThemeToggle className="!p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-500" />
            <button className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 transition-all relative group">
              <Bell size={18} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full border-2 border-white dark:border-slate-950"></span>
            </button>
          </div>
          
          <div className="flex items-center gap-3 pl-1">
            <div className="text-right hidden lg:block mr-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Manoj Chougule</p>
              <div className="flex items-center justify-end gap-1 mt-1.5">
                <Sparkles size={11} className="text-amber-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PRO Member</span>
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
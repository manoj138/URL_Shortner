import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from "../../components/common/ThemeToggle";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import { Bell, Zap, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 flex items-center justify-center pointer-events-none font-sans ${
      isScrolled ? 'h-16 pt-2' : 'h-24 pt-6'
    }`}>
      <div className={`w-full max-w-7xl transition-all duration-500 mx-4 sm:mx-6 flex items-center justify-between pointer-events-auto border rounded-2xl px-6 ${
        isScrolled 
          ? 'h-14 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-2xl shadow-brand-500/10' 
          : 'h-16 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border-white/40 dark:border-white/5'
      }`}>
        {/* Logo - Professional Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20 group-hover:rotate-12 transition-all">
            <Zap size={18} fill="white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            URL<span className="text-brand-600">ly.</span>
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
              className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
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
              <p className="text-[11px] font-black text-slate-900 dark:text-white leading-none uppercase tracking-wider">Manoj Chougule</p>
              <div className="flex items-center justify-end gap-1 mt-1.5">
                <Sparkles size={11} className="text-amber-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PRO</span>
              </div>
            </div>
            <Avatar 
              initials="MC" 
              status="online"
              size="sm"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
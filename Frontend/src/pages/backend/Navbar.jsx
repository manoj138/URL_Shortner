import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from "../../components/common/ThemeToggle";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import { Bell, Zap, Sparkles, LogOut, LogIn, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || '??';
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 flex items-center justify-center pointer-events-none font-sans ${
      isScrolled ? 'h-16 pt-2' : 'h-24 pt-6'
    }`}>
      <div className={`w-full max-w-[1400px] transition-all duration-500 mx-4 sm:mx-6 flex items-center justify-between pointer-events-auto border rounded-2xl px-6 ${
        isScrolled 
          ? 'h-14 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-2xl shadow-brand-500/10' 
          : 'h-16 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border-white/40 dark:border-white/5'
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20 group-hover:rotate-12 transition-all">
            <Zap size={18} fill="white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            URL<span className="text-brand-600">ly.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Platform', path: '/' },
            { label: 'Inventory', path: '/links' },
            { label: 'Solutions', path: '/solutions' },
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

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 pr-2 md:pr-4 border-r border-slate-100 dark:border-white/5">
            <ThemeToggle className="!p-2 shadow-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-500" />
            <button className="md:hidden p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {user ? (
               <div className="flex items-center gap-3 pl-1">
                  <div className="text-right hidden lg:block mr-1">
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-none uppercase tracking-wider">{user.name}</p>
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      <Sparkles size={11} className="text-amber-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user.role.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <Avatar 
                      initials={getInitials(user.name)} 
                      status="online"
                      size="sm"
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-[110]">
                      <button 
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                      >
                        <LogOut size={16} />
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Link to="/login">
                        <Button variant="ghost" size="sm" icon={LogIn} className="text-[11px] font-bold uppercase tracking-wider !shadow-none">
                        Log In
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="primary" size="sm" icon={Sparkles} className="text-[11px] font-black uppercase tracking-wider !rounded-xl !shadow-none">
                        Get Started
                        </Button>
                    </Link>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[1000] transition-all duration-500 md:hidden pointer-events-auto ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 w-[280px] h-full bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col p-8`}>
          <div className="flex items-center justify-between mb-12">
            <span className="text-xl font-black text-slate-900 dark:text-white">Menu.</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-500">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mb-auto">
            {[
              { label: 'Platform', path: '/' },
              { label: 'My Links', path: '/links' },
              { label: 'Solutions', path: '/solutions' },
              { label: 'Analytics', path: '/dashboard' },
            ].map((link) => (
              <Link 
                key={link.label}
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-lg font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5 active:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-white/5">
            {user ? (
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar initials={getInitials(user.name)} size="sm" />
                    <div>
                        <p className="text-sm font-black text-slate-900 dark:text-white uppercase leading-none">{user.name}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1.5">{user.role}</p>
                    </div>
                  </div>
                  <Button variant="danger" size="lg" icon={LogOut} className="w-full !rounded-2xl" onClick={logout}>Log Out</Button>
               </div>
            ) : (
                <div className="grid gap-3">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="secondary" size="lg" className="w-full !rounded-2xl">Log In</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" size="lg" className="w-full !rounded-2xl shadow-xl shadow-brand-600/20">Sign Up</Button>
                    </Link>
                </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
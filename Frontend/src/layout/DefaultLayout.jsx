import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../pages/backend/Navbar";
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-500 selection:bg-accent-500/30">
      {/* Background patterns - Infinity Core */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 bg-mesh animate-mesh -z-20 transition-colors duration-500"></div>
      
      {!isAuthPage && <Navbar />}
      
      <main className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isAuthPage ? 'pt-0' : 'pt-32'} pb-10 relative animate-reveal`}>
        {children}
      </main>

      {!isAuthPage && (
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="card-premium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 items-start !bg-white/60 dark:!bg-slate-900/40 !rounded-[4rem]">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(79,70,229,0.3)]">
                  <Zap size={24} fill="currentColor" />
                </div>
                <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">URLly.</span>
              </div>
              <p className="text-slate-500 dark:text-slate-500 font-bold leading-relaxed text-lg">
                Empowering creators and businesses with clean, trackable, and impactful link management solutions for the modern web.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Products</h4>
              <ul className="space-y-5 font-bold text-slate-600 dark:text-slate-400 text-base">
                <li className="hover:text-brand-600 transition-colors cursor-pointer flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>URL Shortener</li>
                <li className="hover:text-brand-600 transition-colors cursor-pointer flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>Analytics Pro</li>
                <li className="hover:text-brand-600 transition-colors cursor-pointer flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>API Gateway</li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Community</h4>
              <ul className="space-y-5 font-bold text-slate-600 dark:text-slate-400 text-base">
                <li className="hover:text-brand-600 transition-colors cursor-pointer">Developer Docs</li>
                <li className="hover:text-brand-600 transition-colors cursor-pointer">Success Stories</li>
                <li className="hover:text-brand-600 transition-colors cursor-pointer">Open Source</li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Connect</h4>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-14 h-14 rounded-[1.25rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white transition-all shadow-sm group">
                    <Icon size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
              <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">© 2026 URLly Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default DefaultLayout;

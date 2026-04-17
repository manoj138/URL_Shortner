import React from "react";
import Navbar from "../pages/backend/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 transition-colors duration-500 bg-mesh selection:bg-brand-500/30">
      {/* Navbar - Floating Glass */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth prose-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full animate-slide-up">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-slate-800/50 text-center space-y-4">
        <div className="flex items-center justify-center gap-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors cursor-pointer">Privacy</span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors cursor-pointer">Terms</span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors cursor-pointer">API</span>
        </div>
        <p className="text-sm font-bold text-gray-400 dark:text-gray-500">
           &copy; {new Date().getFullYear()} <span className="text-brand-600 dark:text-brand-500">URLly</span>. Crafted for the modern web.
        </p>
      </footer>
    </div>
  );
};

export default DefaultLayout;

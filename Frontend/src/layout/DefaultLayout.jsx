import React from "react";
import Navbar from "../pages/backend/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-surface-dark transition-colors duration-300">
      {/* Navbar - Sticky Top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          {children}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="py-6 border-t border-gray-200 dark:border-slate-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} URLly - Premium URL Shortener
      </footer>
    </div>
  );
};

export default DefaultLayout;
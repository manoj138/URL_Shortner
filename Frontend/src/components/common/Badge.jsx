import React from 'react';

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  dot = false,
  pill = true,
  ...props 
}) => {
  const variants = {
    primary: 'bg-brand-50 text-brand-700 border-brand-100 dark:bg-brand-900/20 dark:text-brand-400 dark:border-brand-900/50',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-900/50',
    warning: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/50',
    danger: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-900/50',
    info: 'bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-900/50',
    neutral: 'bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-800',
    brand: 'bg-brand-500 text-white border-brand-600',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[9px]',
    md: 'px-3 py-1 text-[11px]',
    lg: 'px-4 py-1.5 text-xs',
  };

  return (
    <span 
      className={`
        inline-flex items-center justify-center font-black tracking-[0.1em] uppercase transition-all duration-300 border
        ${pill ? 'rounded-full' : 'rounded-lg'}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        hover:scale-110 active:scale-95 cursor-default
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
      )}
      {children}
    </span>
  );
};

export default Badge;

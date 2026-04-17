import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon, 
  iconPosition = 'left', 
  loading = false, 
  disabled = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none font-sans tracking-tight";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20 hover:-translate-y-0.5",
    accent: "bg-accent-500 hover:bg-accent-600 text-slate-950 shadow-lg shadow-accent-500/20 hover:-translate-y-0.5",
    secondary: "bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white",
    outline: "border-2 border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-300",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900/50 text-slate-600 dark:text-slate-400",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20",
    danger: "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20",
    glass: "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5 rounded-lg",
    md: "px-6 py-3 text-sm gap-2 rounded-xl",
    lg: "px-8 py-4 text-base gap-2.5 rounded-xl",
    xl: "px-10 py-5 text-lg gap-3 rounded-2xl",
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${['primary', 'accent', 'success'].includes(variant) ? 'shimmer-effect' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
           <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {size !== 'sm' && <span>Loading...</span>}
        </div>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 20} strokeWidth={2.5} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 20} strokeWidth={2.5} />}
        </>
      )}
    </button>
  );
};

export default Button;

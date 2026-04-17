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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5",
    secondary: "bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-slate-800 text-gray-900 dark:text-white",
    outline: "border-2 border-brand-200 dark:border-brand-900/50 hover:border-brand-500 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 text-gray-700 dark:text-gray-200",
    ghost: "bg-transparent hover:bg-brand-50 dark:hover:bg-brand-900/20 text-brand-600 dark:text-brand-400",
    success: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20",
    danger: "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20",
    glass: "glass-morphism hover:bg-white/60 dark:hover:bg-slate-900/60 text-gray-900 dark:text-white border-white/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5 rounded-xl",
    md: "px-6 py-3 text-sm gap-2 rounded-2xl",
    lg: "px-8 py-4 text-base gap-3 rounded-[1.25rem]",
    xl: "px-10 py-5 text-lg gap-4 rounded-3xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
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

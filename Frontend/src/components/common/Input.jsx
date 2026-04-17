import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  className = '', 
  icon: Icon, 
  iconPosition = 'left', 
  error,
  ...props 
}) => {
  const hasError = Boolean(error);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className={`text-sm font-bold ml-1 transition-colors duration-300 ${
          hasError ? 'text-rose-500' : 'text-gray-500 dark:text-gray-400 uppercase tracking-widest text-[10px]'
        }`}>
          {label}
        </label>
      )}
      
      <div className="relative group">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-all duration-300 pointer-events-none group-focus-within:scale-110">
            <Icon size={20} strokeWidth={2.5} />
          </div>
        )}
        
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-5 py-4 bg-white dark:bg-slate-900/40 border-2 rounded-[1.25rem] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 font-medium ${
            Icon && iconPosition === 'left' ? 'pl-14' : ''
          } ${
            Icon && iconPosition === 'right' ? 'pr-14' : ''
          } ${
            hasError 
              ? 'border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
              : 'border-gray-100 dark:border-slate-800/50 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 shadow-sm focus:shadow-brand-500/20'
          }`}
          {...props}
        />

        {Icon && iconPosition === 'right' && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-all duration-300 pointer-events-none group-focus-within:scale-110">
            <Icon size={20} strokeWidth={2.5} />
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs font-bold text-rose-500 ml-1 mt-1 animate-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;


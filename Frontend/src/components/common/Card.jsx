import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  headerAction,
  footer,
  className = '', 
  hoverable = false,
  noPadding = false,
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: 'bg-white dark:bg-slate-950/60 backdrop-blur-3xl border-white/60 dark:border-white/5 shadow-premium',
    premium: 'card-premium',
  };

  return (
    <div 
      className={`
        rounded-3xl border transition-all duration-700 overflow-hidden
        ${variants[variant]} 
        ${hoverable ? 'hover:-translate-y-2 hover:shadow-2xl hover:border-brand-500/20' : ''}
        ${className}
      `}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div className="px-10 py-8 border-b border-gray-100/50 dark:border-white/5 flex items-center justify-between gap-4">
          <div>
            {title && <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 mt-1 leading-relaxed uppercase tracking-widest">{subtitle}</p>}
          </div>
          {headerAction && (
            <div className="flex-shrink-0">
              {headerAction}
            </div>
          )}
        </div>
      )}

      <div className={`${noPadding ? '' : 'p-10'}`}>
        {children}
      </div>

      {footer && (
        <div className="px-10 py-8 bg-gray-50/30 dark:bg-zinc-800/20 border-t border-gray-100/50 dark:border-white/5 rounded-b-[3rem]">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;

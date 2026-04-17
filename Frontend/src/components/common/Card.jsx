import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  footer, 
  className = '', 
  headerAction,
  hoverable = false,
  noPadding = false,
  bordered = true,
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: 'bg-white dark:bg-slate-900/60 backdrop-blur-xl border-white/60 dark:border-slate-800/50 shadow-premium',
    premium: 'card-premium',
    glass: 'glass-morphism',
  };

  return (
    <div 
      className={`
        rounded-[2.5rem]
        transition-all duration-500
        ${bordered ? 'border' : ''}
        ${variants[variant]}
        ${hoverable ? 'hover:-translate-y-2 hover:shadow-2xl' : ''}
        ${className}
      `}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div className="px-8 py-7 border-b border-gray-100/50 dark:border-slate-800/50 flex items-center justify-between gap-4 rounded-t-[2.5rem]">
          <div>
            {title && <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 leading-tight tracking-tight">{title}</h3>}
            {subtitle && <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mt-1.5 leading-relaxed">{subtitle}</p>}
          </div>
          {headerAction && (
            <div className="flex-shrink-0">
              {headerAction}
            </div>
          )}
        </div>
      )}

      <div className={`${noPadding ? '' : 'p-8'}`}>
        {children}
      </div>

      {footer && (
        <div className="px-8 py-6 bg-gray-50/30 dark:bg-slate-800/20 border-t border-gray-100/50 dark:border-slate-800/50 rounded-b-[2.5rem]">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;

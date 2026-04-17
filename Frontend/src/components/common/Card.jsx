import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  headerAction,
  footer,
  className = '', 
  headerClassName = '',
  bodyClassName = '',
  hoverable = false,
  noPadding = false,
  compact = false,
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
        rounded-3xl border transition-all duration-700 overflow-hidden relative group
        ${variants[variant]} 
        ${hoverable ? 'hover:-translate-y-2 hover:shadow-2xl hover:border-brand-500/20' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Decorative Interactive Bubbles - Fixed Circular & Smooth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 translate-x-1/4 translate-y-1/4 delay-100 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-mint-400/10 rounded-full blur-[40px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 -translate-x-1/2 -translate-y-1/2 delay-300 z-0"></div>

      <div className="relative z-10 w-full h-full">
        {(title || subtitle || headerAction) && (
          <div className={`px-10 ${compact ? 'py-4' : 'py-8'} border-b border-gray-100/50 dark:border-white/5 flex items-center justify-between gap-4 ${headerClassName}`}>
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

        <div className={`${noPadding ? '' : compact ? 'p-6' : 'p-10'} ${bodyClassName}`}>
          {children}
        </div>

        {footer && (
          <div className="px-10 py-8 bg-gray-50/30 dark:bg-zinc-800/20 border-t border-gray-100/50 dark:border-white/5 rounded-b-[3rem]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

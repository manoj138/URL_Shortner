import React from 'react';

const Avatar = ({ 
  src, 
  alt = "User", 
  initials, 
  size = "md", // sm, md, lg, xl
  status, // online, offline, busy, away
  className = "" 
}) => {
  const sizes = {
    sm: "w-9 h-9 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-2xl",
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    busy: "bg-rose-500",
    away: "bg-amber-500",
  };

  const statusSizes = {
    sm: "h-2.5 w-2.5 border-2",
    md: "h-3.5 w-3.5 border-2",
    lg: "h-4.5 w-4.5 border-2",
    xl: "h-6 w-6 border-4",
  };

  return (
    <div className={`relative inline-flex flex-shrink-0 group ${className}`}>
      <div className={`
        ${sizes[size]} 
        rounded-2xl overflow-hidden flex items-center justify-center 
        bg-linear-to-br from-brand-50 to-brand-100 dark:from-slate-800 dark:to-slate-900 
        text-brand-700 dark:text-brand-300 font-black
        border-2 border-white dark:border-slate-800 shadow-premium
        group-hover:scale-105 transition-all duration-300 group-hover:rotate-3
      `}>
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <span className="drop-shadow-sm">{initials || alt.charAt(0).toUpperCase()}</span>
        )}
      </div>

      {status && (
        <span className={`
          absolute bottom-[-2px] right-[-2px] 
          ${statusSizes[size]} 
          ${statusColors[status]} 
          rounded-full border-white dark:border-slate-900 shadow-sm
          animate-in zoom-in duration-300
        `} />
      )}
    </div>
  );
};

export default Avatar;

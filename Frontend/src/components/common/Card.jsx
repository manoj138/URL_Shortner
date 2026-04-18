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
  bubbleTheme = 'brand',
  showParticles = false,
  ...props 
}) => {
  // Particle generator logic
  const particles = showParticles ? Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 5 + 2}px`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 5}s`,
  })) : [];
  const bubbleThemes = {
    brand: { bg1: 'bg-brand-500/10', bg2: 'bg-cyan-500/10', bg3: 'bg-mint-400/5' },
    indigo: { bg1: 'bg-indigo-500/10', bg2: 'bg-blue-500/10', bg3: 'bg-violet-400/5' },
    rose: { bg1: 'bg-rose-500/10', bg2: 'bg-pink-500/10', bg3: 'bg-orange-400/5' },
    amber: { bg1: 'bg-amber-500/10', bg2: 'bg-orange-500/10', bg3: 'bg-yellow-400/5' },
    emerald: { bg1: 'bg-emerald-500/10', bg2: 'bg-teal-500/10', bg3: 'bg-green-400/5' },
    violet: { bg1: 'bg-violet-500/10', bg2: 'bg-purple-500/10', bg3: 'bg-fuchsia-400/5' },
    fuchsia: { bg1: 'bg-fuchsia-500/10', bg2: 'bg-pink-500/10', bg3: 'bg-rose-400/5' },
    sky: { bg1: 'bg-sky-500/10', bg2: 'bg-indigo-500/10', bg3: 'bg-blue-400/5' },
    teal: { bg1: 'bg-teal-500/10', bg2: 'bg-emerald-500/10', bg3: 'bg-cyan-400/5' },
  };

  const currentTheme = bubbleThemes[bubbleTheme] || bubbleThemes.brand;

  const variants = {
    default: 'bg-white/95 dark:bg-slate-950/90 backdrop-blur-3xl border-white/60 dark:border-white/5 shadow-premium',
    premium: 'card-premium',
  };

  return (
    <div 
      className={`
        rounded-[2.5rem] border transition-all duration-700 overflow-hidden relative group
        ${variants[variant]} 
        ${hoverable ? 'hover:-translate-y-2 hover:border-brand-500/20' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Decorative Interactive Bubbles - Dynamic Themes */}
      <div className={`absolute top-0 left-0 w-64 h-64 ${currentTheme.bg1} rounded-full blur-[80px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 -translate-x-1/2 -translate-y-1/2 z-0`}></div>
      <div className={`absolute bottom-0 right-0 w-48 h-48 ${currentTheme.bg2} rounded-full blur-[60px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 translate-x-1/4 translate-y-1/4 delay-100 z-0`}></div>
      <div className={`absolute top-1/2 left-1/2 w-32 h-32 ${currentTheme.bg3} rounded-full blur-[40px] pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:opacity-40 -translate-x-1/2 -translate-y-1/2 delay-300 z-0`}></div>

      {/* Animated Particles Layer */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-white animate-particle-float"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                opacity: 0.4,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
                '--float-duration': p.duration,
                '--float-delay': p.delay,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="relative z-10 w-full h-full">
        {(title || subtitle || headerAction) && (
          <div className={`px-10 ${compact ? 'py-5' : 'py-8'} border-b border-gray-100/50 dark:border-white/5 flex items-center justify-between gap-4 ${headerClassName}`}>
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

        <div className={`${noPadding ? '' : compact ? 'px-4 py-6 md:px-12 md:py-8' : 'p-6 md:p-16'} ${bodyClassName}`}>
          {children}
        </div>

        {footer && (
          <div className="px-10 py-8 bg-gray-50/30 dark:bg-zinc-800/20 border-t border-gray-100/50 dark:border-white/5 rounded-b-[2.5rem]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

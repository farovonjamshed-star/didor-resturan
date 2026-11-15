import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'badge' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  variant = 'badge',
}) => {
  const dimensionMap = {
    sm: 44,
    md: 58,
    lg: 84,
    xl: 140,
  };

  const dim = dimensionMap[size];

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {/* Circular Badge Icon */}
        <div 
          className="relative rounded-full flex-shrink-0 flex items-center justify-center p-[2px] transition-transform duration-300 hover:scale-105"
          style={{ width: dim, height: dim }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]">
            {/* Dark background base */}
            <circle cx="50" cy="50" r="48" fill="#0F0F0F" stroke="#1F1F1F" strokeWidth="1" />
            
            {/* Outer Golden Ring */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
            
            {/* Concentric Inner Golden Accent Ring */}
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#C59B27" strokeWidth="0.8" strokeDasharray="3 1.5" opacity="0.8" />
            <circle cx="50" cy="50" r="39" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />

            {/* Subtle decorative stars/dots */}
            <circle cx="50" cy="18" r="1.5" fill="#D4AF37" />
            <circle cx="50" cy="82" r="1.5" fill="#D4AF37" />

            {/* Central Typography DIDOR */}
            <text
              x="50"
              y="53"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="900"
              fontSize="20"
              fill="#FFFFFF"
              letterSpacing="0.05em"
            >
              DIDOR
            </text>

            {/* Sub-text RESTAURANT */}
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="500"
              fontSize="6.2"
              fill="#D4AF37"
              letterSpacing="0.28em"
            >
              RESTAURANT
            </text>
          </svg>
        </div>

        {/* Text next to logo */}
        <div className="flex flex-col">
          <span className="font-brand-sans font-black tracking-wider text-xl sm:text-2xl text-white leading-none">
            DIDOR
          </span>
          {showSubtitle && (
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase mt-1">
              RESTAURANT
            </span>
          )}
        </div>
      </div>
    );
  }

  // Pure Circular Badge Logo as requested in brand specs
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group transition-all duration-300 ${className}`}
      style={{ width: dim, height: dim }}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.22)] group-hover:drop-shadow-[0_4px_28px_rgba(212,175,55,0.45)] transition-all duration-500"
      >
        <defs>
          <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#997316" />
          </linearGradient>
          <linearGradient id="darkBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141416" />
            <stop offset="50%" stopColor="#0F0F0F" />
            <stop offset="100%" stopColor="#080809" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Glow / Drop Shadow circle */}
        <circle cx="60" cy="60" r="58" fill="url(#darkBgGrad)" stroke="#222" strokeWidth="1" />

        {/* Outer Gold Ring 1 */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#goldRingGrad)"
          strokeWidth="2.2"
        />

        {/* Delicate Inner Ring 2 (Double Ring frame) */}
        <circle
          cx="60"
          cy="60"
          r="49"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.8"
          strokeDasharray="4 2"
          opacity="0.85"
        />
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="url(#goldRingGrad)"
          strokeWidth="0.6"
          opacity="0.5"
        />

        {/* Top & Bottom Geometric Gold Ornaments */}
        <circle cx="60" cy="22" r="1.8" fill="#D4AF37" />
        <line x1="50" y1="22" x2="56" y2="22" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />
        <line x1="64" y1="22" x2="70" y2="22" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />

        <circle cx="60" cy="98" r="1.8" fill="#D4AF37" />
        <line x1="50" y1="98" x2="56" y2="98" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />
        <line x1="64" y1="98" x2="70" y2="98" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />

        {/* Center Text: DIDOR (Bold uppercase sans-serif) */}
        <text
          x="60"
          y="63"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#FFFFFF"
          letterSpacing="0.04em"
        >
          DIDOR
        </text>

        {/* Sub-Text: RESTAURANT */}
        {showSubtitle && (
          <text
            x="60"
            y="81"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="600"
            fontSize="7.5"
            fill="url(#goldRingGrad)"
            letterSpacing="0.32em"
          >
            RESTAURANT
          </text>
        )}
      </svg>
    </div>
  );
};

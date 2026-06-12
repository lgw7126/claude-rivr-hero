const FISH = [
  { id: 1, bottom: '5%',  duration: 13, delay: 0,   size: 16, startX: '8%',   endX: '35%',  opacity: 0.55 },
  { id: 2, bottom: '3%',  duration: 17, delay: 4,   size: 11, startX: '60%',  endX: '28%',  opacity: 0.45 },
  { id: 3, bottom: '7%',  duration: 10, delay: 6,   size: 13, startX: '72%',  endX: '85%',  opacity: 0.50 },
  { id: 4, bottom: '2%',  duration: 19, delay: 2,   size: 9,  startX: '82%',  endX: '50%',  opacity: 0.40 },
  { id: 5, bottom: '4%',  duration: 14, delay: 8,   size: 14, startX: '25%',  endX: '55%',  opacity: 0.50 },
]

function FishSVG({ size, flipped }: { size: number; flipped: boolean }) {
  return (
    <svg
      width={size * 2}
      height={size}
      viewBox="0 0 48 24"
      fill="none"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none', display: 'block' }}
    >
      {/* tail fin */}
      <path d="M4 12 L0 5 L0 19 Z" fill="rgba(100,140,190,0.7)" />
      {/* body */}
      <ellipse cx="22" cy="12" rx="16" ry="7" fill="rgba(120,160,210,0.65)" />
      {/* belly highlight */}
      <ellipse cx="22" cy="14" rx="12" ry="4" fill="rgba(180,210,240,0.3)" />
      {/* dorsal fin */}
      <path d="M16 5 Q22 1 28 5" stroke="rgba(100,140,190,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* eye */}
      <circle cx="34" cy="11" r="2" fill="rgba(40,65,110,0.8)" />
      <circle cx="34.8" cy="10.2" r="0.7" fill="rgba(255,255,255,0.7)" />
      {/* mouth */}
      <path d="M44 12 Q46 13 44 14" stroke="rgba(100,140,190,0.5)" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* scale lines */}
      <path d="M20 7 Q24 10 20 13" stroke="rgba(150,185,225,0.4)" strokeWidth="1" fill="none" />
      <path d="M26 7 Q30 10 26 13" stroke="rgba(150,185,225,0.4)" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function Fish() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      <style>{`
        @keyframes swim {
          0%        { left: var(--sx); opacity: 0; }
          6%        { opacity: var(--op); }
          47%       { left: var(--ex); opacity: var(--op); }
          53%       { left: var(--ex); opacity: 0; }
          54%, 99%  { left: var(--sx); opacity: 0; }
          100%      { left: var(--sx); opacity: 0; }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-3px); }
        }
      `}</style>

      {/* Water tint overlay — only bottom portion to simulate water depth */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '12%',
        background: 'linear-gradient(to top, rgba(90,130,180,0.18) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {FISH.map(({ id, bottom, duration, delay, size, startX, endX, opacity }) => {
        const goingRight = parseFloat(endX) > parseFloat(startX)
        return (
          <div
            key={id}
            style={{
              position: 'absolute',
              bottom,
              ['--sx' as string]: startX,
              ['--ex' as string]: endX,
              ['--op' as string]: opacity,
              animation: `swim ${duration}s ease-in-out ${delay}s infinite`,
              filter: 'blur(0.4px)',
            }}
          >
            <div style={{ animation: `bob ${duration * 0.35}s ease-in-out ${delay}s infinite` }}>
              <FishSVG size={size} flipped={!goingRight} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

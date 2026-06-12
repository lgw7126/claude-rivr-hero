export default function FogOverlay() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <style>{`
        @keyframes fog1 {
          0%   { transform: translateX(-8%) translateY(0px) scaleX(1);   opacity: 0.18; }
          40%  { transform: translateX(4%)  translateY(-12px) scaleX(1.06); opacity: 0.32; }
          70%  { transform: translateX(10%) translateY(-6px) scaleX(1.03);  opacity: 0.22; }
          100% { transform: translateX(-8%) translateY(0px) scaleX(1);   opacity: 0.18; }
        }
        @keyframes fog2 {
          0%   { transform: translateX(6%)  translateY(0px) scaleX(1);    opacity: 0.22; }
          35%  { transform: translateX(-6%) translateY(-16px) scaleX(1.08); opacity: 0.38; }
          65%  { transform: translateX(-12%) translateY(-8px) scaleX(1.04); opacity: 0.26; }
          100% { transform: translateX(6%)  translateY(0px) scaleX(1);    opacity: 0.22; }
        }
        @keyframes fog3 {
          0%   { transform: translateX(0%)  translateY(0px) scaleX(1);    opacity: 0.14; }
          50%  { transform: translateX(-5%) translateY(-20px) scaleX(1.1); opacity: 0.28; }
          100% { transform: translateX(0%)  translateY(0px) scaleX(1);    opacity: 0.14; }
        }
        @keyframes fog4 {
          0%   { transform: translateX(-4%) translateY(0px);  opacity: 0.20; }
          45%  { transform: translateX(8%)  translateY(-10px); opacity: 0.35; }
          100% { transform: translateX(-4%) translateY(0px);  opacity: 0.20; }
        }
      `}</style>

      {/* Layer 1 — wide bottom sweep */}
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        left: '-10%',
        width: '130%',
        height: '45%',
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(220,230,245,0.55) 0%, rgba(200,215,235,0.25) 50%, transparent 100%)',
        filter: 'blur(28px)',
        animation: 'fog1 14s ease-in-out infinite',
      }} />

      {/* Layer 2 — mid-screen drift */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-15%',
        width: '140%',
        height: '35%',
        background: 'radial-gradient(ellipse 70% 55% at 40% 80%, rgba(210,225,245,0.45) 0%, rgba(190,210,235,0.18) 55%, transparent 100%)',
        filter: 'blur(36px)',
        animation: 'fog2 18s ease-in-out infinite',
      }} />

      {/* Layer 3 — upper thin haze */}
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '-5%',
        width: '120%',
        height: '28%',
        background: 'radial-gradient(ellipse 90% 50% at 55% 70%, rgba(230,238,250,0.35) 0%, rgba(215,228,248,0.12) 60%, transparent 100%)',
        filter: 'blur(44px)',
        animation: 'fog3 22s ease-in-out infinite',
      }} />

      {/* Layer 4 — left edge tendril */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-20%',
        width: '70%',
        height: '40%',
        background: 'radial-gradient(ellipse 60% 70% at 30% 90%, rgba(215,228,245,0.42) 0%, transparent 70%)',
        filter: 'blur(32px)',
        animation: 'fog4 16s ease-in-out infinite',
      }} />

      {/* Layer 5 — right edge tendril (opposite phase) */}
      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '-20%',
        width: '70%',
        height: '38%',
        background: 'radial-gradient(ellipse 60% 70% at 70% 90%, rgba(215,228,245,0.38) 0%, transparent 70%)',
        filter: 'blur(32px)',
        animation: 'fog2 20s ease-in-out infinite reverse',
      }} />
    </div>
  )
}

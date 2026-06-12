import { ArrowUpRight } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#f0f0f0] px-6 md:px-14 pb-14">
      <div className="max-w-[1536px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-4 flex-wrap">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-normal text-[rgba(30,50,90,0.95)] tracking-tight leading-tight">
              Architected for high-performance DeFi
            </h2>
            <p className="text-[13px] md:text-[14px] text-[rgba(30,50,90,0.5)] mt-1 font-normal">
              Fluid Liquidity Solutions. Access the future of staking.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[rgba(30,50,90,0.08)] hover:bg-[rgba(30,50,90,0.13)] transition-colors text-[rgba(30,50,90,0.8)] rounded-full px-5 py-2.5 text-[13px] font-normal whitespace-nowrap cursor-pointer border-0 mt-1">
            Start Staking
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">

          {/* Left tall card */}
          <div className="bg-white rounded-[1.5rem] p-6 flex flex-col justify-between min-h-[340px] md:min-h-[420px]">
            <div className="flex items-center gap-2 mb-auto">
              <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">Fi</span>
              <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">·</span>
              <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">Liquid Staking</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-[22px] md:text-[26px] font-normal text-[rgba(30,50,90,0.95)] tracking-tight leading-tight mb-3">
                Unlock the liquidity<br />of your staked assets
              </h3>
              <p className="text-[13px] text-[rgba(30,50,90,0.5)] leading-relaxed font-normal max-w-[300px]">
                Trade, borrow, or yield-farm without unstaking periods. Experience zero friction with immediate access to your capital.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">

            {/* Real-time Yields — wide */}
            <div className="bg-white rounded-[1.5rem] p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">01</span>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">Yields</span>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-normal text-[rgba(30,50,90,0.95)] tracking-tight mb-2">
                Real-time Yields
              </h3>
              <p className="text-[13px] text-[rgba(30,50,90,0.5)] leading-relaxed font-normal">
                Track your compounding rewards minute by minute with our high-fidelity indexers. Keep your finger on the pulse of your portfolio's performance.
              </p>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-2 gap-3">

              {/* Bank-Grade */}
              <div className="bg-white rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[180px]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">Bank-Grade</span>
                  <span className="text-[11px] text-[rgba(30,50,90,0.3)] font-normal">02</span>
                </div>
                <div>
                  <p className="text-[12px] text-[rgba(30,50,90,0.5)] leading-relaxed font-normal mb-4">
                    Smart contracts audited by leading firms, protected by multisig.
                  </p>
                  <button className="flex items-center gap-1.5 text-[12px] text-[rgba(30,50,90,0.7)] hover:text-[rgba(30,50,90,0.95)] transition-colors cursor-pointer bg-transparent border-0 p-0 font-normal">
                    View Audits
                    <div className="w-5 h-5 rounded-full border border-[rgba(30,50,90,0.2)] flex items-center justify-center">
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Cross-Chain */}
              <div className="bg-white rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[180px]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal">Cross-Chain</span>
                  <span className="text-[11px] text-[rgba(30,50,90,0.3)] font-normal">04</span>
                </div>
                <div>
                  <p className="text-[12px] text-[rgba(30,50,90,0.5)] leading-relaxed font-normal mb-4">
                    Move your liquid position across Layer 1 solutions seamlessly. Capital flows where opportunity arises.
                  </p>
                  <button className="w-7 h-7 rounded-full bg-[rgba(30,50,90,0.08)] hover:bg-[rgba(30,50,90,0.14)] transition-colors flex items-center justify-center cursor-pointer border-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[rgba(30,50,90,0.7)]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

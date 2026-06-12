const LINKS = {
  Protocol: ['Ecosystem', 'Economics', 'Governance'],
  Developers: ['Documentation', 'Github', 'Bug Bounty'],
  Community: ['Discord', 'Twitter', 'Blog'],
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#f0f0f0] px-6 md:px-14 pb-10">
      <div className="max-w-[1536px] mx-auto">
        <div className="w-full bg-white rounded-[1.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between gap-10">

          {/* Left — brand */}
          <div className="max-w-[220px]">
            <span className="text-[20px] font-normal tracking-tighter text-[rgba(30,50,90,0.9)]">RIVR</span>
            <p className="text-[12px] text-[rgba(30,50,90,0.45)] leading-relaxed mt-2 font-normal">
              Streaming wealth through liquid asset streams, cross-chain yield, and frictionless protocols.
            </p>
          </div>

          {/* Right — link columns */}
          <div className="flex gap-12 md:gap-16 flex-wrap">
            {Object.entries(LINKS).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-2.5">
                <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.35)] font-normal mb-1">
                  {category}
                </span>
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[13px] text-[rgba(30,50,90,0.6)] hover:text-[rgba(30,50,90,0.9)] transition-colors font-normal no-underline"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

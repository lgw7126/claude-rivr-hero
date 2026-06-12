const STATS = [
  { value: '$2.4B',  label: 'Total Value Locked' },
  { value: '8.5%',   label: 'Average Realized Yield' },
  { value: '140K+',  label: 'Active Participants' },
  { value: '< 2s',   label: 'Finality Onging' },
]

export default function StatsBar() {
  return (
    <section className="w-full bg-[#f0f0f0] py-10 px-6 md:px-14">
      <div className="max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-[32px] md:text-[42px] font-normal text-[rgba(30,50,90,0.9)] tracking-tight leading-none">
              {value}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[rgba(30,50,90,0.45)] font-normal">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

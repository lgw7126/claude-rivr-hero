import { ArrowUpRight } from 'lucide-react'

const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4'

export default function CTASection() {
  return (
    <section className="w-full bg-[#f0f0f0] px-6 md:px-14 pb-14">
      <div className="max-w-[1536px] mx-auto">
        <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden min-h-[320px] md:min-h-[380px] flex items-end">

          {/* Background video */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={CTA_VIDEO}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,15,40,0.75)] via-[rgba(10,15,40,0.45)] to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between gap-6 p-8 md:p-12">
            <div className="max-w-[500px]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal text-white leading-tight tracking-tight mb-3">
                Melt rigid assets<br />into fluid yield.
              </h2>
              <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed font-normal">
                Join the decentralized ecosystem transforming<br className="hidden md:block" />
                capital efficiency across chains.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className="flex items-center gap-2 bg-white text-[rgba(30,50,90,0.9)] rounded-full pl-2 pr-5 py-2 hover:bg-white/90 transition-colors cursor-pointer border-0 font-normal text-[14px]">
                <div className="bg-[rgba(30,50,90,0.1)] p-1.5 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                Launch App
              </button>
              <button className="text-white/80 hover:text-white transition-colors text-[14px] font-normal cursor-pointer bg-transparent border-0 px-2">
                Read Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

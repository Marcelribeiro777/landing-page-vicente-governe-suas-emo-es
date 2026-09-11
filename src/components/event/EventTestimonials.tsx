import React from 'react'
import { Star, MessageSquareQuote, MapPin } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventTestimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#2E2B25]"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A020]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#E8A020] bg-[#E8A020]/15 px-3.5 py-1.5 rounded-full border border-[#E8A020]/30 inline-flex items-center gap-1.5 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#E8A020]" />
            {eventContent.testimonials.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.testimonials.title}
          </h2>
          <p className="text-[#CFC9B8] text-base sm:text-lg leading-relaxed">
            {eventContent.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {eventContent.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-[#2E2B25] hover:border-[#E8A020]/60 hover:shadow-xl hover:shadow-[#E8A020]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#E8A020] mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8A020]" />
                  ))}
                </div>

                <p className="text-[#F2EFE6] text-sm sm:text-base leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-5 border-t border-[#2E2B25]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E8A020]/40 group-hover:ring-[#E8A020] transition-all"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E8A020] transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#CFC9B8]">
                    <span>{item.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#A89F91]">
                      <MapPin className="w-3 h-3 text-[#E8A020]" />
                      {item.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

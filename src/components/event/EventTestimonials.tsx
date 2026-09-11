import React from 'react'
import { Star, MessageSquareQuote, MapPin } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventTestimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-28 bg-[#31376B] relative border-t border-[#6A84B7]/25"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5BB7D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#5BB7D0] bg-[#5BB7D0]/15 px-3.5 py-1.5 rounded-full border border-[#5BB7D0]/30 inline-flex items-center gap-1.5 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#5BB7D0]" />
            {eventContent.testimonials.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.testimonials.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {eventContent.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {eventContent.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#1e2348]/90 border border-[#6A84B7]/30 hover:border-[#5BB7D0]/60 hover:shadow-xl hover:shadow-[#5BB7D0]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#5BB7D0] mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#5BB7D0]" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-5 border-t border-[#6A84B7]/25">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#5BB7D0]/40 group-hover:ring-[#5BB7D0] transition-all"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#5BB7D0] transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span>{item.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-[#6A84B7]" />
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

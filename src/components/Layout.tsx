import React from 'react'
import { Outlet } from 'react-router-dom'
import { EventHeader } from '@/components/event/EventHeader'
import { EventFooter } from '@/components/event/EventFooter'
import { FloatingWhatsAppButton } from '@/components/event/FloatingWhatsAppButton'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Fixed Sticky Header Navigation */}
      <EventHeader />

      {/* Main Single-Page Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Support & Institutional Footer */}
      <EventFooter />

      {/* WhatsApp Floating Action Button */}
      <FloatingWhatsAppButton />
    </div>
  )
}

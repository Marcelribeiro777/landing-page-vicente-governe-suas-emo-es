import React from 'react'
import { Outlet } from 'react-router-dom'
import { EventHeader } from '@/components/event/EventHeader'
import { EventFooter } from '@/components/event/EventFooter'
import { FloatingWhatsAppButton } from '@/components/event/FloatingWhatsAppButton'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e2348] text-slate-100 font-sans selection:bg-brand-accent selection:text-[#31376B]">
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

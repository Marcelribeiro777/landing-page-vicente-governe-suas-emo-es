import React from 'react'
import { Outlet } from 'react-router-dom'
import { EventHeader } from '@/components/event/EventHeader'
import { EventFooter } from '@/components/event/EventFooter'
import { FloatingWhatsAppButton } from '@/components/event/FloatingWhatsAppButton'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#F2EFE6] font-sans selection:bg-[#E8A020] selection:text-[#0D0D0D]">
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

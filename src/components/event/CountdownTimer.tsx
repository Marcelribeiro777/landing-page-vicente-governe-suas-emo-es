import React, { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDateISO: string
  className?: string
  variant?: 'cards' | 'inline' | 'compact'
  labelColor?: string
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function CountdownTimer({
  targetDateISO,
  className = '',
  variant = 'cards',
}: CountdownTimerProps) {
  const calculateTimeRemaining = (): TimeRemaining => {
    const target = new Date(targetDateISO).getTime()
    const now = new Date().getTime()
    const diff = target - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds, isExpired: false }
  }

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDateISO])

  const formatNumber = (val: number) => val.toString().padStart(2, '0')

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 font-mono text-[#E8A020] ${className}`}>
        <span className="font-bold">{formatNumber(timeLeft.days)}d</span>:
        <span className="font-bold">{formatNumber(timeLeft.hours)}h</span>:
        <span className="font-bold">{formatNumber(timeLeft.minutes)}m</span>:
        <span className="font-bold text-[#F5B83D]">{formatNumber(timeLeft.seconds)}s</span>
      </div>
    )
  }

  const units = [
    { label: 'DIAS', value: timeLeft.days },
    { label: 'HORAS', value: timeLeft.hours },
    { label: 'MINUTOS', value: timeLeft.minutes },
    { label: 'SEGUNDOS', value: timeLeft.seconds },
  ]

  return (
    <div className={`grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto ${className}`}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#141414]/90 border border-[#E8A020]/30 shadow-lg shadow-[#E8A020]/10 backdrop-blur-md relative overflow-hidden group"
        >
          {/* Subtle top glow */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E8A020] to-transparent opacity-75" />
          <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-white tracking-tight drop-shadow">
            {formatNumber(unit.value)}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-[#E8A020] tracking-wider uppercase mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}

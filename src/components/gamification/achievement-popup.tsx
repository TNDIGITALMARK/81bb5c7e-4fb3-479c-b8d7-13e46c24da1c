'use client'

import { useGamification } from '@/hooks/use-gamification'
import { useEffect, useState } from 'react'

export function AchievementPopup() {
  const { showAchievement } = useGamification()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (showAchievement) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showAchievement])

  if (!visible || !showAchievement) return null

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 badge-unlocked">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white px-6 py-4 rounded-xl shadow-blue-lg border-2 border-white/20">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{showAchievement.icon}</div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide opacity-90" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Achievement Unlocked!
            </div>
            <div className="text-lg font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {showAchievement.title}
            </div>
            <div className="text-sm opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
              {showAchievement.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LevelUpNotification() {
  const { showLevelUp, state } = useGamification()

  if (!showLevelUp) return null

  return (
    <div className="level-up-notification">
      <div className="text-center">
        <div className="text-sm opacity-80 mb-2">LEVEL UP!</div>
        <div className="text-6xl font-black">LEVEL {state.level}</div>
        <div className="text-lg mt-2 opacity-90">+50 XP BONUS</div>
      </div>
    </div>
  )
}

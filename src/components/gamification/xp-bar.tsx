'use client'

import { useGamification } from '@/hooks/use-gamification'

export function XPBar() {
  const { state } = useGamification()
  const xpInCurrentLevel = state.xp % state.xpToNextLevel
  const progress = (xpInCurrentLevel / state.xpToNextLevel) * 100

  return (
    <div className="fixed top-20 right-6 z-40 bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-4 shadow-lg backdrop-blur-sm bg-opacity-90 hover-lift">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          LVL {state.level}
        </div>
        <div className="flex-1">
          <div className="text-xs text-[hsl(var(--muted-foreground))] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            {xpInCurrentLevel} / {state.xpToNextLevel} XP
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {state.streak > 1 && (
        <div className="flex items-center gap-2 text-xs">
          <span className="streak-active px-2 py-1 rounded text-white font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            🔥 {state.streak} DAY STREAK
          </span>
        </div>
      )}

      {state.combo > 0 && (
        <div className="combo-counter mt-2">
          <span>⚡</span>
          <span>{state.combo}x COMBO</span>
        </div>
      )}
    </div>
  )
}

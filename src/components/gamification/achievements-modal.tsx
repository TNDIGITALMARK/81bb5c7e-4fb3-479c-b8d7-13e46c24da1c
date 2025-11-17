'use client'

import { useGamification } from '@/hooks/use-gamification'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'

export function AchievementsModal() {
  const { state } = useGamification()
  const [open, setOpen] = useState(false)

  const unlockedCount = state.achievements.filter(a => a.unlocked).length
  const totalCount = state.achievements.length

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-fun text-white shadow-blue-lg hover:shadow-cyan-lg hover-lift transition-all duration-300 flex items-center justify-center font-bold text-2xl group">
          <span className="group-hover:scale-110 transition-transform">🏆</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[hsl(var(--card))] border-2 border-[hsl(var(--primary))]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ACHIEVEMENTS
          </DialogTitle>
          <div className="text-sm text-[hsl(var(--muted-foreground))]" style={{ fontFamily: 'Inter, sans-serif' }}>
            {unlockedCount} / {totalCount} Unlocked
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          {/* Player Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--primary)/0.2)] to-transparent border-2 border-[hsl(var(--primary)/0.3)]">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                LVL {state.level}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Current Level
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-transparent border-2 border-[hsl(var(--accent)/0.3)]">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {state.xp}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total XP
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--secondary)/0.2)] to-transparent border-2 border-[hsl(var(--secondary)/0.3)]">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {state.streak}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Day Streak 🔥
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-transparent border-2 border-[hsl(var(--accent)/0.3)]">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {state.totalClicks}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total Interactions
              </div>
            </div>
          </div>

          {/* Achievement List */}
          <div className="space-y-3">
            {state.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-[hsl(var(--primary)/0.2)] to-transparent border-[hsl(var(--primary))] shadow-blue'
                    : 'bg-[hsl(var(--muted)/0.3)] border-[hsl(var(--muted))] opacity-60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl transition-all duration-300 ${achievement.unlocked ? 'scale-100' : 'scale-90 grayscale'}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-lg font-bold ${achievement.unlocked ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {achievement.title}
                      </h3>
                      {achievement.unlocked && (
                        <span className="text-xs px-2 py-1 bg-[hsl(var(--primary))] text-white rounded-full font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          UNLOCKED
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && achievement.unlockedAt && (
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: Date
}

interface GamificationState {
  level: number
  xp: number
  xpToNextLevel: number
  achievements: Achievement[]
  streak: number
  lastVisit: Date | null
  totalClicks: number
  combo: number
}

interface GamificationContextType {
  state: GamificationState
  addXP: (amount: number) => void
  unlockAchievement: (id: string) => void
  incrementClicks: () => void
  resetCombo: () => void
  showLevelUp: boolean
  showAchievement: Achievement | null
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined)

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_visit',
    title: 'Welcome Explorer',
    description: 'Visit the Application for the first time',
    icon: '🎮',
    unlocked: false
  },
  {
    id: 'click_master',
    title: 'Click Master',
    description: 'Interact with 10 elements',
    icon: '🖱️',
    unlocked: false
  },
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Get a 5x combo',
    icon: '⚡',
    unlocked: false
  },
  {
    id: 'loyal_player',
    title: 'Loyal Player',
    description: 'Visit 3 days in a row',
    icon: '🔥',
    unlocked: false
  },
  {
    id: 'game_enthusiast',
    title: 'Feature Explorer',
    description: 'Explore all feature cards',
    icon: '🎯',
    unlocked: false
  },
  {
    id: 'level_5',
    title: 'Rising Star',
    description: 'Reach Level 5',
    icon: '⭐',
    unlocked: false
  },
  {
    id: 'beta_tester',
    title: 'Beta Tester',
    description: 'Join the community',
    icon: '🚀',
    unlocked: false
  }
]

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GamificationState>(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kabyte_gamification')
      if (saved) {
        const parsed = JSON.parse(saved)
        return {
          ...parsed,
          lastVisit: parsed.lastVisit ? new Date(parsed.lastVisit) : null,
          achievements: ACHIEVEMENTS.map(a => {
            const savedAch = parsed.achievements?.find((sa: Achievement) => sa.id === a.id)
            return savedAch ? { ...a, ...savedAch } : a
          })
        }
      }
    }

    return {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      achievements: ACHIEVEMENTS,
      streak: 1,
      lastVisit: null,
      totalClicks: 0,
      combo: 0
    }
  })

  const [showLevelUp, setShowLevelUp] = useState(false)
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null)

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kabyte_gamification', JSON.stringify(state))
    }
  }, [state])

  // Track visit streak
  useEffect(() => {
    const today = new Date().toDateString()
    const lastVisit = state.lastVisit ? new Date(state.lastVisit).toDateString() : null

    if (lastVisit !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const isConsecutive = lastVisit === yesterday.toDateString()

      setState(prev => ({
        ...prev,
        streak: isConsecutive ? prev.streak + 1 : 1,
        lastVisit: new Date()
      }))

      // Check for streak achievements
      if (state.streak >= 3) {
        unlockAchievement('loyal_player')
      }
    }

    // Unlock first visit achievement
    unlockAchievement('first_visit')
  }, [])

  // Reset combo after inactivity
  useEffect(() => {
    if (state.combo > 0) {
      const timeout = setTimeout(() => {
        setState(prev => ({ ...prev, combo: 0 }))
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [state.combo, state.totalClicks])

  const addXP = (amount: number) => {
    setState(prev => {
      const newXP = prev.xp + amount
      const newLevel = Math.floor(newXP / prev.xpToNextLevel) + 1
      const leveledUp = newLevel > prev.level

      if (leveledUp) {
        setShowLevelUp(true)
        setTimeout(() => setShowLevelUp(false), 2000)

        // Check level achievements
        if (newLevel >= 5) {
          unlockAchievement('level_5')
        }
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        xpToNextLevel: prev.xpToNextLevel + (leveledUp ? 50 : 0)
      }
    })
  }

  const unlockAchievement = (id: string) => {
    setState(prev => {
      const achievement = prev.achievements.find(a => a.id === id)
      if (achievement && !achievement.unlocked) {
        const updated = prev.achievements.map(a =>
          a.id === id
            ? { ...a, unlocked: true, unlockedAt: new Date() }
            : a
        )

        setShowAchievement(achievement)
        setTimeout(() => setShowAchievement(null), 3000)

        return {
          ...prev,
          achievements: updated,
          xp: prev.xp + 50 // Bonus XP for achievement
        }
      }
      return prev
    })
  }

  const incrementClicks = () => {
    setState(prev => {
      const newClicks = prev.totalClicks + 1
      const newCombo = prev.combo + 1

      // Check achievements
      if (newClicks >= 10) {
        unlockAchievement('click_master')
      }
      if (newCombo >= 5) {
        unlockAchievement('speed_demon')
      }

      return {
        ...prev,
        totalClicks: newClicks,
        combo: newCombo
      }
    })

    // Add XP for interaction
    addXP(5)
  }

  const resetCombo = () => {
    setState(prev => ({ ...prev, combo: 0 }))
  }

  return (
    <GamificationContext.Provider
      value={{
        state,
        addXP,
        unlockAchievement,
        incrementClicks,
        resetCombo,
        showLevelUp,
        showAchievement
      }}
    >
      {children}
    </GamificationContext.Provider>
  )
}

export function useGamification() {
  const context = useContext(GamificationContext)
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider')
  }
  return context
}

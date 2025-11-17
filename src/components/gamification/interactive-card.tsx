'use client'

import { ReactNode, MouseEvent, useState } from 'react'
import { useGamification } from '@/hooks/use-gamification'

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function InteractiveCard({ children, className = '', onClick }: InteractiveCardProps) {
  const { incrementClicks } = useGamification()
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    incrementClicks()

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    e.currentTarget.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)

    // Create particles
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40
    }))

    setParticles(prev => [...prev, ...newParticles])

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
    }, 2000)

    onClick?.()
  }

  return (
    <div
      className={`card-interactive ${className}`}
      onClick={handleClick}
    >
      {children}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{ left: `${particle.x}px`, top: `${particle.y}px` }}
        />
      ))}
    </div>
  )
}

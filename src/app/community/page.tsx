'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: [] as string[],
    platform: '',
    betaTester: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send to your backend/database
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        email: '',
        name: '',
        interests: [],
        platform: '',
        betaTester: false
      })
    }, 3000)
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image
              src="/generated/kabyte-logo.png"
              alt="KaByte Studio"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              KaByte Studio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Home
            </Link>
            <Link href="/#games" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Games
            </Link>
            <Link href="/flirtdeck" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              FlirtDeck
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Join Our Community
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
            Be part of the journey from day one. Get exclusive beta access, behind-the-scenes content, and help shape the future of our games.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Community Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-[hsl(var(--card))] border-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Early Access
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Play our games before anyone else and get exclusive founder rewards
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[hsl(var(--card))] border-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(var(--secondary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Direct Feedback
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Shape development with your feedback and vote on new features
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[hsl(var(--card))] border-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Behind The Scenes
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Get developer blogs, art previews, and insight into our creative process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="p-8 md:p-12 rounded-2xl bg-[hsl(var(--card))] border-glow-gold shadow-gold">
            <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              Sign Up for Beta Access
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  Welcome to the Community!
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                  Check your email for next steps and exclusive beta access information.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-opacity-50 transition"
                    placeholder="Your name"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-opacity-50 transition"
                    placeholder="you@example.com"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
                    GAME INTERESTS
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['FlirtDeck', 'Aetherbound', 'RuneForge Arena', 'ChronoTales'].map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-3 rounded-lg border-2 transition font-medium text-sm ${
                          formData.interests.includes(interest)
                            ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] bg-opacity-20 text-[hsl(var(--primary))]'
                            : 'border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]'
                        }`}
                        style={{fontFamily: 'Orbitron, sans-serif'}}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
                    PREFERRED PLATFORM
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-opacity-50 transition"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    <option value="">Select platform</option>
                    <option value="mobile">Mobile (iOS/Android)</option>
                    <option value="web">Web Browser</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                {/* Beta Tester Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="betaTester"
                    checked={formData.betaTester}
                    onChange={(e) => setFormData({...formData, betaTester: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded border-[hsl(var(--border))] text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] focus:ring-opacity-50"
                  />
                  <label htmlFor="betaTester" className="text-sm text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                    I'm interested in active beta testing and providing detailed feedback to help improve the games
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:shadow-cyan-lg transition font-bold text-lg uppercase"
                  style={{fontFamily: 'Orbitron, sans-serif'}}
                >
                  Join the Community
                </button>

                <p className="text-xs text-center text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                  By signing up, you agree to receive updates and beta access information from KaByte Studio.
                  We respect your privacy and won't spam you.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6 bg-[hsl(var(--card))] border-y border-[hsl(var(--border))]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                1000+
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Beta Testers
              </p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                4
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Games in Development
              </p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Q2 2024
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                First Beta Launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[hsl(var(--border))]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/generated/kabyte-logo.png"
                alt="KaByte Studio"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <div className="font-bold text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  KaByte Studio
                </div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">
                  The Spirit of Play, The Byte of Innovation
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Home
              </Link>
              <Link href="/#games" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Games
              </Link>
              <Link href="/flirtdeck" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                FlirtDeck
              </Link>
              <Link href="/community" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Community
              </Link>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"></path></svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[hsl(var(--border))] text-center text-sm text-[hsl(var(--muted-foreground))]">
            <p>&copy; 2024 KaByte Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

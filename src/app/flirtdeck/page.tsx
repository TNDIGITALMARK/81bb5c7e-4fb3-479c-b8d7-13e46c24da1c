export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'

export default function FlirtDeckPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <span className="text-xl font-bold text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              Application
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Home
            </Link>
            <Link href="/#features" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Features
            </Link>
            <Link href="/community" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Community
            </Link>
            <Link
              href="/community"
              className="px-6 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:shadow-cyan transition font-semibold text-sm uppercase"
              style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}
            >
              Join Beta
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="relative rounded-2xl overflow-hidden border-glow-gold shadow-gold mb-12">
            <Image
              src="/generated/flirtdeck-hero.png"
              alt="FlirtDeck - The TCG Dating App"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                FLIRTDECK
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 600}}>
                The TCG Dating App
              </p>
              <div className="inline-block px-8 py-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-semibold uppercase text-lg shadow-gold">
                Beta Access Now Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              A Revolutionary Dating Experience
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
              FlirtDeck combines the strategic depth of trading card games with the excitement of modern dating.
              Build your personality deck, match with compatible players, and forge real connections through gameplay.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-[hsl(var(--card))] border-glow">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Personality-Based Matching
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Create cards that represent your interests, values, and personality. Our AI matches you with compatible players based on deck synergy.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[hsl(var(--card))] border-glow">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Social Deck Building
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Collect, trade, and customize cards representing hobbies, goals, and quirks. Your deck evolves as you grow and discover new interests.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[hsl(var(--card))] border-glow">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Real Connection Mechanics
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Engage in card battles that reveal compatibility. Strategic gameplay creates natural conversation starters and meaningful interactions.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[hsl(var(--card))] border-glow">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Mobile-First Design
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Optimized for on-the-go play with responsive design and web support. Connect anywhere, anytime on your preferred device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Details Section */}
      <section className="py-12 px-6 bg-[hsl(var(--card))] border-y border-[hsl(var(--border))]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Game Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-3 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                TCG + Dating
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Genre
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-3 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Q2 2024
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Beta Launch
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-3 text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Mobile + Web
              </div>
              <p className="text-[hsl(var(--muted-foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                Platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Ready to Play Your Cards?
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-10" style={{fontFamily: 'Inter, sans-serif'}}>
            Join the beta and be among the first to experience the future of dating through gameplay.
            Early access members get exclusive cards and founder rewards.
          </p>
          <Link
            href="/community"
            className="inline-block px-12 py-5 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg hover:shadow-gold transition font-bold text-xl uppercase"
            style={{fontFamily: 'Orbitron, sans-serif'}}
          >
            Sign Up for Beta
          </Link>
          <p className="mt-6 text-sm text-[hsl(var(--muted-foreground))]">
            Limited spots available for early beta access
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[hsl(var(--border))]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
              <div>
                <div className="font-bold text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  Application
                </div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">
                  Professional solutions
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Home
              </Link>
              <Link href="/#features" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Features
              </Link>
              <Link href="/#about" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                About
              </Link>
              <Link href="/contact" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Contact
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
            <p>&copy; 2025 Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

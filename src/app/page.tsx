export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'

export default function Index() {
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
            <Link href="/#about" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              About
            </Link>
            <Link href="/#projects" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition uppercase" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>
              Apps & Games
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
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Enhanced animated background with multiple layers */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-[hsl(var(--primary))] rounded-full animate-pulse blur-sm"></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-[hsl(var(--secondary))] rounded-full animate-pulse blur-sm" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse blur-sm" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[hsl(var(--primary))] rounded-full animate-pulse blur-sm" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[hsl(var(--secondary))] rounded-full animate-pulse blur-sm" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-[hsl(var(--accent))] rounded-full animate-pulse blur-sm" style={{animationDelay: '2.5s'}}></div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--background))] to-[hsl(var(--background))] opacity-60"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              KABYTE STUDIO
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 600}}>
              Apps & Games That Spark Joy
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-12" style={{fontFamily: 'Inter, sans-serif', fontWeight: 400}}>
              Building innovative apps and immersive games that bring people together. From social experiences to epic adventures, we create digital worlds worth exploring.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/flirtdeck"
                className="px-8 py-4 bg-gradient-fun text-white rounded-xl hover:shadow-blue-lg hover-lift transition-all duration-300 font-bold text-lg uppercase"
                style={{fontFamily: 'Orbitron, sans-serif'}}
              >
                Try FlirtDeck 💜
              </Link>
              <Link
                href="/community"
                className="px-8 py-4 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-xl hover:bg-[hsl(var(--primary))] hover:text-white hover-lift transition-all duration-300 font-bold text-lg uppercase"
                style={{fontFamily: 'Orbitron, sans-serif'}}
              >
                Join Community
              </Link>
            </div>
          </div>

          {/* Featured Project - FlirtDeck */}
          <div id="flirtdeck" className="mb-20">
            <Link href="/flirtdeck" className="block group">
              <div className="relative rounded-2xl overflow-hidden border-glow-purple hover:scale-[1.02] hover-lift transition-all duration-300 shadow-purple">
                <Image
                  src="/generated/flirtdeck-hero-realistic.png"
                  alt="FlirtDeck - The TCG Dating App"
                  width={1200}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h2 className="text-4xl md:text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    FlirtDeck 💜
                  </h2>
                  <p className="text-xl mb-4 text-[hsl(var(--foreground))]" style={{fontFamily: 'Inter, sans-serif'}}>
                    Dating Meets Trading Cards
                  </p>
                  <div className="inline-block px-6 py-3 bg-gradient-fun text-white rounded-xl font-bold uppercase text-sm shadow-blue">
                    🎮 Play Now - Beta Access Available
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Fun Stats Section */}
          <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover-lift">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                3+
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))] mt-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Projects In Development
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border border-[hsl(var(--border))] hover:border-[hsl(var(--secondary))] transition-all duration-300 hover-lift">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                1K+
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))] mt-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Beta Testers
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-all duration-300 hover-lift">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                24/7
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))] mt-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Community Active
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover-lift">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                100%
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))] mt-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Fun Guaranteed
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div id="projects">
            <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              More Apps & Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Aetherbound */}
              <div className="group rounded-xl overflow-hidden border-glow hover:shadow-blue-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/aetherbound-realistic.png"
                    alt="Aetherbound"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--accent))] text-white rounded-full text-xs font-bold">
                    🎮 GAME
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    Aetherbound
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Explore mystical realms in this story-driven RPG adventure with stunning visuals and epic battles.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">RPG</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Adventure</span>
                  </div>
                </div>
              </div>

              {/* RuneForge Arena */}
              <div className="group rounded-xl overflow-hidden border-glow-purple hover:shadow-purple-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/runeforge-realistic.png"
                    alt="RuneForge Arena"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--secondary))] text-white rounded-full text-xs font-bold">
                    🎮 GAME
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    RuneForge Arena
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Competitive multiplayer battles where you craft powerful runes and outsmart opponents.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">PvP</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Strategy</span>
                  </div>
                </div>
              </div>

              {/* ChronoTales */}
              <div className="group rounded-xl overflow-hidden border-glow-cyan hover:shadow-cyan-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/chronotales-realistic.png"
                    alt="ChronoTales"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--primary))] text-white rounded-full text-xs font-bold">
                    📱 APP
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    ChronoTales
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Interactive storytelling app where your choices shape history across different time periods.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Story</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Choice-Based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[hsl(var(--accent))] text-white rounded-full text-sm font-bold">
            🚀 JOIN THE MOVEMENT
          </div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Build With Us
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Be part of our creative community. Get early access to new apps and games, share feedback, connect with other players, and help shape the future of KaByte Studio.
          </p>
          <Link
            href="/community"
            className="inline-block px-10 py-4 bg-gradient-fun text-white rounded-xl hover:shadow-blue-lg hover-lift transition-all duration-300 font-bold text-lg uppercase"
            style={{fontFamily: 'Orbitron, sans-serif'}}
          >
            Join Beta Community 🎮
          </Link>
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
              <Link href="/#about" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                About
              </Link>
              <Link href="/#projects" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition">
                Apps & Games
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

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
        {/* Enhanced animated background with multiple layers and grid */}
        <div className="absolute inset-0 opacity-20">
          {/* Animated grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 0 0',
            animation: 'grid-flow 20s linear infinite'
          }}></div>

          {/* Floating orbs with glow */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-[hsl(var(--primary))] rounded-full animate-pulse shadow-blue" style={{animation: 'float 6s ease-in-out infinite'}}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-[hsl(var(--secondary))] rounded-full animate-pulse shadow-purple" style={{animation: 'float 8s ease-in-out infinite', animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-cyan" style={{animation: 'float 7s ease-in-out infinite', animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-[hsl(var(--primary))] rounded-full animate-pulse shadow-blue" style={{animation: 'float 9s ease-in-out infinite', animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[hsl(var(--secondary))] rounded-full animate-pulse shadow-purple" style={{animation: 'float 6.5s ease-in-out infinite', animationDelay: '3s'}}></div>
          <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-cyan" style={{animation: 'float 8.5s ease-in-out infinite', animationDelay: '2.5s'}}></div>
        </div>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[hsl(var(--background)/0.5)] to-[hsl(var(--background))]"></div>
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] to-[hsl(var(--secondary)/0.2)] border border-[hsl(var(--primary)/0.5)] rounded-full text-sm font-bold text-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              ⚡ INDIE GAME STUDIO
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] animate-gradient" style={{fontFamily: 'Orbitron, sans-serif'}}>
              KABYTE STUDIO
            </h1>
            <p className="text-2xl md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 700}}>
              Apps & Games That Spark Joy
            </p>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-12 leading-relaxed" style={{fontFamily: 'Inter, sans-serif', fontWeight: 400}}>
              Building innovative apps and immersive games that bring people together. From social experiences to epic adventures, we create digital worlds worth exploring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/flirtdeck"
                className="px-10 py-5 bg-gradient-fun text-white rounded-xl hover:shadow-blue-lg hover-lift transition-all duration-300 font-bold text-lg uppercase relative overflow-hidden group"
                style={{fontFamily: 'Orbitron, sans-serif'}}
              >
                <span className="relative z-10">Try FlirtDeck 💜</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/community"
                className="px-10 py-5 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-xl hover:bg-[hsl(var(--primary))] hover:text-white hover:shadow-blue hover-lift transition-all duration-300 font-bold text-lg uppercase"
                style={{fontFamily: 'Orbitron, sans-serif'}}
              >
                Join Community
              </Link>
            </div>
          </div>

          {/* Featured Project - FlirtDeck */}
          <div id="flirtdeck" className="mb-20">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[hsl(var(--secondary)/0.2)] to-[hsl(var(--primary)/0.2)] border border-[hsl(var(--secondary)/0.5)] rounded-full text-sm font-bold text-[hsl(var(--secondary))] mb-4" style={{fontFamily: 'Orbitron, sans-serif'}}>
                ✨ FEATURED PROJECT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Experience FlirtDeck
              </h2>
            </div>
            <Link href="/flirtdeck" className="block group">
              <div className="relative rounded-2xl overflow-hidden border-glow-purple hover:scale-[1.02] hover-lift transition-all duration-300 shadow-purple-lg">
                <Image
                  src="/generated/flirtdeck-hero-realistic.png"
                  alt="FlirtDeck - The TCG Dating App"
                  width={1200}
                  height={600}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.3)] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
                  <h3 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    FlirtDeck 💜
                  </h3>
                  <p className="text-xl md:text-2xl mb-6 text-[hsl(var(--foreground))] font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>
                    Dating Meets Trading Cards
                  </p>
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-fun text-white rounded-xl font-bold uppercase text-sm md:text-base shadow-purple-lg group-hover:shadow-purple transition-all duration-300">
                    <span>🎮 Play Now</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Fun Stats Section */}
          <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  4+
                </div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-semibold uppercase tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
                  Games in Development
                </div>
              </div>
            </div>
            <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--secondary))] transition-all duration-300 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--secondary)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  1K+
                </div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-semibold uppercase tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
                  Beta Testers
                </div>
              </div>
            </div>
            <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-all duration-300 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  24/7
                </div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-semibold uppercase tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
                  Community Active
                </div>
              </div>
            </div>
            <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  100%
                </div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-semibold uppercase tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
                  Fun Guaranteed
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div id="projects">
            <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--foreground))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
              More Apps & Games Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hollow Knight Inspired */}
              <div className="group rounded-xl overflow-hidden border-glow hover:shadow-blue-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">🦋</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--accent))] text-white rounded-full text-xs font-bold">
                    🎮 METROIDVANIA
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    Silkbound Depths
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Explore a hauntingly beautiful underground kingdom. Master precise combat and unlock ancient secrets in this Metroidvania-style adventure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Exploration</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Combat</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Atmospheric</span>
                  </div>
                </div>
              </div>

              {/* Stardew Valley Inspired */}
              <div className="group rounded-xl overflow-hidden border-glow-purple hover:shadow-purple-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">🌾</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--secondary))] text-white rounded-full text-xs font-bold">
                    🎮 FARMING SIM
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    Harvest Haven
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Build your dream farm, befriend villagers, and discover mysteries. A cozy life sim with endless possibilities and seasonal surprises.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Farming</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Social</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Relaxing</span>
                  </div>
                </div>
              </div>

              {/* Among Us / Social Deduction Inspired */}
              <div className="group rounded-xl overflow-hidden border-glow-cyan hover:shadow-cyan-lg hover-lift transition-all duration-300 bg-[hsl(var(--card))]">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-900 via-purple-900 to-blue-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">🕵️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--primary))] text-white rounded-full text-xs font-bold">
                    🎮 SOCIAL PARTY
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    Suspect Squad
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                    Work together or deceive your friends in this thrilling social deduction game. Can you find the imposters before it's too late?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Multiplayer</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Deduction</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--muted))] rounded">Party</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden border-t border-[hsl(var(--border))]">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--card))] via-[hsl(var(--background))] to-[hsl(var(--card))] opacity-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-32 h-32 bg-[hsl(var(--primary))] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-[hsl(var(--secondary))] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-[hsl(var(--accent)/0.2)] to-[hsl(var(--primary)/0.2)] border border-[hsl(var(--accent)/0.5)] rounded-full text-sm font-bold text-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            <span>🚀</span>
            <span>JOIN THE MOVEMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
            Build The Future With Us
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
            Be part of our creative community. Get early access to new apps and games, share feedback, connect with other players, and help shape the future of KaByte Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/community"
              className="relative group px-10 py-5 bg-gradient-fun text-white rounded-xl hover:shadow-blue-lg hover-lift transition-all duration-300 font-bold text-lg uppercase overflow-hidden"
              style={{fontFamily: 'Orbitron, sans-serif'}}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Join Beta Community</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform">🎮</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/#projects"
              className="px-10 py-5 border-2 border-[hsl(var(--muted-foreground)/0.3)] text-[hsl(var(--muted-foreground))] rounded-xl hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-300 font-bold text-lg uppercase"
              style={{fontFamily: 'Orbitron, sans-serif'}}
            >
              Explore Games
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[hsl(var(--border))] bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--card)/0.3)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/generated/kabyte-logo.png"
                alt="KaByte Studio"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" style={{fontFamily: 'Orbitron, sans-serif'}}>
                  KaByte Studio
                </div>
                <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Spirit of Play, The Byte of Innovation
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/#about" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
                About
              </Link>
              <Link href="/#projects" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
                Apps & Games
              </Link>
              <Link href="/flirtdeck" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
                FlirtDeck
              </Link>
              <Link href="/community" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
                Community
              </Link>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-full border-2 border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:shadow-blue transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))] hover:shadow-purple transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] hover:shadow-cyan transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <p style={{fontFamily: 'Inter, sans-serif'}}>&copy; 2025 KaByte Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[hsl(var(--primary))] transition" style={{fontFamily: 'Inter, sans-serif'}}>Privacy</a>
              <a href="#" className="hover:text-[hsl(var(--primary))] transition" style={{fontFamily: 'Inter, sans-serif'}}>Terms</a>
              <a href="#" className="hover:text-[hsl(var(--primary))] transition" style={{fontFamily: 'Inter, sans-serif'}}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Zap, Users, Shield } from 'lucide-react'

export default function PageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <span className="text-xl font-semibold text-foreground">
              Application
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Welcome to Your Application
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A modern, professional platform built with cutting-edge technology.
              Streamline your workflow and achieve more with our powerful tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fast Performance</CardTitle>
                <CardDescription>
                  Lightning-fast load times and smooth interactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Tech</CardTitle>
                <CardDescription>
                  Built with the latest frameworks and best practices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security and 99.9% uptime
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Work together seamlessly with your team
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">
                Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                100+
              </div>
              <div className="text-sm text-muted-foreground">
                Integrations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the benefits of our platform.
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
              <div>
                <div className="text-base font-semibold">Application</div>
                <div className="text-xs text-muted-foreground">
                  Professional solutions
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition">
                Features
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
                Contact
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition">
                Privacy
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

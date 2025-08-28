"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, Eye, Menu, X } from "lucide-react"
import PersistentCTA from "@/components/PersistentCTA"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

export default function CentraHomepage() {
  const [email, setEmail] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toast } = useToast()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      })
      return
    }

    // Simulate API call
    try {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to Centra newsletter.",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById("newsletter-section")
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <PersistentCTA />

      <nav
        className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Image
                  src="/centra-wordmark.png"
                  alt="Centra"
                  width={120}
                  height={36}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a
                  href="#"
                  onClick={scrollToNewsletter}
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  Buy Centra
                </a>
                <a
                  href="/team"
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  Meet the Team
                </a>
                <a
                  href="/developers"
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  Developer Hub
                </a>
                <a
                  href="/community"
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  Community
                </a>
                <a
                  href="/faq"
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  FAQs
                </a>
                <a
                  href="/blog"
                  className="text-foreground hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-3 py-2 transition-all duration-200"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToNewsletter}
                className="text-sm bg-transparent hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200"
              >
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  onClick={() => {
                    scrollToNewsletter()
                    setMobileMenuOpen(false)
                  }}
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                >
                  Buy Centra
                </a>
                <a
                  href="/team"
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Meet the Team
                </a>
                <a
                  href="/developers"
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Developer Hub
                </a>
                <a
                  href="/community"
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </a>
                <a
                  href="/faq"
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </a>
                <a
                  href="/blog"
                  className="block px-3 py-2 text-foreground hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative h-[85vh] overflow-hidden" role="banner">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          aria-label="Background video showing AI and cybersecurity technology"
        >
          <source
            src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="/placeholder.mp4?height=1440&width=2560&query=AI artificial intelligence cybersecurity digital protection neural networks data encryption futuristic technology holographic interface"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center text-white max-w-6xl animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/15 transition-all duration-300">
                The Future Beyond Fiat
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 leading-tight tracking-tight">
              A Stable,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-medium animate-gradient">
                Transparent Future
              </span>
              <br />
              Beyond Fiat
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 font-light leading-relaxed max-w-4xl mx-auto">
              Designed to end inflation, corruption, and inequality in money.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={scrollToNewsletter}
                className="bg-white text-black hover:bg-white/90 hover:scale-105 px-10 py-4 text-lg font-medium transition-all duration-300 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg font-medium backdrop-blur-sm bg-transparent transition-all duration-300"
              >
                How Centra Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" id="features-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Core Features</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-10 leading-tight max-w-4xl mx-auto">
              Money should serve people, not control them.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Centra is built on three fundamental principles that ensure financial freedom and equality for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <Card className="border border-border bg-background hover:shadow-xl hover:scale-105 transition-all duration-300 text-center p-10 group">
              <div
                className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <TrendingUp className="h-10 w-10 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl font-medium text-foreground mb-6">Stability</CardTitle>
              <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                Fixed supply, non-inflationary design ensures your money maintains its value over time.
              </CardDescription>
            </Card>

            <Card className="border border-border bg-background hover:shadow-xl hover:scale-105 transition-all duration-300 text-center p-10 group">
              <div
                className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <Eye className="h-10 w-10 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl font-medium text-foreground mb-6">Transparency</CardTitle>
              <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                All transactions are visible and verifiable, eliminating corruption and hidden manipulation.
              </CardDescription>
            </Card>

            <Card className="border border-border bg-background hover:shadow-xl hover:scale-105 transition-all duration-300 text-center p-10 group">
              <div
                className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <Users className="h-10 w-10 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl font-medium text-foreground mb-6">Equality</CardTitle>
              <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                Accessible to everyone, regardless of location, status, or financial background.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/centra-history-timeline.png"
              alt="The History of Money Timeline - From Barter System (10,000 BCE) to Centra (Est 2025)"
              width={800}
              height={2000}
              className="max-w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-medium text-foreground mb-6">The Financial Revolution</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Compare the limitations of traditional fiat currency with Centra's innovative solutions for a better
                financial future.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Fiat Problems Card */}
              <Card className="border border-border bg-background hover:shadow-xl hover:scale-105 transition-all duration-300 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/80 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-foreground">Fiat Currency Problems</h4>
                    <p className="text-muted-foreground">Current system limitations</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Inflation erodes purchasing power over time",
                      description: "Central banks print unlimited money, devaluing your savings",
                    },
                    {
                      title: "Central bank manipulation and control",
                      description: "Monetary policy serves institutions, not people",
                    },
                    {
                      title: "Lack of transparency in monetary policy",
                      description: "Hidden operations and backroom financial deals",
                    },
                    {
                      title: "Unequal access to financial systems",
                      description: "Billions excluded from basic financial services",
                    },
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-3 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium mb-1">{problem.title}</p>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Centra Solutions Card */}
              <Card className="border border-border bg-gradient-to-br from-cyan-50/50 to-blue-50/50 hover:shadow-xl hover:scale-105 transition-all duration-300 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src="/centra-icon.png"
                      alt="Centra"
                      width={56}
                      height={56}
                      className="hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-cyan-600">Centra Solutions</h4>
                    <p className="text-cyan-600/80">Revolutionary improvements</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Fixed supply prevents inflation and devaluation",
                      description: "Your wealth is preserved with mathematical certainty",
                    },
                    {
                      title: "Decentralized governance by the community",
                      description: "Democratic decision-making puts power in people's hands",
                    },
                    {
                      title: "Complete transparency in all transactions",
                      description: "Every operation is publicly verifiable on the blockchain",
                    },
                    {
                      title: "Equal access for everyone, everywhere",
                      description: "No barriers, no discrimination, universal financial inclusion",
                    },
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0" />
                      <div>
                        <p className="text-cyan-600 font-medium mb-1">{solution.title}</p>
                        <p className="text-cyan-600/80 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Simplified call to action */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={scrollToNewsletter}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join the Financial Revolution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-muted/40" id="newsletter-section">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-medium text-foreground mb-6">Subscribe to Centra newsletter</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Get the latest updates on Centra ID, new features, and community news.
          </p>
          <form className="flex gap-6 max-w-lg mx-auto" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <Input
              id="email-input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg border-2 focus:border-cyan-400 transition-colors duration-200"
              required
              aria-describedby="email-description"
            />
            <Button
              type="submit"
              className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 h-14 px-8 text-lg font-medium transition-all duration-300 shadow-lg"
              aria-describedby="email-description"
            >
              Subscribe
            </Button>
          </form>
          <p id="email-description" className="sr-only">
            Subscribe to receive updates about Centra and new features
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-16 px-6" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <Image
              src="/centra-wordmark.png"
              alt="Centra"
              width={200}
              height={60}
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            <div>
              <h4 className="font-medium text-foreground mb-4">Centra ID</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Centra ID links">
                <div>
                  <a
                    href="/centra-id"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Overview
                  </a>
                </div>
                <div>
                  <a
                    href="/privacy"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Privacy
                  </a>
                </div>
                <div>
                  <a
                    href="/security"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Security
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Centra App</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Centra App links">
                <div>
                  <a
                    href="/download"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Download
                  </a>
                </div>
                <div>
                  <a
                    href="/features"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Features
                  </a>
                </div>
                <div>
                  <a
                    href="/support"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Support
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Centracoin</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Centracoin links">
                <div>
                  <a
                    href="/tokenomics"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Tokenomics
                  </a>
                </div>
                <div>
                  <a
                    href="/distribution"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Distribution
                  </a>
                </div>
                <div>
                  <a
                    href="/grants"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Grants
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Developers</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Developers links">
                <div>
                  <a
                    href="/developers"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Documentation
                  </a>
                </div>
                <div>
                  <a
                    href="/api"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    API
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/centra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Company links">
                <div>
                  <a
                    href="/about"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="/blog"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    href="/careers"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Careers
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Legal links">
                <div>
                  <a
                    href="/terms"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Terms
                  </a>
                </div>
                <div>
                  <a
                    href="/privacy"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Privacy
                  </a>
                </div>
                <div>
                  <a
                    href="/cookies"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Cookies
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-muted-foreground mb-4 md:mb-0">© 2024 Centra. All rights reserved.</div>
              <nav className="flex space-x-6 text-sm text-muted-foreground" aria-label="Social media links">
                <a
                  href="https://twitter.com/centra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="Follow us on Twitter"
                >
                  Twitter
                </a>
                <a
                  href="https://discord.gg/centra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="Join our Discord"
                >
                  Discord
                </a>
                <a
                  href="https://github.com/centra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="View our GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/company/centra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="Connect on LinkedIn"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

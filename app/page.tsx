"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Shield, Smartphone, Zap, Users, TrendingUp, Eye } from "lucide-react"
import PersistentCTA from "@/components/PersistentCTA"
import { Input } from "@/components/ui/input"

export default function CentraHomepage() {
  const [email, setEmail] = useState("")

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
              <div className="font-sans text-xl font-semibold text-foreground">
                <a href="/" aria-label="Centra homepage" className="hover:text-cyan-600 transition-colors">
                  Centra
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a
                  href="#"
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
                className="text-sm bg-transparent hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
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
              Centra: A Stable,
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
                className="bg-white text-black hover:bg-white/90 hover:scale-105 px-10 py-4 text-lg font-medium transition-all duration-300 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg font-medium backdrop-blur-sm bg-transparent transition-all duration-300"
              >
                How Centra Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
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
          <div className="text-center mb-20">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Evolution</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-10 leading-tight">
              The History of Money
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From barter systems to Centra - witness the evolution of human exchange and discover why Centra represents
              the next chapter.
            </p>
          </div>

          <div className="relative">
            <div className="space-y-16 mb-20">
              {[
                {
                  era: "10,000 BCE",
                  title: "Barter System",
                  description: "Direct exchange of goods and services without money",
                  quote: "Trade began with simple exchanges of surplus goods.",
                  icon: "🔄",
                },
                {
                  era: "3000 BCE",
                  title: "Precious Metals",
                  description: "Gold and silver became stores of value and mediums of exchange",
                  quote: "Gold became the universal language of value.",
                  icon: "🥇",
                },
                {
                  era: "600 BCE",
                  title: "Coinage",
                  description: "First standardized coins minted in Lydia, enabling easier trade",
                  quote: "Coins revolutionized commerce across civilizations.",
                  icon: "🪙",
                },
                {
                  era: "1000 CE",
                  title: "Paper Money",
                  description: "China introduced paper currency, backed by government authority",
                  quote: "Paper money made large transactions practical.",
                  icon: "💵",
                },
                {
                  era: "1944",
                  title: "Gold Standard",
                  description: "Bretton Woods system established gold-backed international monetary system",
                  quote: "Gold standard provided global monetary stability.",
                  icon: "🏛️",
                },
                {
                  era: "1971",
                  title: "Fiat Currency",
                  description: "Nixon ended gold convertibility, creating modern fiat money system",
                  quote: "Fiat money enabled flexible monetary policy.",
                  icon: "🏦",
                },
                {
                  era: "2009",
                  title: "Cryptocurrency",
                  description: "Bitcoin introduced decentralized digital currency and blockchain technology",
                  quote: "Crypto challenged traditional monetary systems.",
                  icon: "₿",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="max-w-lg">
                    <Card className="border border-border bg-background hover:shadow-2xl hover:scale-105 transition-all duration-500 p-8 text-center group">
                      <div className="mb-6">
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 shadow-sm">
                            {item.era}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mb-6 leading-relaxed text-muted-foreground text-lg">{item.description}</p>
                      <blockquote className="text-base italic border-l-4 border-cyan-400 pl-6 text-muted-foreground bg-cyan-50/50 py-3 rounded-r-lg">
                        "{item.quote}"
                      </blockquote>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-12">
              <div className="text-cyan-400 text-5xl animate-bounce">↓</div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="max-w-3xl">
                <Card className="border-4 border-cyan-400 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 shadow-2xl shadow-cyan-400/40 p-16 text-center relative overflow-hidden hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 animate-shimmer"></div>
                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className="flex items-center justify-center gap-6 mb-6">
                        <span className="text-5xl animate-pulse">🌟</span>
                        <span className="text-xl font-bold px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl">
                          2025 - THE FUTURE
                        </span>
                      </div>
                      <h3 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
                        CENTRA
                      </h3>
                      <div className="text-2xl font-semibold text-cyan-600 mb-6">The Next Evolution</div>
                    </div>
                    <p className="mb-8 leading-relaxed text-xl text-cyan-600 font-medium">
                      Building on cryptocurrency's foundation, Centra delivers stable, transparent, and equal money
                      designed to serve humanity. The natural progression from crypto to true financial freedom.
                    </p>
                    <blockquote className="text-xl italic border-l-4 border-cyan-400 pl-8 text-cyan-700 font-semibold bg-white/50 py-4 rounded-r-xl">
                      "Centra completes money's evolution toward true equality and freedom."
                    </blockquote>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-32 grid md:grid-cols-2 gap-16">
            <Card className="p-10 border-red-200 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-semibold text-red-700 mb-8 flex items-center gap-4">
                <span className="text-2xl">🏦</span> Fiat Currency Problems
              </h3>
              <ul className="space-y-6 text-red-600">
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span>Inflation erodes purchasing power over time</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span>Central bank manipulation and control</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span>Lack of transparency in monetary policy</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span>Unequal access to financial systems</span>
                </li>
              </ul>
            </Card>

            <Card className="p-10 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-semibold text-cyan-700 mb-8 flex items-center gap-4">
                <span className="text-2xl">🌟</span> Centra Solutions
              </h3>
              <ul className="space-y-6 text-cyan-600">
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-cyan-500 mt-1 text-xl">✓</span>
                  <span>Fixed supply prevents inflation and devaluation</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-cyan-500 mt-1 text-xl">✓</span>
                  <span>Decentralized governance by the community</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-cyan-500 mt-1 text-xl">✓</span>
                  <span>Complete transparency in all transactions</span>
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="text-cyan-500 mt-1 text-xl">✓</span>
                  <span>Equal access for everyone, everywhere</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Products</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              The Centra Ecosystem
            </h2>
          </div>
          <div className="grid gap-10">
            <Card className="border border-border bg-background hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-6 p-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-medium text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                      Centra ID
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg mt-2">
                      Your passport to the digital age of AI.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-background hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-6 p-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-medium text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                      Centra App
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg mt-2">
                      The app that puts humans first.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-background hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-6 p-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-medium text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                      Centra Chain
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg mt-2">
                      The blockchain designed for humans.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-background hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-6 p-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-medium text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                      Centracoin
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg mt-2">
                      A token that distributes the upside of AI to everyone.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-12 leading-tight">
            "Money should serve people, not control them."
          </blockquote>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is the founding principle behind Centra - a financial system designed for transparency, stability, and
            equality.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-medium text-foreground mb-6">Quick Links</h3>
            <p className="text-xl text-muted-foreground">Everything you need to get started with Centra</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Button
              size="lg"
              className="h-20 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Buy Centra
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 text-lg font-medium bg-transparent hover:bg-cyan-50 hover:border-cyan-300 hover:scale-105 transition-all duration-300"
              onClick={() => (window.location.href = "/team")}
            >
              Meet the Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 text-lg font-medium bg-transparent hover:bg-cyan-50 hover:border-cyan-300 hover:scale-105 transition-all duration-300"
              onClick={() => (window.location.href = "/developers")}
            >
              Developer Hub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 text-lg font-medium bg-transparent hover:bg-cyan-50 hover:border-cyan-300 hover:scale-105 transition-all duration-300"
              onClick={() => (window.location.href = "/community")}
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section - Removed the global network animation */}
      <section className="bg-background text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Join millions of humans in 160 countries with Centra.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Centra is being built so every human benefits from the age of AI. Secure your spot and be part of the
              financial revolution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">15M+</div>
              <div className="text-sm text-muted-foreground">Verified humans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">160</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">$2.4B</div>
              <div className="text-sm text-muted-foreground">Total volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-medium text-foreground mb-6">Subscribe to Centra newsletter</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Get the latest updates on Centra ID, new features, and community news.
          </p>
          <form
            className="flex gap-6 max-w-lg mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            <div>
              <h4 className="font-medium text-foreground mb-4">Centra ID</h4>
              <nav className="space-y-2 text-sm text-muted-foreground" aria-label="Centra ID links">
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Overview
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Privacy
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Download
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Features
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Tokenomics
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Distribution
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Documentation
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    API
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Terms
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  >
                    Privacy
                  </a>
                </div>
                <div>
                  <a
                    href="#"
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
                  href="#"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="Follow us on Twitter"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="Join our Discord"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                  aria-label="View our GitHub"
                >
                  GitHub
                </a>
                <a
                  href="#"
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

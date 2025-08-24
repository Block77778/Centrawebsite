"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="font-sans text-xl font-semibold text-foreground">Centra</div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="/" className="text-foreground hover:text-muted-foreground">
                  Home
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground">
                  Buy Centra
                </a>
                <a href="/team" className="text-foreground hover:text-muted-foreground font-medium">
                  Meet the Team
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground">
                  Developer Hub
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground">
                  Community
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground">
                  FAQs
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground">
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="text-sm bg-transparent">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">Transparency & Trust</p>
            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Meet the Team & Open Source Contributors
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building the future of money with transparency, expertise, and community collaboration.
            </p>
          </div>

          {/* Leadership Profiles */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-border bg-background hover:shadow-sm transition-shadow text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                  AS
                </div>
                <CardTitle className="text-xl font-medium text-foreground mb-2">Alex Smith</CardTitle>
                <p className="text-muted-foreground mb-4">CEO & Co-Founder</p>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Former Goldman Sachs VP with 15 years in fintech. Led digital transformation initiatives at three
                  Fortune 500 companies.
                </CardDescription>
                <Button variant="outline" size="sm" className="bg-transparent">
                  LinkedIn Profile
                </Button>
              </Card>

              <Card className="border border-border bg-background hover:shadow-sm transition-shadow text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                  MJ
                </div>
                <CardTitle className="text-xl font-medium text-foreground mb-2">Maria Johnson</CardTitle>
                <p className="text-muted-foreground mb-4">CTO & Co-Founder</p>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Former Ethereum core developer. PhD in Cryptography from MIT. Built scalable blockchain infrastructure
                  for 10M+ users.
                </CardDescription>
                <Button variant="outline" size="sm" className="bg-transparent">
                  LinkedIn Profile
                </Button>
              </Card>

              <Card className="border border-border bg-background hover:shadow-sm transition-shadow text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                  DL
                </div>
                <CardTitle className="text-xl font-medium text-foreground mb-2">David Lee</CardTitle>
                <p className="text-muted-foreground mb-4">Head of Economics</p>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Former Federal Reserve economist. Published researcher on monetary policy and digital currencies.
                  Harvard Economics PhD.
                </CardDescription>
                <Button variant="outline" size="sm" className="bg-transparent">
                  LinkedIn Profile
                </Button>
              </Card>
            </div>
          </div>

          {/* Advisors & Partners */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Advisors & Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">A16Z</span>
                </div>
                <p className="text-sm text-muted-foreground">Strategic Investor</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">CB</span>
                </div>
                <p className="text-sm text-muted-foreground">Coinbase Ventures</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">P</span>
                </div>
                <p className="text-sm text-muted-foreground">Paradigm</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">SV</span>
                </div>
                <p className="text-sm text-muted-foreground">Sequoia Ventures</p>
              </div>
            </div>
          </div>

          {/* Open Source Contributor Wall */}
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Open Source Contributors</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { username: "cryptodev", commits: 247 },
                { username: "blockbuilder", commits: 189 },
                { username: "defimaster", commits: 156 },
                { username: "chaincode", commits: 134 },
                { username: "webthree", commits: 98 },
                { username: "smartdev", commits: 87 },
                { username: "noderunner", commits: 76 },
                { username: "gasoptim", commits: 65 },
                { username: "soliditydev", commits: 54 },
                { username: "rustchain", commits: 43 },
                { username: "goblock", commits: 32 },
                { username: "pythonweb3", commits: 21 },
              ].map((contributor, index) => (
                <Card
                  key={index}
                  className="border border-border bg-background hover:shadow-sm transition-shadow text-center p-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-sm font-medium">
                    {contributor.username.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">@{contributor.username}</p>
                  <p className="text-xs text-muted-foreground">{contributor.commits} commits</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

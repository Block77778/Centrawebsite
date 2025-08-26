"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  Bell,
  Mail,
  Home,
  Compass,
  Settings,
  Plus,
  MoreHorizontal,
  Menu,
  X,
  Users,
  TrendingUp,
  BookOpen,
  Code,
} from "lucide-react"
import PersistentCTA from "../../components/PersistentCTA"
import { useState } from "react"

export default function CentraSocialPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <PersistentCTA />

      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              Centra Social
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                href="/team"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Team
              </Link>
              <Link
                href="/developers"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                Developers
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                FAQ
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search Centra Social..."
                  className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Home className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Compass className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/user-profile-illustration.png" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border bg-card">
              <nav className="py-4 space-y-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  href="/team"
                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  Team
                </Link>
                <Link
                  href="/developers"
                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Code className="w-4 h-4" />
                  Developers
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  Blog
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <TrendingUp className="w-4 h-4" />
                  FAQ
                </Link>
                <div className="px-4 py-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search Centra Social..."
                      className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground">Quick Links</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  <Home className="w-4 h-4 mr-3" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  <Compass className="w-4 h-4 mr-3" />
                  Explore
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  <Bell className="w-4 h-4 mr-3" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground">Suggested Users</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Crypto Mike", handle: "@cryptomike", avatar: "/crypto-user.png" },
                  { name: "DeFi Sarah", handle: "@defisarah", avatar: "/defi-user.png" },
                  { name: "Blockchain Dev", handle: "@blockdev", avatar: "/developer-working.png" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.handle}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Follow
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3">
            {/* Create Post */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/user-profile-illustration.png" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      placeholder="What's on your mind about Centra?"
                      className="bg-muted border-0 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Plus className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6 border-b border-border">
              {["All", "Discussion", "Ideas", "Questions", "Announcements"].map((tab, index) => (
                <button
                  key={index}
                  className={`pb-2 px-1 transition-colors ${
                    index === 0
                      ? "border-b-2 border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {[
                {
                  user: "Alex Chen",
                  handle: "@alexchen",
                  avatar: "/asian-male-developer.png",
                  level: "Core Contributor",
                  time: "2h",
                  title: "Thoughts on Centra's inflation-proof mechanism",
                  content:
                    "I've been analyzing the fixed supply model and its implications for long-term stability. The mathematical approach seems sound, but I'd love to hear thoughts on potential edge cases...",
                  image: "/cryptocurrency-chart-analysis.png",
                  likes: 24,
                  comments: 8,
                  shares: 3,
                  tags: ["Economics", "Discussion"],
                },
                {
                  user: "Sarah Kim",
                  handle: "@sarahkim",
                  avatar: "/asian-female-designer.png",
                  level: "Community Member",
                  time: "5h",
                  title: "Feature Request: Mobile wallet improvements",
                  content:
                    "The current mobile experience could use some UX improvements. Here are some mockups I created for better transaction flow...",
                  image: "/mobile-wallet-ui-mockup.png",
                  likes: 18,
                  comments: 12,
                  shares: 5,
                  tags: ["Feature Request", "UX"],
                },
                {
                  user: "David Rodriguez",
                  handle: "@daviddev",
                  avatar: "/hispanic-male-developer.png",
                  level: "Developer",
                  time: "1d",
                  title: "Built a Centra price tracker - open source",
                  content:
                    "Just finished building a real-time price tracking dashboard for Centra. Code is available on GitHub, would love feedback and contributions!",
                  likes: 31,
                  comments: 15,
                  shares: 8,
                  tags: ["Project", "Open Source"],
                },
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{post.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{post.user}</h3>
                            <span className="text-sm text-muted-foreground">{post.handle}</span>
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                              {post.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <h4 className="text-lg font-medium text-foreground mb-2">{post.title}</h4>
                    <p className="text-muted-foreground mb-4">{post.content}</p>

                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post content"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <Share2 className="w-4 h-4 mr-1" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Centra Social Stats</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "12,847", icon: "👥", color: "text-primary" },
              { label: "Posts This Month", value: "1,234", icon: "💬", color: "text-secondary" },
              { label: "Countries", value: "89", icon: "🌍", color: "text-primary" },
              { label: "Contributors", value: "456", icon: "🛠️", color: "text-secondary" },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

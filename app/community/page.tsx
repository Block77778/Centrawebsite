import Link from "next/link"
import PersistentCTA from "../../components/PersistentCTA"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PersistentCTA />

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Centra
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-gray-900">
                Team
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900">
                Developers
              </Link>
              <Link href="/community" className="text-gray-900 font-medium">
                Community
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Centra <span className="text-cyan-600">Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of people building the future of transparent, stable money. Share ideas, discuss economics,
            and help shape Centra's development.
          </p>
          <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
            Join Discussion
          </button>
        </div>
      </section>

      {/* Discussion Feed */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Community Feed</h2>
            <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              New Post
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            {["All", "Discussion", "Ideas", "Questions", "Announcements"].map((tab, index) => (
              <button
                key={index}
                className={`pb-2 px-1 ${index === 0 ? "border-b-2 border-cyan-600 text-cyan-600" : "text-gray-600 hover:text-gray-900"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {[
              {
                user: "Alex Chen",
                avatar: "/diverse-user-avatars.png",
                level: "Core Contributor",
                time: "2 hours ago",
                title: "Thoughts on Centra's inflation-proof mechanism",
                content:
                  "I've been analyzing the fixed supply model and its implications for long-term stability. The mathematical approach seems sound, but I'd love to hear thoughts on potential edge cases...",
                votes: 24,
                comments: 8,
                tags: ["Economics", "Discussion"],
              },
              {
                user: "Sarah Kim",
                avatar: "/diverse-female-avatar.png",
                level: "Community Member",
                time: "5 hours ago",
                title: "Feature Request: Mobile wallet improvements",
                content:
                  "The current mobile experience could use some UX improvements. Here are some mockups I created for better transaction flow...",
                votes: 18,
                comments: 12,
                tags: ["Feature Request", "UX"],
              },
              {
                user: "David Rodriguez",
                avatar: "/male-avatar.png",
                level: "Developer",
                time: "1 day ago",
                title: "Built a Centra price tracker - open source",
                content:
                  "Just finished building a real-time price tracking dashboard for Centra. Code is available on GitHub, would love feedback and contributions!",
                votes: 31,
                comments: 15,
                tags: ["Project", "Open Source"],
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <img src={post.avatar || "/placeholder.svg"} alt={post.user} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{post.user}</h3>
                      <span className="text-sm text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">{post.level}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center gap-4 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-cyan-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        {post.votes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-cyan-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        {post.comments} comments
                      </button>
                      <button className="hover:text-cyan-600">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Stats</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "12,847", icon: "👥" },
              { label: "Posts This Month", value: "1,234", icon: "💬" },
              { label: "Countries", value: "89", icon: "🌍" },
              { label: "Contributors", value: "456", icon: "🛠️" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

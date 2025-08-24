import Link from "next/link"
import PersistentCTA from "../../components/PersistentCTA"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/community" className="text-gray-600 hover:text-gray-900">
                Community
              </Link>
              <Link href="/blog" className="text-gray-900 font-medium">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Centra <span className="text-cyan-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thought leadership on economics, technology, policy, and the future of money. Stay informed with the latest
            insights from our team and community.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 justify-center">
            {["All", "Economy", "Technology", "Policy", "Community"].map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  index === 0 ? "bg-cyan-600 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-cyan-600 font-medium text-sm">FEATURED ARTICLE</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  The End of Inflation: How Fixed Supply Changes Everything
                </h2>
                <p className="text-gray-600 mb-6">
                  Exploring the mathematical certainty of Centra's anti-inflationary design and its implications for
                  global economic stability.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <img src="/author-avatar.png" alt="Author" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-medium text-gray-900">Dr. Elena Vasquez</div>
                    <div className="text-sm text-gray-500">Chief Economist • 5 min read</div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors inline-block"
                >
                  Read Article
                </Link>
              </div>
              <div>
                <img src="/economic-chart-inflation.png" alt="Featured article" className="w-full rounded-xl" />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Centra vs Traditional Banking: A Technical Comparison",
                excerpt: "Deep dive into the architectural differences between Centra and legacy financial systems.",
                author: "Marcus Chen",
                date: "3 days ago",
                category: "Technology",
                readTime: "8 min read",
                image: "/blockchain-network.png",
              },
              {
                title: "Policy Implications of Transparent Money",
                excerpt: "How complete transaction transparency could reshape government fiscal policy and taxation.",
                author: "Sarah Johnson",
                date: "1 week ago",
                category: "Policy",
                readTime: "6 min read",
                image: "/government-policy-abstract.png",
              },
              {
                title: "Community Spotlight: Building on Centra",
                excerpt:
                  "Meet the developers and entrepreneurs creating innovative applications on the Centra network.",
                author: "Alex Rivera",
                date: "1 week ago",
                category: "Community",
                readTime: "4 min read",
                image: "/developer-community.png",
              },
              {
                title: "The Psychology of Money: Why Stability Matters",
                excerpt:
                  "Behavioral economics research on how monetary stability affects decision-making and well-being.",
                author: "Dr. Lisa Park",
                date: "2 weeks ago",
                category: "Economy",
                readTime: "7 min read",
                image: "/psychology-of-money.png",
              },
              {
                title: "Centra's Environmental Impact: A Sustainability Analysis",
                excerpt: "Comprehensive study of Centra's energy consumption compared to traditional payment systems.",
                author: "Green Tech Team",
                date: "2 weeks ago",
                category: "Technology",
                readTime: "5 min read",
                image: "/green-technology.png",
              },
              {
                title: "Global Adoption Patterns: Centra Around the World",
                excerpt: "Analysis of how different regions are adopting Centra and the cultural factors at play.",
                author: "Research Team",
                date: "3 weeks ago",
                category: "Economy",
                readTime: "9 min read",
                image: "/world-map-data.png",
              },
            ].map((article, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        article.category === "Economy"
                          ? "bg-green-100 text-green-800"
                          : article.category === "Technology"
                            ? "bg-blue-100 text-blue-800"
                            : article.category === "Policy"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{article.author}</span>
                      <span className="mx-1">•</span>
                      <span>{article.date}</span>
                    </div>
                    <Link href="#" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on economics, technology, and the future of money delivered to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

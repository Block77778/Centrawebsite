import Link from "next/link"
import PersistentCTA from "../../components/PersistentCTA"

export default function DevelopersPage() {
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
              <Link href="/developers" className="text-gray-900 font-medium">
                Developers
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Centra <span className="text-cyan-600">Developer Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build the future of money with Centra's powerful APIs, SDKs, and developer tools. Join our community of
            developers creating transparent, stable financial solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">API Documentation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">REST API</h3>
              <p className="text-gray-600 mb-6">
                Simple HTTP endpoints for wallet operations, transactions, and account management.
              </p>
              <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                View REST Docs →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GraphQL API</h3>
              <p className="text-gray-600 mb-6">
                Flexible query language for efficient data fetching and real-time subscriptions.
              </p>
              <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                View GraphQL Docs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">SDK Downloads</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Python SDK", icon: "🐍", description: "Full-featured Python library for Centra integration" },
              {
                name: "JavaScript SDK",
                icon: "⚡",
                description: "Lightweight JS/TS SDK for web and Node.js applications",
              },
              { name: "Rust SDK", icon: "🦀", description: "High-performance Rust crate for system-level integration" },
            ].map((sdk, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{sdk.name}</h3>
                <p className="text-gray-600 mb-6">{sdk.description}</p>
                <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects & Tutorials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Example Projects & Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Simple Wallet App", difficulty: "Beginner", time: "30 min" },
              { title: "Payment Gateway Integration", difficulty: "Intermediate", time: "2 hours" },
              { title: "DeFi Trading Bot", difficulty: "Advanced", time: "4 hours" },
              { title: "Multi-Signature Wallet", difficulty: "Advanced", time: "3 hours" },
              { title: "Transaction Analytics Dashboard", difficulty: "Intermediate", time: "2.5 hours" },
              { title: "Mobile Wallet with React Native", difficulty: "Intermediate", time: "3 hours" },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex gap-2 mb-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : project.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {project.difficulty}
                  </span>
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{project.time}</span>
                </div>
                <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                  Start Tutorial →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub & Contribution */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Open Source & Contributions</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Centra is built in the open. Contribute to our codebase, report issues, and help shape the future of money.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="#" className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              View on GitHub
            </Link>
            <Link
              href="#"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contribution Guidelines
            </Link>
          </div>

          {/* Developer Newsfeed */}
          <div className="bg-gray-800 rounded-xl p-8 text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Developer Newsfeed</h3>
            <div className="space-y-6">
              {[
                { title: "Centra Hackathon 2025 - $100K in Prizes", date: "2 days ago", type: "Hackathon" },
                { title: "New GraphQL Subscriptions API Released", date: "1 week ago", type: "Update" },
                { title: "Developer Grant Program - Apply Now", date: "2 weeks ago", type: "Grant" },
                { title: "Rust SDK v2.0 Beta Available", date: "3 weeks ago", type: "Update" },
              ].map((news, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-white">{news.title}</h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        news.type === "Hackathon"
                          ? "bg-purple-100 text-purple-800"
                          : news.type === "Grant"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {news.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{news.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"
import { useState } from "react"
import Link from "next/link"
import PersistentCTA from "../../components/PersistentCTA"

export default function FAQPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const faqSections = {
    general: [
      {
        question: "What is Centra?",
        answer:
          "Centra is a revolutionary digital currency designed to end inflation, corruption, and inequality in money. Unlike traditional fiat currencies, Centra has a fixed supply and complete transparency, making it a stable and trustworthy medium of exchange.",
      },
      {
        question: "Why is Centra different from other cryptocurrencies?",
        answer:
          "Centra focuses on stability and transparency rather than speculation. It has a fixed supply to prevent inflation, all transactions are publicly visible to ensure transparency, and it's designed to be accessible to everyone regardless of technical knowledge.",
      },
      {
        question: "How does Centra solve inflation?",
        answer:
          "Centra has a mathematically fixed supply that cannot be increased, unlike fiat currencies where central banks can print more money. This fixed supply ensures that Centra cannot be devalued through inflation.",
      },
    ],
    security: [
      {
        question: "Is Centra safe to use?",
        answer:
          "Yes, Centra uses advanced cryptographic security and blockchain technology to ensure all transactions are secure and immutable. The network is decentralized, making it resistant to single points of failure.",
      },
      {
        question: "How is Centra stored?",
        answer:
          "Centra can be stored in digital wallets, which can be software-based (on your phone or computer) or hardware-based (physical devices). You control your private keys, giving you complete ownership of your funds.",
      },
      {
        question: "What happens if I lose my wallet?",
        answer:
          "If you lose access to your wallet, you can recover it using your backup seed phrase. This is why it's crucial to securely store your seed phrase when you first create your wallet.",
      },
    ],
    economy: [
      {
        question: "Will Centra's value increase over time?",
        answer:
          "While we cannot predict future prices, Centra's fixed supply and growing adoption could potentially lead to value appreciation. However, Centra is designed primarily as a stable medium of exchange, not as a speculative investment.",
      },
      {
        question: "Is there inflation with Centra?",
        answer:
          "No, Centra is designed to be inflation-proof. The total supply is fixed and cannot be increased, eliminating the possibility of monetary inflation that plagues traditional fiat currencies.",
      },
      {
        question: "How does Centra maintain price stability?",
        answer:
          "Centra's stability comes from its fixed supply and transparent nature. As adoption grows and the economy matures, natural market forces help stabilize the price without the need for central bank intervention.",
      },
    ],
    developers: [
      {
        question: "How can I build on Centra?",
        answer:
          "Developers can build on Centra using our comprehensive APIs, SDKs, and developer tools. We provide documentation, tutorials, and example projects to help you get started building applications that integrate with Centra.",
      },
      {
        question: "What programming languages are supported?",
        answer:
          "We provide SDKs for Python, JavaScript/TypeScript, and Rust. Our REST and GraphQL APIs can be used with any programming language that supports HTTP requests.",
      },
      {
        question: "Is there developer support available?",
        answer:
          "Yes, we have an active developer community, comprehensive documentation, and direct support channels. You can also participate in our developer grants and hackathon programs.",
      },
    ],
    community: [
      {
        question: "How do I contribute to Centra?",
        answer:
          "There are many ways to contribute: you can participate in our open-source development, join community discussions, create educational content, or help with translations. Visit our community page to learn more.",
      },
      {
        question: "Where can I discuss Centra with others?",
        answer:
          "Join our community platform where thousands of users discuss economics, share ideas, and collaborate on projects. You can also follow us on social media for updates and announcements.",
      },
      {
        question: "How can I stay updated on Centra's development?",
        answer:
          "Subscribe to our newsletter, follow our blog, join our community discussions, and check our GitHub repository for the latest development updates and releases.",
      },
    ],
  }

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
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-900 font-medium">
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
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Centra, its technology, economics, and how you can get involved.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {Object.entries(faqSections).map(([sectionKey, questions]) => (
              <div key={sectionKey} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <h2 className="text-2xl font-bold text-gray-900 capitalize">
                    {sectionKey === "general"
                      ? "General Questions"
                      : sectionKey === "security"
                        ? "Security & Storage"
                        : sectionKey === "economy"
                          ? "Economics & Value"
                          : sectionKey === "developers"
                            ? "For Developers"
                            : "Community & Contribution"}
                  </h2>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${openSection === sectionKey ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === sectionKey && (
                  <div className="px-8 py-6 space-y-6">
                    {questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our community and support team are here to help.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/community"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Join Community
            </Link>
            <Link
              href="#"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

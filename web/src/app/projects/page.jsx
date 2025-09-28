import { ArrowUpRight, ArrowRight, ExternalLink, Globe, Users, Zap } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 sm:px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-inter font-bold text-xl text-[#0A0F1C]">
            <a href="/">BeyondScaling</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Home
            </a>
            <a href="/about" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              About
            </a>
            <a href="/projects" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
              Projects
            </a>
            <a href="/services" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Services
            </a>
            <a href="/partnerships" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Partnerships
            </a>
            <a href="/blog" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Blog
            </a>
            <a href="/contact" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 flex items-center gap-2"
          >
            Book Strategy Call
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section - White Background */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-[#0A0F1C] mb-6">
              Building Beyond the Ordinary
            </h1>
            <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8 max-w-2xl mx-auto">
              A portfolio of ventures that bridge finance, community, and human growth—each designed to ship, scale, and sustain.
            </p>
            <div className="w-24 h-1 bg-[#008B8B] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Senti Project - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#008B8B] font-inter font-medium text-sm mb-6">
                <Zap size={16} />
                Active Project
              </div>
              <h2 className="font-manrope font-bold text-4xl text-white mb-6">Senti</h2>
              <p className="font-inter text-xl text-white/80 leading-relaxed mb-8">
                A smart financial OS bridging crypto, fiat, and AI—helping people save, spend, and grow wealth with real-world utility.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Unified Financial Interface:</strong> One platform for traditional banking, crypto transactions, and AI-powered financial insights.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Real-World Utility:</strong> Focus on practical applications that solve everyday financial challenges, not speculative trading.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Smart Automation:</strong> AI-driven savings, spending optimization, and wealth-building strategies that adapt to user behavior.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2">
                  Learn More
                  <ExternalLink size={16} />
                </button>
                <button className="border border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                  Join Waitlist
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#008B8B] to-[#0A0F1C] rounded-2xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">Senti</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#008B8B] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AptBlack Project - White Background */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 text-[#D4AF37] font-inter font-medium text-sm mb-6">
                <Users size={16} />
                Active Community
              </div>
              <h2 className="font-manrope font-bold text-4xl text-[#0A0F1C] mb-6">AptBlack</h2>
              <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
                A community of Black builders in Web3—equipping young talent, connecting businesses, and expanding global opportunities. AptBlack is more than a network; it's an identity.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">Builder Development:</strong> Educational programs, mentorship, and resources to help underrepresented builders thrive in Web3.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">Business Connections:</strong> Bridge between traditional businesses and Web3 opportunities, creating pathways for economic growth.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">Global Network:</strong> Expanding opportunities beyond borders, connecting talent with international projects and partnerships.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#D4AF37] hover:bg-[#008B8B] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2">
                  Visit Community
                  <ExternalLink size={16} />
                </button>
                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                  Join Network
                </button>
              </div>
            </div>
            <div className="relative lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37] to-[#0A0F1C] rounded-2xl flex items-center justify-center">
                <div className="text-white text-5xl font-bold">AptBlack</div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#008B8B] rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#D4AF37] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* GoGet.Fit Project - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#008B8B] font-inter font-medium text-sm mb-6">
                <Globe size={16} />
                Live Platform
              </div>
              <h2 className="font-manrope font-bold text-4xl text-white mb-6">GoGet.Fit</h2>
              <p className="font-inter text-xl text-white/80 leading-relaxed mb-8">
                Habit-formation tech for K-12 and healthcare—turning active living into sustainable practice through schools and providers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Educational Integration:</strong> Seamless integration with K-12 curricula and healthcare programs to make fitness accessible and engaging.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Habit Psychology:</strong> Evidence-based approach to building lasting habits through progressive challenges and community support.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-white/70">
                    <strong className="text-white">Provider Network:</strong> Working with schools and healthcare providers to create systematic approaches to wellness.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2">
                  Visit Platform
                  <ExternalLink size={16} />
                </button>
                <button className="border border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fgoget.fit%2F&full_page=true&width=1024&max_height=2048&quality=80"
                  alt="GoGet.Fit platform interface showing habit formation features"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#008B8B] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Silverline Project - White Background */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 text-gray-500 font-inter font-medium text-sm mb-6">
                <ArrowRight size={16} />
                Past Project
              </div>
              <h2 className="font-manrope font-bold text-4xl text-[#0A0F1C] mb-6">
                Silverline <span className="text-2xl font-inter text-[#0A0F1C]/50">(Archive)</span>
              </h2>
              <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
                A past project focused on investing in real-world assets—blending AI technology with financial markets to create a forward-looking fund model.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">Real-World Assets:</strong> Focused on tokenizing and creating liquid markets for traditionally illiquid assets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">AI Integration:</strong> Leveraged machine learning for market analysis and investment decision support systems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-[#0A0F1C]/70">
                    <strong className="text-[#0A0F1C]">Fund Innovation:</strong> Explored new models for democratizing access to alternative investment opportunities.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="font-inter text-[#0A0F1C]/60 text-sm leading-relaxed">
                  <strong className="text-[#0A0F1C]">Key Learnings:</strong> This project provided valuable insights into the intersection of traditional finance and emerging technology, informing the approach taken in current ventures like Senti.
                </p>
              </div>
            </div>
            <div className="relative lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-80">Silverline</div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gray-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-white mb-6">Interested in Collaborating?</h2>
          <p className="font-inter text-xl text-white/80 leading-relaxed mb-8">
            Whether you're an investor, potential partner, or fellow builder, I'm always interested in connecting with people who think beyond the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partnerships"
              className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              Partner With Me
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>
            <a
              href="/services"
              className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0F1C] px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 text-center"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Dark Background */}
      <footer className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <div className="font-inter font-bold text-2xl text-white mb-4">BeyondScaling</div>
              <p className="font-inter text-white/70 leading-relaxed">
                Founder & builder helping Web3 and forward-thinking businesses ship, sell, and sustain.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-inter font-semibold text-white mb-4">Navigation</h4>
                <div className="space-y-2">
                  <a href="/" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Home</a>
                  <a href="/about" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">About</a>
                  <a href="/projects" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Projects</a>
                  <a href="/services" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Services</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-inter font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-2">
                  <a href="/partnerships" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Partnerships</a>
                  <a href="/blog" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Blog</a>
                  <a href="/contact" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Contact</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-inter font-semibold text-white mb-4">Projects</h4>
                <div className="space-y-2">
                  <a href="#" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">Senti</a>
                  <a href="#" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">AptBlack</a>
                  <a href="#" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">GoGet.Fit</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-inter font-semibold text-white mb-4">Social</h4>
                <div className="space-y-2">
                  <a href="#" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">LinkedIn</a>
                  <a href="#" className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block">X (Twitter)</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="font-inter text-white/50">
              © 2024 BeyondScaling. Building beyond the ordinary.
            </p>
          </div>
        </div>
      </footer>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .group-hover\\:translate-x-1,
          .group-hover\\:-translate-y-1,
          .hover\\:scale-\\[1\\.02\\] {
            transform: none !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
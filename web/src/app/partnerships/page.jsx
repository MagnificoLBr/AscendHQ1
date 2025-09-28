import { ArrowUpRight, ArrowRight, Handshake, Users, DollarSign, Globe, Mail, MessageCircle } from "lucide-react";

export default function PartnershipsPage() {
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
            <a href="/projects" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Projects
            </a>
            <a href="/services" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Services
            </a>
            <a href="/partnerships" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
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

      {/* Hero Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-white mb-6">
              Partnerships & Collaborations
            </h1>
            <p className="font-inter text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              I'm actively building and scaling ventures like <strong className="text-[#008B8B]">Senti</strong> and <strong className="text-[#D4AF37]">AptBlack</strong>. If you're an investor, ecosystem partner, or collaborator, I'd love to connect.
            </p>
            <div className="w-24 h-1 bg-[#008B8B] mx-auto mb-12"></div>
            <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
              I'm interested in aligned capital, distribution partnerships, and meaningful ecosystem plays that help build the future of finance and community.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types - White Background */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">Partnership Opportunities</h2>
            <p className="font-inter text-xl text-[#0A0F1C]/70 max-w-2xl mx-auto">
              Multiple ways to collaborate and grow together across different areas of expertise and investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Investor Relations */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mb-6">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Investor Relations</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed mb-6">
                Seeking aligned capital for Senti and AptBlack. Looking for investors who understand the intersection of finance, technology, and community.
              </p>
              <div className="space-y-2 text-sm font-inter text-[#0A0F1C]/60">
                <div>• Seed to Series A funding</div>
                <div>• Strategic investors in fintech/Web3</div>
                <div>• Long-term partnership focus</div>
              </div>
            </div>

            {/* Distribution Partners */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-6">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Distribution Partners</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed mb-6">
                Collaborate on go-to-market strategies, user acquisition, and ecosystem expansion for mutual growth.
              </p>
              <div className="space-y-2 text-sm font-inter text-[#0A0F1C]/60">
                <div>• Financial services platforms</div>
                <div>• Web3 ecosystem partners</div>
                <div>• Educational institutions</div>
              </div>
            </div>

            {/* Technology Partners */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mb-6">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Technology Partners</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed mb-6">
                Integration opportunities, API partnerships, and technical collaborations that enhance user experience.
              </p>
              <div className="space-y-2 text-sm font-inter text-[#0A0F1C]/60">
                <div>• Banking/payment providers</div>
                <div>• DeFi protocol partners</div>
                <div>• AI/data infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-3xl text-white mb-6">Current Partnership Focus</h2>
            <p className="font-inter text-xl text-white/80 max-w-2xl mx-auto">
              Two active ventures looking for strategic partners who share our vision of building beyond the ordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Senti Partnership */}
            <div className="border border-white/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#008B8B] to-[#0A0F1C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-2xl text-white">Senti</h3>
                  <p className="font-inter text-[#008B8B]">Smart Financial OS</p>
                </div>
              </div>
              
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                Looking for partners in financial services, crypto infrastructure, and AI/ML to help build a unified financial experience that bridges traditional and digital assets.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">Banking and payment processor partnerships</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">DeFi protocol integrations and liquidity partners</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">Investment in Series A funding round</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-inter text-white/60 text-sm">
                  <strong className="text-white">Stage:</strong> MVP development, seeking strategic partnerships and Series A funding
                </p>
              </div>
            </div>

            {/* AptBlack Partnership */}
            <div className="border border-white/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#0A0F1C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-2xl text-white">AptBlack</h3>
                  <p className="font-inter text-[#D4AF37]">Web3 Builder Community</p>
                </div>
              </div>
              
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                Seeking ecosystem partners, educational institutions, and organizations focused on diversity and inclusion in tech to expand our global network.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">Corporate diversity and inclusion programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">Educational partnerships and scholarship programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                  <p className="font-inter text-white/70 text-sm">International expansion and local partnerships</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-inter text-white/60 text-sm">
                  <strong className="text-white">Stage:</strong> Active community growth, expanding partnerships and programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas - White Background */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">How We Can Collaborate</h2>
            <p className="font-inter text-xl text-[#0A0F1C]/70 max-w-2xl mx-auto">
              Multiple ways to work together, from strategic investments to operational partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-6">For Investors</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#008B8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Strategic Investment</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Direct equity investment in Senti and AptBlack with long-term partnership potential.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Advisory & Mentorship</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Strategic guidance and industry connections to accelerate growth and market penetration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#008B8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Portfolio Synergies</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Cross-portfolio collaborations and synergistic opportunities with other investments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-6">For Partners</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Integration Partnerships</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Technical integrations and API partnerships that enhance user experience and capabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#008B8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Go-to-Market Collaboration</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Joint marketing initiatives, co-branded content, and shared user acquisition strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Ecosystem Development</h4>
                    <p className="font-inter text-[#0A0F1C]/70">Building complementary services and expanding the broader ecosystem together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-white mb-6">Let's Start a Conversation</h2>
          <p className="font-inter text-xl text-white/80 leading-relaxed mb-12">
            Ready to explore partnership opportunities? Reach out to discuss how we can build something meaningful together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Partnership Inquiry</h3>
              <p className="font-inter text-white/70 mb-6 leading-relaxed">
                Quick form for partnership discussions, investment inquiries, and collaboration opportunities.
              </p>
              <button className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Partner With Me
              </button>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Direct Contact</h3>
              <p className="font-inter text-white/70 mb-6 leading-relaxed">
                For time-sensitive opportunities or detailed discussions, reach out directly via email.
              </p>
              <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0F1C] px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Mail size={18} />
                Email Me
              </button>
            </div>
          </div>

          <p className="font-inter text-white/60 text-sm">
            I typically respond within 24-48 hours. For urgent matters, please indicate priority in your message.
          </p>
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
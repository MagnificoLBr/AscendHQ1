import { ArrowUpRight, ArrowRight, TrendingUp, DollarSign, MessageCircle, CheckCircle, Calendar, Clock } from "lucide-react";

export default function ServicesPage() {
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
            <a href="/services" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
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

      {/* Hero Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-white mb-6">
              Work With Me
            </h1>
            <p className="font-inter text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              I focus on three core areas designed to help founders and operators grow with clarity and confidence.
            </p>
            <div className="w-24 h-1 bg-[#008B8B] mx-auto mb-12"></div>
            <a
              href="#services"
              className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Book a Strategy Call
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas - White Background */}
      <section id="services" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            
            {/* Product & Growth Strategy */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#008B8B] font-inter font-medium text-sm mb-6">
                  <TrendingUp size={16} />
                  Service Area 01
                </div>
                <h2 className="font-manrope font-bold text-4xl text-[#0A0F1C] mb-6">Product & Growth Strategy</h2>
                <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
                  Refine vision, sharpen positioning, and build go-to-market strategies that drive sustainable growth.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Product-Market Fit Assessment</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Deep dive into your product positioning, user feedback, and market dynamics to identify growth opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Go-to-Market Strategy</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Design launch strategies, identify key distribution channels, and build systems for scalable user acquisition.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Growth Framework Development</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Build repeatable processes for experimentation, measurement, and scaling that compound over time.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-inter text-[#0A0F1C]/60 text-sm">
                    <strong className="text-[#0A0F1C]">Best for:</strong> Founders looking to validate product direction, scale user acquisition, or refine positioning for next growth phase.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#008B8B] to-[#0A0F1C] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <TrendingUp size={64} className="text-white mx-auto mb-4" />
                    <div className="text-white text-2xl font-bold">Growth Strategy</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#008B8B] rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Revenue & Scaling Advisory */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 text-[#D4AF37] font-inter font-medium text-sm mb-6">
                  <DollarSign size={16} />
                  Service Area 02
                </div>
                <h2 className="font-manrope font-bold text-4xl text-[#0A0F1C] mb-6">Revenue & Scaling Advisory</h2>
                <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
                  Design business models, attract investors, and scale revenue streams with precision.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Business Model Optimization</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Analyze and refine revenue streams, pricing strategies, and unit economics for sustainable profitability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Investor Readiness</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Prepare compelling pitch decks, financial models, and investor materials that tell your growth story.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Scaling Systems</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Build operational frameworks and processes that support revenue growth without breaking your team.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-inter text-[#0A0F1C]/60 text-sm">
                    <strong className="text-[#0A0F1C]">Best for:</strong> Businesses ready to scale revenue, raise capital, or optimize their financial operations for growth.
                  </p>
                </div>
              </div>
              
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#D4AF37] to-[#0A0F1C] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <DollarSign size={64} className="text-white mx-auto mb-4" />
                    <div className="text-white text-2xl font-bold">Revenue Advisory</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#008B8B] rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#D4AF37] rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Community & Content Strategy */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#008B8B] font-inter font-medium text-sm mb-6">
                  <MessageCircle size={16} />
                  Service Area 03
                </div>
                <h2 className="font-manrope font-bold text-4xl text-[#0A0F1C] mb-6">Community & Content Strategy</h2>
                <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
                  Build narrative, content systems, and community frameworks that compound over time.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Brand Narrative Development</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Craft compelling stories and messaging frameworks that resonate with your audience and differentiate your brand.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Content System Design</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Build sustainable content workflows, editorial calendars, and distribution strategies that scale.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#008B8B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] mb-2">Community Architecture</h4>
                      <p className="font-inter text-[#0A0F1C]/70">Design community structures, engagement loops, and governance frameworks that foster long-term value.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-inter text-[#0A0F1C]/60 text-sm">
                    <strong className="text-[#0A0F1C]">Best for:</strong> Brands looking to build authentic communities, scale content operations, or strengthen market positioning through narrative.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#008B8B] to-[#D4AF37] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <MessageCircle size={64} className="text-white mx-auto mb-4" />
                    <div className="text-white text-2xl font-bold">Community Strategy</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0A0F1C] rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#008B8B] rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-3xl text-white mb-6">How We Work Together</h2>
            <p className="font-inter text-xl text-white/80 max-w-2xl mx-auto">
              A straightforward process designed to deliver maximum value and clear outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008B8B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Discovery Call</h3>
              <p className="font-inter text-white/70 leading-relaxed">
                15-minute intro to understand your challenges, goals, and determine if we're a good fit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Strategy Session</h3>
              <p className="font-inter text-white/70 leading-relaxed">
                Deep-dive session (60-90 minutes) to analyze your situation and develop actionable recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008B8B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Implementation</h3>
              <p className="font-inter text-white/70 leading-relaxed">
                Ongoing support to help you execute the strategy and achieve your scaling objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section - White Background */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">Ready to Get Started?</h2>
          <p className="font-inter text-xl text-[#0A0F1C]/70 mb-12">
            Book a strategy call to discuss how we can help you scale beyond the ordinary.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="flex items-center gap-2 text-[#008B8B] mb-4">
                <Clock size={20} />
                <span className="font-inter font-medium">15 minutes</span>
              </div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-4">Discovery Call</h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                Free introductory call to understand your challenges and see if we're a good fit.
              </p>
              <button className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={18} />
                Book Free Call
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-inter font-medium">
                  Most Popular
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                <Clock size={20} />
                <span className="font-inter font-medium">60-90 minutes</span>
              </div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-4">Strategy Session</h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                In-depth session with actionable recommendations and strategic roadmap.
              </p>
              <button className="w-full bg-[#D4AF37] hover:bg-[#008B8B] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={18} />
                Book Strategy Call
              </button>
            </div>
          </div>
          
          <p className="font-inter text-[#0A0F1C]/60 text-sm">
            All sessions are conducted via video call. You'll receive a calendar invite with meeting details after booking.
          </p>
        </div>
      </section>

      {/* Footer - Dark Background */}
      <footer className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
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
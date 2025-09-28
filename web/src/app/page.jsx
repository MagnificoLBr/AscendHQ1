import { ArrowUpRight, ArrowRight, CheckCircle, Users, TrendingUp, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 sm:px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-inter font-bold text-xl text-[#0A0F1C]">
            BeyondScaling
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
          <div className="max-w-4xl">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.1] text-white mb-6">
              Scale products. Grow revenue. Build beyond the ordinary.
            </h1>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-2xl">
              Founder & builder helping Web3 and forward-thinking businesses ship, sell, and sustain.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book a Strategy Call
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a
                href="/projects"
                className="border border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 text-center"
              >
                See Projects
              </a>
              <a
                href="#newsletter"
                className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0F1C] px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 text-center"
              >
                Join Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Product & Growth Strategy</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Refine vision, sharpen positioning, and build go-to-market strategies that drive sustainable growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-6">
                <ArrowUpRight size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Revenue & Scaling Advisory</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Design business models, attract investors, and scale revenue streams with precision.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mb-6">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Community & Content Strategy</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Build narrative, content systems, and community frameworks that compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-xl text-white/90 leading-relaxed mb-8">
              Founder & builder at the crossroads of finance, Web3, and human growth. Turning bold ideas into systems that ship, scale, and sustain.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-inter font-semibold transition-colors duration-200"
            >
              More About Me
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C]">Featured Projects</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-[#0A0F1C]"></div>
              <span className="font-inter font-medium text-sm text-[#0A0F1C]">04</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Senti Project */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#008B8B] to-[#0A0F1C] flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Senti</div>
              </div>
              <div className="p-8">
                <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Senti</h3>
                <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                  A smart financial OS bridging crypto, fiat, and AI—helping people save, spend, and grow wealth with real-world utility.
                </p>
                <button className="w-16 h-12 bg-[#0A0F1C] hover:bg-[#008B8B] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* AptBlack Project */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#D4AF37] to-[#0A0F1C] flex items-center justify-center">
                <div className="text-white text-3xl font-bold">AptBlack</div>
              </div>
              <div className="p-8">
                <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">AptBlack</h3>
                <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                  A community of Black builders in Web3—equipping young talent, connecting businesses, and expanding global opportunities.
                </p>
                <button className="w-16 h-12 bg-[#0A0F1C] hover:bg-[#008B8B] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* GoGet.Fit Project */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fgoget.fit%2F&full_page=true&width=1024&max_height=2048&quality=80"
                  alt="GoGet.Fit interface showing habit formation platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">GoGet.Fit</h3>
                <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                  Habit-formation tech for K-12 and healthcare—turning active living into sustainable practice through schools and providers.
                </p>
                <button className="w-16 h-12 bg-[#0A0F1C] hover:bg-[#008B8B] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Silverline Project */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-white text-3xl font-bold">Silverline</div>
              </div>
              <div className="p-8">
                <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4">Silverline <span className="text-sm font-inter text-[#0A0F1C]/50">(Past Project)</span></h3>
                <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                  A past project focused on investing in real-world assets—blending AI technology with financial markets to create a forward-looking fund model.
                </p>
                <button className="w-16 h-12 bg-[#0A0F1C] hover:bg-[#008B8B] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-xl text-white/90 leading-relaxed mb-8">
              Three focus areas: Product & Growth Strategy, Revenue & Scaling Advisory, and Community & Content Strategy.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-inter font-semibold transition-colors duration-200"
            >
              Work With Me
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Partnerships Teaser Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-xl text-white/90 leading-relaxed mb-8">
              I'm actively building ventures that shape the future of finance and community, including <strong className="text-[#008B8B]">Senti</strong> and <strong className="text-[#D4AF37]">AptBlack</strong>. If you're an investor, ecosystem partner, or collaborator exploring opportunities to grow with us, let's connect.
            </p>
            <a
              href="/partnerships"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-inter font-semibold transition-colors duration-200"
            >
              Partner With Me
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Warm Gray Background */}
      <section id="newsletter" className="bg-[#F4F4F4] py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">Stay Connected</h2>
          <p className="font-inter text-lg text-[#0A0F1C]/70 mb-8">
            Actionable notes on product, revenue, and community—sent occasionally, only when it's worth your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
            />
            <button className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section - Warm Gray Background */}
      <section className="bg-[#F4F4F4] py-16 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C]">Latest Insights</h2>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#008B8B] hover:text-[#D4AF37] font-inter font-semibold transition-colors duration-200"
            >
              View All Posts
              <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#008B8B] text-sm font-inter font-medium mb-3">Founder Notes</div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4 leading-tight">
                Building Products That Actually Scale
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-4 leading-relaxed">
                Most products fail not because of poor execution, but because they try to scale the wrong things at the wrong time.
              </p>
              <div className="text-[#0A0F1C]/50 text-sm font-inter">3 min read</div>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#008B8B] text-sm font-inter font-medium mb-3">Web3/DeFi</div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4 leading-tight">
                The Real-World Utility Problem in Crypto
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-4 leading-relaxed">
                Why most crypto projects struggle to find product-market fit and what builders can learn from traditional finance.
              </p>
              <div className="text-[#0A0F1C]/50 text-sm font-inter">5 min read</div>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#008B8B] text-sm font-inter font-medium mb-3">Finance & Psychology</div>
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4 leading-tight">
                Why Revenue Models Matter More Than Tech
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-4 leading-relaxed">
                Great technology without a sustainable revenue model is just an expensive hobby. Here's how to think differently.
              </p>
              <div className="text-[#0A0F1C]/50 text-sm font-inter">4 min read</div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Summary Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">Let's Connect</h2>
          <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8">
            Partnerships, media, or speaking—use the form or reach me on LinkedIn/X.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#008B8B] hover:text-[#D4AF37] font-inter font-semibold transition-colors duration-200"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
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
import { ArrowUpRight, ArrowRight, CheckCircle, Target, Users, Eye } from "lucide-react";

export default function AboutPage() {
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
            <a href="/about" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
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

      {/* Hero Section - White Background */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-[#0A0F1C] mb-8">
              Builder's mindset. Operator's discipline.
            </h1>
            <div className="w-24 h-1 bg-[#008B8B] mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* Story Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-xl text-[#0A0F1C] leading-relaxed mb-8">
              I'm Oluwatosin "Tomi" Ajayi, a founder and product strategist building at the intersection of finance, Web3, and human growth. I help founders and business owners cut through noise, sharpen positioning, and scale with discipline.
            </p>
            <p className="font-inter text-xl text-[#0A0F1C]/80 leading-relaxed mb-8">
              My work blends clarity with execution—turning bold ideas into systems that actually ship, sustain, and grow.
            </p>
            <p className="font-inter text-lg text-[#0A0F1C]/70 leading-relaxed mb-12">
              With experience spanning fintech, community building, and Web3 ecosystems, I focus on what matters: building products people actually use, creating revenue streams that compound, and fostering communities that thrive long-term.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-manrope font-bold text-3xl text-white text-center mb-16">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008B8B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-white mb-4">Clarity over noise</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                In a world of endless distractions, I focus on what drives real outcomes. Clear thinking leads to clear action.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-white mb-4">Compounding over stunts</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                Sustainable growth beats viral moments. I build systems that get stronger with time, not weaker.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008B8B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-white mb-4">Users before ego</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                The best products serve real needs, not just clever ideas. User success is the only success that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-12">Background & Experience</h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-[#008B8B] pl-6">
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-3">Product Strategy & Growth</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Led product strategy and go-to-market initiatives across fintech and Web3 startups. Specialized in taking complex technical concepts and turning them into clear value propositions that resonate with users and investors alike.
              </p>
            </div>
            
            <div className="border-l-4 border-[#D4AF37] pl-6">
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-3">Web3 & Community Building</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Built and scaled communities in the Web3 space, with particular focus on underrepresented builders and creators. Experience ranges from tokenomics design to community governance structures that actually work.
              </p>
            </div>
            
            <div className="border-l-4 border-[#008B8B] pl-6">
              <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-3">Financial Technology</h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Deep experience in fintech, from traditional banking systems to emerging crypto-native financial products. Understanding both the technical possibilities and regulatory realities of modern finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-manrope font-bold text-3xl text-white mb-8">Current Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-manrope font-bold text-xl text-[#008B8B] mb-4">Building</h3>
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                Currently building <strong className="text-[#008B8B]">Senti</strong>, a smart financial OS that bridges crypto and traditional finance, and scaling <strong className="text-[#D4AF37]">AptBlack</strong>, a community for Black builders in Web3.
              </p>
            </div>
            
            <div>
              <h3 className="font-manrope font-bold text-xl text-[#D4AF37] mb-4">Advising</h3>
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                Working with select founders and operators to refine their product positioning, scale revenue streams, and build sustainable growth systems that compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-6">Ready to Scale Beyond the Ordinary?</h2>
          <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8">
            Let's talk about turning your bold ideas into systems that ship, scale, and sustain.
          </p>
          <a
            href="/services"
            className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Work With Me
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
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
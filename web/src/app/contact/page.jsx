import { ArrowUpRight, ArrowRight, Mail, MessageCircle, Calendar, Linkedin, Twitter, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
            <a href="/partnerships" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Partnerships
            </a>
            <a href="/blog" className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200">
              Blog
            </a>
            <a href="/contact" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
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
              Let's Connect
            </h1>
            <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8 max-w-2xl mx-auto">
              For consulting, partnerships, or media—use the form or book directly.
            </p>
            <div className="w-24 h-1 bg-[#008B8B] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="investment">Investment Discussion</option>
                    <option value="media">Media & Speaking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter font-medium text-[#0A0F1C] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent resize-none"
                    placeholder="Tell me about your project, partnership opportunity, or inquiry. The more context you provide, the better I can help."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 w-4 h-4 text-[#008B8B] border-gray-300 rounded focus:ring-[#008B8B]"
                  />
                  <label htmlFor="newsletter" className="font-inter text-[#0A0F1C]/70 text-sm leading-relaxed">
                    I'd like to receive occasional updates about BeyondScaling projects and insights. No spam, unsubscribe anytime.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
              </form>

              <p className="font-inter text-[#0A0F1C]/60 text-sm mt-6">
                I typically respond within 24-48 hours. For urgent matters, please indicate priority in your message.
              </p>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-8">
              
              {/* Quick Actions */}
              <div>
                <h2 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-8">Quick Actions</h2>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="block bg-[#008B8B] hover:bg-[#D4AF37] text-white p-6 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-bold text-lg text-white mb-1">Book a Strategy Call</h3>
                        <p className="font-inter text-white/80 text-sm">Schedule a consultation to discuss your project or partnership</p>
                      </div>
                      <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-auto" />
                    </div>
                  </a>

                  <a
                    href="/partnerships"
                    className="block border-2 border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white p-6 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#008B8B]/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <MessageCircle size={24} className="text-[#008B8B] group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-bold text-lg mb-1">Partnership Inquiry</h3>
                        <p className="font-inter text-sm opacity-80">Explore investment or collaboration opportunities</p>
                      </div>
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-auto" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Social & Contact Info */}
              <div>
                <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-6">Connect on Social</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#008B8B] hover:bg-[#008B8B]/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] group-hover:text-[#008B8B] transition-colors duration-300">LinkedIn</h4>
                      <p className="font-inter text-[#0A0F1C]/60 text-sm">Professional updates and insights</p>
                    </div>
                    <ArrowUpRight size={16} className="text-[#0A0F1C]/40 group-hover:text-[#008B8B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ml-auto" />
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#008B8B] hover:bg-[#008B8B]/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                      <Twitter size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-[#0A0F1C] group-hover:text-[#008B8B] transition-colors duration-300">X (Twitter)</h4>
                      <p className="font-inter text-[#0A0F1C]/60 text-sm">Real-time thoughts and discussions</p>
                    </div>
                    <ArrowUpRight size={16} className="text-[#0A0F1C]/40 group-hover:text-[#008B8B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-manrope font-bold text-lg text-[#0A0F1C] mb-4">Response Times</h3>
                <div className="space-y-3 text-sm font-inter">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A0F1C]/70">General Inquiries</span>
                    <span className="text-[#0A0F1C] font-medium">24-48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A0F1C]/70">Partnership Discussions</span>
                    <span className="text-[#0A0F1C] font-medium">48-72 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A0F1C]/70">Media Requests</span>
                    <span className="text-[#0A0F1C] font-medium">Same day</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#0A0F1C] text-white rounded-xl p-6">
                <h3 className="font-manrope font-bold text-lg text-white mb-4">Availability</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed mb-4">
                  I'm based in EST timezone and typically available for calls Monday through Friday, 9 AM to 6 PM.
                </p>
                <p className="font-inter text-white/60 text-sm">
                  For international collaborators, I'm happy to accommodate different time zones for important discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-3xl text-white mb-6">Frequently Asked Questions</h2>
            <p className="font-inter text-xl text-white/80">
              Common questions about working together and getting started.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-white/20 pb-8">
              <h3 className="font-manrope font-bold text-xl text-white mb-4">What type of projects do you work on?</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                I focus on three main areas: Product & Growth Strategy for founders looking to scale, Revenue & Scaling Advisory for businesses ready to grow, and Community & Content Strategy for brands building authentic connections. I particularly enjoy working with Web3, fintech, and purpose-driven companies.
              </p>
            </div>

            <div className="border-b border-white/20 pb-8">
              <h3 className="font-manrope font-bold text-xl text-white mb-4">How do you structure engagements?</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                Every project starts with a discovery call to understand your needs. From there, we might do a strategic deep-dive session, ongoing advisory work, or project-based consulting. I prefer longer-term partnerships where we can build something meaningful together.
              </p>
            </div>

            <div className="border-b border-white/20 pb-8">
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Are you open to investment opportunities?</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                Yes, I'm actively seeking strategic partners and investors for my current ventures, Senti and AptBlack. I'm particularly interested in aligned capital that brings more than just funding—industry connections, strategic guidance, and long-term partnership potential.
              </p>
            </div>

            <div>
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Do you speak at events or conferences?</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                Absolutely. I enjoy speaking about product strategy, Web3 community building, fintech innovation, and the intersection of finance and technology. I'm particularly passionate about discussions around underrepresented builders in tech and sustainable business models.
              </p>
            </div>
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
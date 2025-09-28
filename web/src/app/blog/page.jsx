import { ArrowUpRight, ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "Founder Notes", "Web3/DeFi", "Finance & Psychology", "Field Notes"];
  
  const posts = [
    {
      id: 1,
      title: "Building Products That Actually Scale",
      excerpt: "Most products fail not because of poor execution, but because they try to scale the wrong things at the wrong time. Here's what I've learned about building systems that grow sustainably.",
      category: "Founder Notes",
      readTime: "3 min read",
      date: "Sep 20, 2024",
      featured: true
    },
    {
      id: 2,
      title: "The Real-World Utility Problem in Crypto",
      excerpt: "Why most crypto projects struggle to find product-market fit and what builders can learn from traditional finance about creating products people actually need.",
      category: "Web3/DeFi",
      readTime: "5 min read",
      date: "Sep 18, 2024",
      featured: true
    },
    {
      id: 3,
      title: "Why Revenue Models Matter More Than Tech",
      excerpt: "Great technology without a sustainable revenue model is just an expensive hobby. Here's how to think differently about building profitable products from day one.",
      category: "Finance & Psychology",
      readTime: "4 min read",
      date: "Sep 15, 2024",
      featured: true
    },
    {
      id: 4,
      title: "Community-Led Growth in Web3",
      excerpt: "Traditional marketing doesn't work in decentralized ecosystems. How AptBlack grew through authentic community building instead of paid acquisition.",
      category: "Field Notes",
      readTime: "6 min read",
      date: "Sep 12, 2024",
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of Financial Decision Making",
      excerpt: "Understanding how people make money decisions is crucial for building fintech products. Insights from behavioral economics and user research.",
      category: "Finance & Psychology",
      readTime: "4 min read",
      date: "Sep 10, 2024",
      featured: false
    },
    {
      id: 6,
      title: "From MVP to Market: Lessons from Senti",
      excerpt: "Building a financial OS taught me that the real challenge isn't the technology—it's understanding what users actually need versus what they say they want.",
      category: "Founder Notes",
      readTime: "5 min read",
      date: "Sep 8, 2024",
      featured: false
    },
    {
      id: 7,
      title: "DeFi's Infrastructure Problem",
      excerpt: "The promise of decentralized finance is held back by poor infrastructure. What needs to change for mainstream adoption to happen.",
      category: "Web3/DeFi",
      readTime: "7 min read",
      date: "Sep 5, 2024",
      featured: false
    },
    {
      id: 8,
      title: "Building Habits That Scale",
      excerpt: "Observations from working with GoGet.Fit on how to design systems that help people build sustainable habits, not just temporary motivation.",
      category: "Field Notes",
      readTime: "3 min read",
      date: "Sep 3, 2024",
      featured: false
    }
  ];

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
            <a href="/blog" className="font-inter font-medium text-sm text-[#008B8B] font-semibold">
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

      {/* Hero Section - Warm Gray Background */}
      <section className="bg-[#F4F4F4] pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-[#0A0F1C] mb-6">
              Insights & Ideas
            </h1>
            <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8 max-w-2xl mx-auto">
              Actionable notes on product, revenue, and community—thoughts from building at the intersection of finance, Web3, and human growth.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0A0F1C]/40" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 ${
                      category === "All" 
                        ? "bg-[#008B8B] text-white" 
                        : "bg-gray-100 text-[#0A0F1C] hover:bg-[#008B8B] hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            <div className="mb-16">
              <h2 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-2 text-[#008B8B] text-sm font-inter font-medium mb-3">
                      <Tag size={14} />
                      {post.category}
                    </div>
                    <h3 className="font-manrope font-bold text-xl text-[#0A0F1C] mb-4 leading-tight group-hover:text-[#008B8B] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="font-inter text-[#0A0F1C]/70 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[#0A0F1C]/50 text-sm font-inter">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-[#008B8B] group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-8">All Articles</h2>
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-[#008B8B] text-sm font-inter font-medium mb-2 md:mb-0">
                        <Tag size={14} />
                        {post.category}
                      </div>
                      <div className="flex items-center gap-4 text-[#0A0F1C]/50 text-sm font-inter">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-4 group-hover:text-[#008B8B] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="font-inter text-[#0A0F1C]/70 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#008B8B] font-inter font-semibold group-hover:gap-3 transition-all duration-200">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Newsletter Signup */}
            <div className="bg-[#0A0F1C] text-white rounded-xl p-6 mb-8">
              <h3 className="font-manrope font-bold text-xl text-white mb-4">Stay Updated</h3>
              <p className="font-inter text-white/80 text-sm mb-6 leading-relaxed">
                Get actionable insights delivered to your inbox. No fluff, just valuable thoughts on building and scaling.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                />
                <button className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-4 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <h3 className="font-manrope font-bold text-lg text-[#0A0F1C] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.filter(cat => cat !== "All").map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 rounded-lg font-inter text-[#0A0F1C]/70 hover:bg-[#008B8B] hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-manrope font-bold text-lg text-[#0A0F1C] mb-4">Current Projects</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#008B8B] to-[#0A0F1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] text-sm">Senti</h4>
                    <p className="font-inter text-[#0A0F1C]/60 text-xs">Smart Financial OS</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#0A0F1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[#0A0F1C] text-sm">AptBlack</h4>
                    <p className="font-inter text-[#0A0F1C]/60 text-xs">Web3 Builder Community</p>
                  </div>
                </div>
              </div>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-[#008B8B] font-inter font-semibold text-sm mt-4 hover:gap-3 transition-all duration-200"
              >
                View All Projects
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>

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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .group-hover\\:translate-x-1,
          .group-hover\\:-translate-y-1,
          .hover\\:scale-\\[1\\.02\\],
          .group-hover\\:gap-3,
          .hover\\:gap-3 {
            transform: none !important;
            gap: inherit !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
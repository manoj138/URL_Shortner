import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Rocket, Shield, Globe, ChevronDown, MousePointer2, Layers3, Sparkles, ArrowRight, TrendingUp, Link2 } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Urlindex from './UrlShort/Urlindex';

const Dashboard = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { title: "Lightning Fast", desc: "Shorten your URLs in milliseconds with our optimized infrastructure.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { title: "Bank-Grade Security", desc: "Your data is encrypted and protected with industry-standard protocols.", icon: Shield, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { title: "Real-time Stats", desc: "Track every click with detailed geography and device analytics.", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { title: "Global Reach", desc: "Our redirects are served via a globally distributed edge network.", icon: Globe, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  const faqs = [
    { q: "Is it free to use?", a: "Yes! Our basic URL shortening and tracking services are completely free for everyone." },
    { q: "Will my links expire?", a: "No, links created with URLly do not expire as long as they are active and comply with our terms." },
    { q: "Can I customize my short links?", a: "Premium users can customize the back-half of their links for better branding." },
    { q: "How do I track my link's performance?", a: "Navigate to 'My Links' page to see total clicks and performance analytics for each link." },
  ];

  const journey = [
    { title: "Paste any URL", desc: "Drop a product link, portfolio page, campaign URL, or social bio link.", icon: Sparkles },
    { title: "Generate instantly", desc: "Create a short URL that is easier to share and easier to remember.", icon: Zap },
    { title: "Manage from one place", desc: "Review history, monitor clicks, and delete unused URLs from My Links.", icon: Layers3 },
  ];

  return (
    <div className="space-y-32 py-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-10 px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-black uppercase tracking-[0.2em] animate-in zoom-in duration-700">
          <Rocket size={14} />
          <span>v2.0 is now live</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900 dark:text-white">
            Shorten Your Links <br />
            <span className="text-gradient">Expand Your Reach</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-bold leading-relaxed">
            The ultimate platform to shorten, manage, and track your links with 
            <span className="text-brand-600 dark:text-brand-500"> real-time analytics </span> 
            and a state-of-the-art experience.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/links" className="w-full sm:w-auto">
            <Button size="xl" icon={Link2} className="w-full sm:w-auto group">
              Start Shortening
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <div className="p-[2px] rounded-3xl bg-linear-to-r from-brand-500/20 via-purple-500/20 to-brand-500/20 group">
              <div className="px-8 py-5 rounded-[1.4rem] bg-white dark:bg-slate-900 font-bold text-gray-600 dark:text-gray-300 flex items-center gap-3">
                 <TrendingUp size={18} className="text-emerald-500" />
                 Built for performance & speed
              </div>
          </div>
        </div>
      </section>

      {/* Shorten Tool Integration */}
      <section className="relative px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-brand-500/10 dark:bg-brand-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <Urlindex />
      </section>

      {/* Stats/Highlights */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Uptime Guaranteed", value: "99.99%", icon: Shield, color: "text-emerald-500" },
            { label: "Global Presence", value: "Edge", icon: Globe, color: "text-brand-500" },
            { label: "Active Links", value: "12M+", icon: Link2, color: "text-purple-500" },
            { label: "Monthly Clicks", value: "450M+", icon: MousePointer2, color: "text-rose-500" },
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-[2.5rem] border-white/40 dark:border-slate-800/50 group hover:-translate-y-2 transition-all duration-500">
               <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-slate-800 w-fit mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                 <item.icon size={24} />
               </div>
               <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">{item.value}</p>
               <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
      </section>

      {/* Features Grid */}
      <section className="px-4 max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">Why Choose <span className="text-gradient">URLly?</span></h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold max-w-xl mx-auto">Powerful features to help you grow your brand and track your audience globally.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} variant="premium" hoverable className="group">
               <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
                 <feature.icon size={28} />
               </div>
               <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{feature.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed font-bold">
                 {feature.desc}
               </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="glass p-4 rounded-[3rem] border-white/60 dark:border-slate-800/50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 items-stretch">
                <div className="p-8 md:p-12 space-y-12 bg-white dark:bg-slate-900/50 rounded-[2.5rem]">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-600">Workflow</p>
                        <h2 className="mt-4 text-4xl font-black text-gray-900 dark:text-white tracking-tighter">Your journey to <br/>cleaner sharing.</h2>
                    </div>

                    <div className="grid gap-6">
                    {journey.map((item, index) => (
                        <div key={item.title} className="flex gap-6 items-start group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="card-premium !bg-brand-600 !border-none text-white overflow-hidden relative group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="relative z-10 space-y-12">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50">Experience</p>
                            <h2 className="mt-4 text-4xl font-black tracking-tighter leading-tight">Everything important <br/>stays visible.</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Redirects", value: "99.9%", icon: Rocket },
                            { label: "Tracking", value: "24/7", icon: MousePointer2 },
                        ].map((item) => (
                            <div key={item.label} className="rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20">
                                <item.icon size={22} className="text-white/80" />
                                <p className="mt-6 text-3xl font-black tracking-tighter">{item.value}</p>
                                <p className="mt-1 text-xs font-bold text-white/60 uppercase tracking-widest">{item.label}</p>
                            </div>
                        ))}
                        </div>

                        <Link to="/links" className="block text-center mr-4">
                            <Button
                                variant="glass"
                                size="xl"
                                className="w-full rounded-2xl !bg-white !text-brand-600 hover:!bg-brand-50"
                            >
                                Get Started Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">Questions? <span className="text-gradient">Answers.</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 font-bold">Everything you need to know about the platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800/50 transition-all duration-500 ${openFaq === idx ? 'ring-4 ring-brand-500/10' : ''}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{faq.q}</span>
                <div className={`p-2 rounded-xl bg-gray-50 dark:bg-slate-800/50 transition-all ${openFaq === idx ? 'rotate-180 bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              {openFaq === idx && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-500">
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800/50 text-gray-500 dark:text-gray-500 text-base leading-relaxed font-bold">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 text-center py-32 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -z-10"></div>
         <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-8">Ready to start shortening?</h3>
         <Link to="/links" className="inline-block scale-110">
            <Button size="xl" icon={Zap} className="rounded-3xl px-16 shadow-2xl shadow-brand-500/30">Join the Pro Experience</Button>
         </Link>
      </section>
    </div>
  );
};

export default Dashboard;

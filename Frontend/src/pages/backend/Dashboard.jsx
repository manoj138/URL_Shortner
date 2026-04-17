import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Rocket, Shield, Globe, ChevronDown, MousePointer2, Layers3, Sparkles, ArrowRight } from 'lucide-react';
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

  const highlights = [
    { label: "Fast redirects", value: "99.9%", icon: Rocket },
    { label: "Tracked clicks", value: "24/7", icon: MousePointer2 },
    { label: "Global delivery", value: "Edge", icon: Globe },
    { label: "Protected links", value: "Secure", icon: Shield },
  ];

  return (
    <div className="space-y-20 py-10 overflow-x-hidden animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 px-4 sm:px-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-semibold">
          <Rocket size={16} />
          <span>v2.0 is now live!</span>
        </div>
        
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
          Shorten Your Links <br />
          <span className="text-gradient">Expand Your Reach</span>
        </h1>
        
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
          The ultimate platform to shorten, manage, and track your links with 
          <span className="text-brand-600 dark:text-brand-400 font-bold"> real-time analytics </span> 
          and a premium experience.
        </p>

        <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/links" className="w-full sm:w-auto">
            <Button size="lg" icon={BarChart3} className="w-full rounded-2xl px-8 sm:w-auto">
              Open My Links
            </Button>
          </Link>
          <div className="w-full rounded-2xl border border-gray-200 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-gray-300 sm:w-auto">
            Build, track, and manage every short URL from one dashboard.
          </div>
        </div>
      </section>

      {/* Shorten Tool Integration */}
      <section className="relative overflow-hidden px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-x-6 top-1/2 h-56 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl -z-10"></div>
        <Urlindex />
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">Why Choose <span className="text-brand-600">URLly?</span></h2>
          <p className="text-gray-500 dark:text-gray-400">Powerful features to help you grow your brand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="card-premium group hover:-translate-y-2 transition-transform duration-300">
               <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-current/10`}>
                 <feature.icon size={28} />
               </div>
               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                 {feature.desc}
               </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
        <Card className="card-premium">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-500">Workflow</p>
              <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">From long link to clean share flow</h2>
            </div>

            <div className="grid gap-4">
              {journey.map((item, index) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-gray-100 dark:border-slate-800 p-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Step 0{index + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="card-premium bg-linear-to-br from-brand-600 via-blue-600 to-cyan-500 text-white border-none">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">Snapshot</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Everything important stays visible.</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                  <item.icon size={18} className="text-white/80" />
                  <p className="mt-4 text-2xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>

            <Link to="/links" className="inline-flex">
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="rounded-2xl !bg-white !text-blue-700 hover:!bg-blue-50"
              >
                Go to My Links
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">Questions? <span className="text-brand-600">Answers.</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Everything you need to know about URLly.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 transition-all duration-300 ${openFaq === idx ? 'ring-2 ring-brand-500/20' : ''}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-gray-900 dark:text-white">{faq.q}</span>
                <div className={`p-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 transition-all ${openFaq === idx ? 'rotate-180 bg-brand-500 text-white' : 'text-gray-400'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-2 border-t border-gray-50 dark:border-slate-800/50 text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer-like section */}
      <section className="px-4 sm:px-6 text-center py-12 border-t border-gray-100 dark:border-slate-800">
         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to start shortening?</h3>
         <Link to="/links" className="inline-block">
            <Button size="lg" icon={Zap} className="rounded-2xl px-12">Manage Your Links</Button>
         </Link>
      </section>
    </div>
  );
};

export default Dashboard;

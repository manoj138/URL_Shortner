import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Rocket, Shield, Clock, Globe, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
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

  return (
    <div className="space-y-24 py-12 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 px-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-semibold">
          <Rocket size={16} />
          <span>v2.0 is now live!</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight max-w-4xl">
          Shorten Your Links <br />
          <span className="text-gradient">Expand Your Reach</span>
        </h1>
        
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
          The ultimate platform to shorten, manage, and track your links with 
          <span className="text-brand-600 dark:text-brand-400 font-bold"> real-time analytics </span> 
          and a premium experience.
        </p>
      </section>

      {/* Shorten Tool Integration */}
      <section className="relative px-6">
        <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full scale-150 -z-10"></div>
        <Urlindex />
      </section>

      {/* Features Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
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

      {/* FAQ Section */}
      <section className="px-6 max-w-3xl mx-auto space-y-10">
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
      <section className="px-6 text-center py-12 border-t border-gray-100 dark:border-slate-800">
         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to start shortening?</h3>
         <Link to="/links" className="inline-block">
            <Button size="lg" icon={Zap} className="rounded-2xl px-12">Manager Your Links</Button>
         </Link>
      </section>
    </div>
  );
};

export default Dashboard;
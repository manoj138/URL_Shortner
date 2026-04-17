import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Rocket, Shield, Globe, ChevronDown, MousePointer2, Layers3, Sparkles, ArrowRight, TrendingUp, Link2, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Urlindex from './UrlShort/Urlindex';

const Dashboard = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { title: "Instant Redirection", desc: "Shorten and deploy links globally in under 100ms with our edge infrastructure.", icon: Zap, color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-950/30" },
    { title: "Advanced Security", desc: "Enterprise-grade protection with HTTPS encryption and safe-link scanning.", icon: Shield, color: "text-brand-600", bg: "bg-brand-50 dark:bg-brand-950/30" },
    { title: "Real-time Analytics", desc: "Track performance with sub-second latency for clicks, locations, and devices.", icon: BarChart3, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/30" },
    { title: "API First", desc: "Integrate shortening directly into your workflow with our developer-friendly API.", icon: Layers3, color: "text-slate-600", bg: "bg-slate-50 dark:bg-slate-900/50" },
  ];

  const faqs = [
    { q: "How secure are the short links?", a: "Every link generated is automatically protected with SSL encryption and is scanned for malicious content via our security filters." },
    { q: "Can I manage links via API?", a: "Yes, our REST API allows you to automate link shortening and fetch analytics programmatically." },
    { q: "Do short links have an expiration date?", a: "By default, links remain active indefinitely. You can manually delete or manage them from your dashboard repo." },
    { q: "Is the analytics tracking real-time?", a: "Absolutely. Click data is processed and reflected in your analytics dashboard within milliseconds." },
  ];

  return (
    <div className="space-y-32 pb-32 overflow-x-clip">
      {/* Hero Section - Pro Focus */}
      <section className="relative pt-16 pb-8">
        
        <div className="section-container text-center space-y-12 relative z-10">
          <div className="space-y-6">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-reveal delay-100 italic">
              Shorten <span className="text-brand-600 drop-shadow-sm">Share.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed animate-reveal delay-200">
              The professional choice for link management. Build your audience 
              with trackable, branded links that scale with your business.
            </p>
          </div>

          {/* Core Action Tool */}
          <div className="w-full max-w-6xl mx-auto px-4 relative group animate-reveal delay-300">
            <div className="absolute -inset-8 bg-linear-to-r from-indigo-500/10 via-brand-500/10 to-indigo-500/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <Urlindex />
          </div>

          {/* Social Proof Elements */}
          <div className="pt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-1000 animate-reveal delay-400">
             <div className="flex items-center gap-2 font-bold text-xl animate-float">TRUSTED LABS</div>
             <div className="flex items-center gap-2 font-bold text-xl tracking-tighter uppercase underline decoration-indigo-500 animate-float" style={{ animationDelay: '-1s' }}>Global Analytics</div>
             <div className="flex items-center gap-2 font-bold text-xl italic animate-float" style={{ animationDelay: '-2s' }}>DataFlow</div>
          </div>
        </div>
      </section>

      {/* Analytics Snapshot - LIVING Professional Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Active Nodes", value: "142", icon: Globe, suffix: "Global" },
            { label: "Daily Redirects", value: "24M+", icon: Zap, suffix: "+12%" },
            { label: "Average Latency", value: "<85ms", icon: Rocket, suffix: "Edge" },
            { label: "Uptime SLA", value: "99.98%", icon: Shield, suffix: "Guaranteed" },
          ].map((stat, i) => (
            <div key={i} className={`card-premium group hover:border-indigo-500/30 font-sans animate-reveal delay-${(i+1)*100}`}>
               <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <stat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full animate-pulse">
                    {stat.suffix}
                  </span>
               </div>
               <div className="space-y-0.5">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid - Crisp & Clean */}
      <section className="section-container space-y-20">
        <div className="text-center space-y-4 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">Built for modern workflows.</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">Focus on growing your brand while we handle the link redirection and analytics at scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
          {features.map((feature, i) => (
            <div key={i} className={`space-y-6 group animate-reveal delay-${(i+1)*100}`}>
               <div className={`w-16 h-16 rounded-[1.5rem] ${feature.bg} ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                 <feature.icon size={30} className="relative z-10" />
               </div>
               <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight - Pro Split */}
      <section className="section-container">
         <div className="card-premium !p-2 border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden animate-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-2 items-stretch font-sans">
               {/* Left Context */}
               <div className="p-10 md:p-16 bg-white dark:bg-slate-900 rounded-[2rem] flex flex-col justify-between relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full animate-float"></div>
                  <div className="space-y-20 relative z-10">
                    <div className="space-y-6">
                       <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 animate-reveal">Enterprise Ready</p>
                       <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight animate-reveal delay-100">Streamlined for teams <br/>and impact.</h2>
                    </div>

                    <div className="grid gap-8">
                       {[
                         "Automated link generation with REST API",
                         "Granular traffic insights and click maps",
                         "Custom brand domains and SSL support",
                         "Role-based access for large teams"
                       ].map((item, i) => (
                          <div key={i} className={`flex items-center gap-4 text-slate-600 dark:text-slate-400 font-medium group animate-reveal delay-${(i+1)*100}`}>
                             <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform">
                                <CheckCircle2 size={14} strokeWidth={3} />
                             </div>
                             <span className="text-sm group-hover:text-slate-950 dark:group-hover:text-white transition-colors">{item}</span>
                          </div>
                       ))}
                    </div>
                  </div>
                  
                  <div className="pt-16 border-t border-slate-100 dark:border-white/5 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                           {[1,2,3].map(i => <div key={i} className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 animate-pulse" style={{ animationDelay: `${i*300}ms` }}></div>)}
                        </div>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Joined by 200+ new users today</p>
                     </div>
                  </div>
               </div>

               {/* Right Highlight */}
               <div className="bg-brand-600 rounded-[2rem] p-12 md:p-16 text-white flex flex-col justify-center space-y-20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 blur-[80px] rounded-full animate-float"></div>
                  
                  <div className="space-y-12 relative z-10">
                     <h2 className="text-4xl font-extrabold tracking-tight leading-tight">Scale your link network instantly.</h2>
                     <p className="text-brand-100/80 font-medium leading-relaxed">Join thousands of businesses using URLly to power their marketing and product links.</p>
                     
                     <div className="flex flex-col gap-5">
                        <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between hover:bg-white/20 transition-colors">
                           <span className="text-sm font-semibold opacity-60">Uptime</span>
                           <span className="font-bold flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                             99.98%
                           </span>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between hover:bg-white/20 transition-colors">
                           <span className="text-sm font-semibold opacity-60">Security</span>
                           <span className="font-bold italic tracking-wider">ENTERPRISE</span>
                        </div>
                     </div>
                  </div>

                  <Link to="/links" className="relative z-10">
                    <Button variant="glass" size="lg" className="w-full !bg-white !text-brand-700 shadow-2xl font-extrabold hover:scale-[1.02] active:scale-[0.98]">
                       Get Started Now
                    </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section - Clean */}
      <section className="section-container max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-2 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">Frequently Asked.</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Clear answers for professional link management.</p>
        </div>

        <div className="space-y-6 font-sans">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-brand-500/30 transition-all duration-500 shadow-sm animate-reveal delay-${idx*100}`}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-10 py-7 flex items-center justify-between text-left group bg-white dark:bg-slate-950/60"
              >
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-700 ${openFaq === idx ? 'rotate-180 text-brand-500' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-10 pb-8 animate-reveal bg-white dark:bg-slate-950/60 border-t border-slate-50 dark:border-white/5">
                  <p className="pt-6 text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
         <div className="relative overflow-hidden bg-slate-950 rounded-[4rem] p-20 md:p-32 text-center animate-reveal">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 blur-[150px] rounded-full animate-mesh"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: '-5s' }}></div>
            
            <div className="relative z-10 space-y-12 max-w-3xl mx-auto font-sans">
               <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] animate-reveal delay-100">Build trackable links in seconds, not days.</h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-reveal delay-200">
                  <Link to="/links" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full px-16 py-8 text-lg font-extrabold bg-white text-slate-950 hover:bg-slate-100 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                       Start for Free
                    </Button>
                  </Link>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto px-12 py-8 text-lg text-white/70 hover:text-white rounded-2xl hover:bg-white/5">
                     Contact Sales
                  </Button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;


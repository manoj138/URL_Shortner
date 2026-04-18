import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, BarChart3, Layers3, Rocket, Sparkles, ArrowRight, CheckCircle2, Globe, Users, Code, Building2 } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Solutions = () => {
  const TrendingUp = ({ size, className }) => (
    <BarChart3 size={size} className={className} />
  );

  const solutions = [
    {
      title: "For Marketers",
      subtitle: "Optimize your campaigns with branded links.",
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50 dark:bg-indigo-950/30",
      features: [
        "Branded domain support",
        "Campaign-level tracking",
        "Retargeting pixels integration",
        "A/B testing for link destinations"
      ]
    },
    {
      title: "For Developers",
      subtitle: "Integrate URL manipulation into your stack.",
      icon: Code,
      color: "text-brand-600",
      bg: "bg-brand-50 dark:bg-brand-950/30",
      features: [
        "Robust REST API",
        "Webhooks for click events",
        "SDKs for JavaScript, Python & Go",
        "Custom slug generation"
      ]
    },
    {
      title: "For Enterprises",
      subtitle: "Secure link infrastructure at scale.",
      icon: Building2,
      color: "text-emerald-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      features: [
        "Role-Based Access Control",
        "SAML SSO Integration",
        "Dedicated account manager",
        "99.99% Uptime SLA"
      ]
    },
    {
      title: "For Influencers",
      subtitle: "All your content, one simple bio-link.",
      icon: Users,
      color: "text-rose-600",
      bg: "bg-rose-50 dark:bg-rose-950/30",
      features: [
        "Link-in-bio landing pages",
        "Cross-platform analytics",
        "Mobile-optimized templates",
        "Direct tipping & payment links"
      ]
    }
  ];

  return (
    <div className="space-y-32 pb-32 pt-20">
      {/* Header Section */}
      <section className="text-center space-y-8 px-4">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-600 animate-reveal">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Industry-Leading Solutions</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.95] animate-reveal delay-100">
          Tailored for <span className="text-brand-600 italic">your needs.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed animate-reveal delay-200">
          Whether you're a solopreneur or a Fortune 500 company, URLly provides 
          the infrastructure you need to connect with your audience.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => (
            <Card key={index} variant="premium" className="hover:-translate-y-2 transition-all duration-500">
              <div className="p-8 space-y-8">
                <div className={`w-20 h-20 rounded-[2rem] ${sol.bg} flex items-center justify-center shadow-xl shadow-current/10 border border-white/10`}>
                  <sol.icon size={36} className={`${sol.color} drop-shadow-md`} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 italic">{sol.title}</h3>
                  <p className="text-slate-500 dark:text-slate-500 font-bold mb-8">{sol.subtitle}</p>
                  
                  <ul className="space-y-4">
                    {sol.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4">
         <Card variant="premium" className="relative overflow-hidden !bg-brand-600 p-12 md:p-24 text-center group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-1000"></div>
            <div className="relative z-10 space-y-10">
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">Ready to scale your <br/> digital footprint?</h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="accent" size="lg" icon={Rocket} className="w-full px-12 py-8 bg-white text-brand-600 hover:text-white hover:bg-brand-500 rounded-2xl shadow-2xl">
                       Get Started Now
                    </Button>
                  </Link>
                  <Link to="/" className="w-full sm:w-auto">
                    <Button variant="ghost" icon={ArrowRight} className="w-full text-white/80 hover:text-white font-bold">
                       Explore Platform
                    </Button>
                  </Link>
               </div>
            </div>
         </Card>
      </section>
    </div>
  );
};

export default Solutions;

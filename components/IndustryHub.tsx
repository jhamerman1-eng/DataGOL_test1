import React, { useState } from 'react';
import { ShoppingBag, Shield, Stethoscope, Landmark, Truck, Cpu, ArrowRight, Sparkles, Activity } from 'lucide-react';

interface IndustryHubProps {
  onOpenAgent?: () => void;
}

const industries = [
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: ShoppingBag,
    headline: 'Real-time inventory and customer insights.',
    desc: 'Unify sales channels, predict stockouts before they happen, and understand customer lifetime value in real-time.',
    impact: { value: '+22%', label: 'Revenue per User' },
    insight: 'High churn risk detected in "Winter Sale" cohort due to shipping delays.'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: Shield,
    headline: 'Risk-aware underwriting and claims.',
    desc: 'Accelerate claims processing while detecting fraud patterns across thousands of applications instantly.',
    impact: { value: '-40%', label: 'Processing Time' },
    insight: 'Claim #4021 flagged: Image metadata inconsistent with reported date.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Stethoscope,
    headline: 'Proactive patient care through unified data.',
    desc: 'Connect EMRs, lab results, and wearable data to predict patient outcomes and optimize resource allocation.',
    impact: { value: '30%', label: 'Readmission Drop' },
    insight: 'Pattern detected: Post-op recovery correlates strongly with new therapy protocol.'
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: Landmark,
    headline: 'Automated reconciliation and compliance.',
    desc: 'Ensure every transaction is audit-ready and model market risks with live data feeds.',
    impact: { value: '100%', label: 'Audit Readiness' },
    insight: 'Variance analysis: Q3 marketing spend 15% above model due to unflagged campaign.'
  },
  {
    id: 'supplychain',
    name: 'Supply Chain',
    icon: Truck,
    headline: 'From raw material to last-mile delivery.',
    desc: 'See the entire chain. Identify bottlenecks, predict delays due to weather/geopolitics, and optimize routes dynamically.',
    impact: { value: '-15%', label: 'Logistics Costs' },
    insight: 'Route optimization opportunity detected: Save 40 mins on North Route.'
  },
  {
    id: 'middleware',
    name: 'AI Middleware',
    icon: Cpu,
    headline: 'Orchestrate your AI infrastructure.',
    desc: 'Manage model performance, cost, and latency across all your deployed agents and LLMs.',
    impact: { value: '10x', label: 'Deployment Speed' },
    insight: 'Model drift alert: Response latency increased by 200ms in last hour.'
  }
];

export const IndustryHub: React.FC<IndustryHubProps> = ({ onOpenAgent }) => {
  const [activeId, setActiveId] = useState('supplychain');
  const activeIndustry = industries.find(i => i.id === activeId) || industries[0];

  return (
    <section id="industries" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Vertical Solutions</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">Built to adapt to the complexity of your industry.</h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Every sector carries different drivers, bottlenecks, and data challenges. DataGol brings clarity to each.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Navigation */}
          <div className="lg:w-1/4 space-y-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                  activeId === ind.id
                    ? 'bg-brand-900/20 border-brand-500/50 text-white shadow-lg shadow-brand-500/10'
                    : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeId === ind.id ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                   <ind.icon size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">{ind.name}</span>
                {ind.id === 'middleware' && (
                  <span className="ml-auto text-[10px] font-black text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full tracking-widest">NEW</span>
                )}
              </button>
            ))}
          </div>

          {/* Right Content Card */}
          <div className="lg:w-3/4 animate-fade-in">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>

               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6 text-brand-400">
                    <activeIndustry.icon size={32} />
                    <h3 className="text-2xl font-bold text-white tracking-tight">{activeIndustry.name}</h3>
                 </div>

                 <p className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">{activeIndustry.headline}</p>
                 <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">{activeIndustry.desc}</p>

                 <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Impact Box */}
                    <div className="bg-dark-950 p-6 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-2">Impact</span>
                      <div className="text-4xl font-bold text-white mb-1 tracking-tighter">{activeIndustry.impact.value}</div>
                      <div className="text-brand-400 text-sm font-bold tracking-tight">{activeIndustry.impact.label}</div>
                    </div>

                    {/* Live Insight Box */}
                    <div className="bg-dark-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                      <div className="flex items-center gap-2 mb-3">
                         <Activity size={16} className="text-orange-500" />
                         <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">Live Insight</span>
                      </div>
                      <p className="text-slate-200 text-sm italic font-medium">"{activeIndustry.insight}"</p>
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4">
                   <button className="flex items-center gap-2 bg-white text-dark-950 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg">
                     Explore {activeIndustry.name} <ArrowRight size={18} />
                   </button>
                   <button 
                     onClick={onOpenAgent}
                     className="flex items-center gap-2 bg-brand-900/30 text-brand-300 border border-brand-500/30 px-8 py-3 rounded-lg font-bold hover:bg-brand-900/50 transition-colors"
                   >
                     <Sparkles size={18} /> Ask Agent
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { ShoppingCart, Database, Target, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const teams = [
  {
    id: 'product',
    name: 'Product',
    icon: ShoppingCart,
    headline: 'Build roadmaps based on real signals — not guesswork.',
    desc: 'DataGOL consolidates customer feedback, feature usage, retention patterns, support trends, and revenue impact into a single contextual model.',
    challenges: ['Insights scattered across tools', 'No unified prioritization signals', 'Manual deep-dive analysis'],
    cta: 'Explore Product',
    url: 'https://ai.studio/apps/drive/1CkJ97HuiDR_igvEQZ7LZJk8-nxJWexoe?fullscreenApplet=true'
  },
  {
    id: 'data',
    name: 'Data',
    icon: Database,
    headline: 'Less pipeline maintenance. More strategic leverage.',
    desc: 'Unify sources, maintain quality, monitor lineage, and give every stakeholder direct access to governed answers — all while reducing ad-hoc request volume.',
    challenges: ['Conflicting definitions', 'Pipeline firefighting', 'Endless Slack questions'],
    cta: 'Explore Data',
    url: 'https://ai.studio/apps/drive/1w_sUmmVzf9QUgJKflQq1JAyJajqyUrhX?fullscreenApplet=true'
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: Target,
    headline: 'Sharper targeting. Smarter conversations. Faster cycles.',
    desc: 'The agent surfaces account insights, buying signals, risk indicators, and next-best actions from CRM, product analytics, finance, and marketing.',
    challenges: ['Fragmented account data', 'Weak opportunity qualification', 'Forecasting inaccuracies'],
    cta: 'Explore Sales',
    url: '/solutions/team/sales'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: TrendingUp,
    headline: 'Faster close. Trusted forecasts. Numbers you can defend.',
    desc: 'Automate reconciliations, align with operations, and model business outcomes with full transparency and audit trails.',
    challenges: ['Manual reconciliations', 'Ledger mismatches', 'No auditability for adjustments'],
    cta: 'Explore Finance',
    url: 'https://ai.studio/apps/drive/1NT-OfacqWS52tUywFRgGRwAMUtpAsDtf?fullscreenApplet=true'
  },
  {
    id: 'success',
    name: 'Success',
    icon: Users,
    headline: 'A complete view of customer health.',
    desc: 'The agent analyzes product usage, ticket patterns, NPS, contract details, and churn signals — then suggests the next best action.',
    challenges: ['Blind spots across customer journeys', 'Lagging indicators', 'Reactive playbooks'],
    cta: 'Explore Customer Success',
    url: 'https://ai.studio/apps/drive/1J57_e5cDqpu35fhwQrfHpjyMNv7cOzRx?fullscreenApplet=true'
  }
];

export const TeamsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('product');
  const activeTeam = teams.find(t => t.id === activeTab) || teams[0];

  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden border-t border-slate-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Unified Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">One unified intelligence layer. Five teams transformed.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Every team sees the same truth, asks the agent the questions that matter, and takes confident action.</p>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto">
           <div className="bg-slate-900/50 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm inline-flex">
             {teams.map((team) => (
               <button
                 key={team.id}
                 onClick={() => setActiveTab(team.id)}
                 className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                   activeTab === team.id 
                     ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' 
                     : 'text-slate-400 hover:text-white hover:bg-slate-800'
                 }`}
               >
                 <team.icon size={16} />
                 <span>{team.name}</span>
               </button>
             ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-2xl animate-fade-in flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.2em] border border-brand-500/20">
                <activeTeam.icon size={12} />
                {activeTeam.name} Solution
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 leading-tight">
                {activeTeam.headline}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {activeTeam.desc}
              </p>
              
              <a href={activeTeam.url} className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors group">
                {activeTeam.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex-1 w-full bg-slate-900/50 p-8 rounded-xl border border-slate-800">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Key Challenges Solved</h4>
              <div className="space-y-4">
                {activeTeam.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-slate-950/50 border border-slate-800/50">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
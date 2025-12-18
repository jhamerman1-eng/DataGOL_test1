import React from 'react';
import { Database, Brain, MessageSquare, Zap, ShieldCheck, ArrowDown } from 'lucide-react';

export const LoopDeepDive: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'UNIFY',
      headline: 'Connect everything into one governed layer.',
      desc: 'DataGOL integrates ERP, CRM, finance systems, marketing platforms, product analytics, warehouses, logistics, and third-party data into one consistent, reliable view. No more manual stitching. No more data drift.',
      unlocks: ['Shared definitions', 'Real-time business visibility', 'Trusted metrics'],
      icon: Database
    },
    {
      id: '02',
      title: 'UNDERSTAND',
      headline: 'Dashboards and models that reflect your business context.',
      desc: 'Visualizations adapt to what you ask. Comparisons, trends, anomalies, and breakdowns stay grounded in your definitions and real-world entities — not generic BI templates.',
      unlocks: ['Clear insight', 'Faster analysis', 'No rework or confusion'],
      icon: Brain
    },
    {
      id: '03',
      title: 'ASK',
      headline: 'Your agent. Your data. Your language.',
      desc: 'Ask natural questions: "Why did margin fall?" or "Which segments are accelerating support contact?" The agent answers with explanation, reasoning, and recommended actions.',
      unlocks: ['Self-serve insights', 'Explainability', 'Always-on business intelligence'],
      icon: MessageSquare
    },
    {
      id: '04',
      title: 'EXECUTE',
      headline: 'From insight to action — instantly.',
      desc: 'Update records. Launch workflows. Trigger alerts. Run scenarios. Produce operational outputs. All within the same environment.',
      unlocks: ['Faster decision cycles', 'Consistent execution', 'Reduced operational drag'],
      icon: Zap
    },
    {
      id: '05',
      title: 'VERIFY',
      headline: 'Every action measured, governed, and trusted.',
      desc: 'DataGOL automatically captures lineage, decisions, outcomes, compliance checks, model behavior, and audit trails. Governance is built in — not bolted on.',
      unlocks: ['Confidence', 'Reliability', 'Risk-aware automation'],
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-dark-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dark-950/80 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Engineered Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">The Living Loop</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A high-fidelity breakdown of how DataGOL operates at every level of your business infrastructure.</p>
        </div>

        <div className="space-y-24 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.id} 
                id={`step-${index + 1}`}
                className={`flex flex-col md:flex-row gap-12 items-center scroll-mt-32 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Text Side */}
                <div className="flex-1 md:w-1/2 z-10">
                  <div className={`flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-4xl font-bold text-slate-800 font-mono">{step.id}</span>
                       <h3 className="text-2xl font-bold text-brand-400 tracking-tighter uppercase">{step.title}</h3>
                    </div>
                    <h4 className="text-xl md:text-2xl text-white font-bold tracking-tight mb-4">{step.headline}</h4>
                    <p className="text-slate-400 leading-relaxed mb-6 text-lg">{step.desc}</p>
                    
                    <div className={`flex gap-3 flex-wrap ${isEven ? 'justify-start' : 'justify-end'}`}>
                      {step.unlocks.map((u, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800/80 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-300 border border-slate-700 backdrop-blur-sm">
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon/Visual Side */}
                <div className="flex-1 md:w-1/2 flex justify-center z-10 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-dark-950 border border-brand-500 flex items-center justify-center text-brand-400 shadow-[0_0_40px_rgba(56,189,248,0.4)] z-20 relative">
                    <step.icon size={32} />
                  </div>
                  {/* Subtle Halo behind icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl animate-pulse-slow"></div>

                  {/* Small arrows on mobile only */}
                   {index !== steps.length - 1 && (
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-slate-700 md:hidden">
                      <ArrowDown size={24} />
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
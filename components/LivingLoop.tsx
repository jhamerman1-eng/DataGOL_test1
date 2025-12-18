import React from 'react';
import { Layers, BarChart3, MessageSquareMore, Zap, CheckCircle2, ArrowRight, ExternalLink, Link as LinkIcon, PlayCircle } from 'lucide-react';

interface LivingLoopProps {
  onOpenAgent?: () => void;
}

const steps = [
  {
    id: 'unify',
    label: 'Unify',
    title: 'All your signals, finally speaking the same language',
    icon: Layers,
    color: 'emerald',
    bgColor: 'bg-emerald-500/10',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    description: 'Bring usage analytics, CRM data, support interactions, retention cohorts, and operational context into one consistent layer. No stitching. No drift. No guessing.',
    bullets: [
      'Ingest from 200+ native connectors',
      'Real-time data synchronization',
      'Unified semantic mapping'
    ],
    buttons: [
      { label: 'Drill Down to Architecture', icon: ArrowRight, primary: true },
      { label: 'Manage Connections', icon: LinkIcon, primary: false }
    ]
  },
  {
    id: 'understand',
    label: 'Understand',
    title: 'Understand in Context',
    icon: BarChart3,
    color: 'amber',
    bgColor: 'bg-amber-500/10',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    description: 'See what matters — instantly, in the language you use. DataGOL builds the visualization that best answers it and explains why things changed.',
    bullets: [
      'Not a blackbox → see formulas',
      'Key insights surfaced automatically',
      'Dynamic visualizations'
    ],
    buttons: [
      { label: 'Explore Understand Page', icon: ArrowRight, primary: true }
    ]
  },
  {
    id: 'ask',
    label: 'Ask',
    title: 'Ask Naturally',
    icon: MessageSquareMore,
    color: 'blue',
    bgColor: 'bg-blue-500/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    description: 'Explore your data in plain English. No queries, no SQL — just type what you need to know. DataGOL turns your question into an instant view.',
    bullets: [
      'Natural language processing',
      'Context-aware responses',
      'Expert architectural insights'
    ],
    buttons: [
      { label: 'Access ContextOS', icon: Zap, primary: true, isAction: true }
    ]
  },
  {
    id: 'execute',
    label: 'Execute',
    title: 'Act on Insight',
    icon: Zap,
    color: 'rose',
    bgColor: 'bg-rose-500/10',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    description: 'From recommendation to action (agentic flow). Once an opportunity or risk is detected, the platform can launch automated workflows or trigger updates.',
    bullets: [
      'Automated workflow triggers',
      'Cross-platform execution',
      'Agentic response cycles'
    ],
    buttons: [
      { label: 'View Workflow Engine', icon: ArrowRight, primary: true }
    ]
  },
  {
    id: 'verify',
    label: 'Verify',
    title: 'Proof in Performance',
    icon: CheckCircle2,
    color: 'indigo',
    bgColor: 'bg-indigo-500/10',
    accentColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    description: 'Every action taken is measured, governed, and verified against your core KPIs. No more "trust me" reports — only verified proof.',
    bullets: [
      'Full audit traceability',
      'Outcome-based measurement',
      'Governance by design'
    ],
    buttons: [
      { label: 'View Verification Hub', icon: ArrowRight, primary: true }
    ]
  }
];

export const LivingLoop: React.FC<LivingLoopProps> = ({ onOpenAgent }) => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {steps.map((step, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={step.id} className="relative">
            {/* Main Container */}
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
              
              {/* Visual Side (Placeholder for Screenshot/UI) */}
              <div className="w-full lg:w-1/2">
                <div className={`relative aspect-video rounded-2xl border ${step.borderColor} ${step.bgColor} overflow-hidden group shadow-2xl`}>
                  {/* Abstract UI representation */}
                  <div className="absolute inset-0 bg-dark-950/40 p-6 flex items-center justify-center">
                    <div className="relative w-full h-full border border-white/5 rounded-lg bg-dark-900/80 flex flex-col p-4">
                        <div className="h-4 w-1/3 bg-white/5 rounded mb-4"></div>
                        <div className="flex-1 grid grid-cols-3 gap-4">
                           <div className="bg-white/5 rounded"></div>
                           <div className="bg-white/5 rounded col-span-2"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                           <PlayCircle size={48} className={step.accentColor} />
                        </div>
                    </div>
                  </div>
                  {/* Step Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-dark-950/80 backdrop-blur px-3 py-1 rounded border border-white/10 text-[10px] font-bold tracking-widest text-white uppercase">
                      {step.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Visual Identifier */}
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md ${step.bgColor} ${step.accentColor}`}>
                    <step.icon size={16} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-slate-500 uppercase">
                    Loop Identifier
                  </span>
                </div>

                {/* Header */}
                <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  {step.title}
                </h3>

                {/* Description & Bullets */}
                <div className="space-y-4">
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <div className={`w-1.5 h-1.5 rounded-full ${step.bgColor.replace('/10', '/50')}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {step.buttons.map((btn, btnIdx) => (
                    <button
                      key={btnIdx}
                      onClick={() => btn.isAction && onOpenAgent ? onOpenAgent() : undefined}
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300
                        ${btn.primary 
                          ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-xl' 
                          : 'bg-dark-900 border border-slate-700 text-slate-300 hover:bg-slate-800'
                        }
                      `}
                    >
                      {btn.label}
                      <btn.icon size={16} />
                    </button>
                  ))}
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold ml-2">
                     <ArrowRight size={14} />
                     <span>Send to primary page</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line (Vertical) */}
            {idx !== steps.length - 1 && (
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/10 to-transparent hidden lg:block" />
            )}
          </div>
        );
      })}
    </div>
  );
};
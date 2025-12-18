import React, { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { LivingLoop } from './components/LivingLoop';
import { TeamsHub } from './components/TeamsHub';
import { LoopDeepDive } from './components/LoopDeepDive';
import { IndustryHub } from './components/IndustryHub';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { 
  X, ChevronDown,
  ShoppingCart, Database, Target, TrendingUp, Users, Shield,
  ShoppingBag, Stethoscope, Landmark, Truck
} from 'lucide-react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Manual', val: 120 },
  { name: 'DataGol', val: 30 },
];

function App() {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  return (
    <div className={`min-h-screen font-sans bg-dark-950 text-slate-50 selection:bg-brand-500/30 ${isAgentOpen ? 'overflow-hidden' : ''}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>DataGOL</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
            <a href="#how-it-works" className="hover:text-white transition-colors">Product</a>
            
            {/* Teams Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-white transition-colors py-4 focus:outline-none">
                Teams <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-950 border border-slate-800 rounded-xl p-2 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl ring-1 ring-white/10">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-3 pt-2">Solutions By Team</div>
                  <div className="flex flex-col gap-1">
                    <a href="https://ai.studio/apps/drive/1CkJ97HuiDR_igvEQZ7LZJk8-nxJWexoe?fullscreenApplet=true" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <ShoppingCart size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Product</span>
                    </a>
                    <a href="https://ai.studio/apps/drive/1w_sUmmVzf9QUgJKflQq1JAyJajqyUrhX?fullscreenApplet=true" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Database size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Data</span>
                    </a>
                    <a href="/solutions/team/sales" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Target size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Sales</span>
                    </a>
                    <a href="https://ai.studio/apps/drive/1NT-OfacqWS52tUywFRgGRwAMUtpAsDtf?fullscreenApplet=true" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <TrendingUp size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Finance</span>
                    </a>
                    <a href="https://ai.studio/apps/drive/1J57_e5cDqpu35fhwQrfHpjyMNv7cOzRx?fullscreenApplet=true" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Users size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Customer Success</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-white transition-colors py-4 focus:outline-none">
                Industries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-950 border border-slate-800 rounded-xl p-2 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl ring-1 ring-white/10">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-3 pt-2">Vertical Solutions</div>
                  <div className="flex flex-col gap-1">
                    <a href="#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <ShoppingBag size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>E-Commerce</span>
                    </a>
                    <a href="#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Shield size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Insurance</span>
                    </a>
                    <a href="#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Stethoscope size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Healthcare</span>
                    </a>
                    <a href="#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Landmark size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Financial Services</span>
                    </a>
                    <a href="#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-all group/item">
                      <Truck size={16} className="text-slate-500 group-hover/item:text-brand-400 transition-colors" /> 
                      <span>Supply Chain</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex gap-4">
            <button className="hidden md:block text-slate-300 hover:text-white text-sm font-medium">Log in</button>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-brand-500/20">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Agent Modal */}
      {isAgentOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" onClick={() => setIsAgentOpen(false)}></div>
          <div className="relative w-full max-w-2xl animate-fade-in-up">
            <button 
              onClick={() => setIsAgentOpen(false)}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Close Agent <X size={20} />
            </button>
            <ChatInterface />
          </div>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-300 text-xs font-semibold mb-6 border border-brand-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              v6.2 Now Live
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
              The AI-Native System That Turns <span className="gradient-text">Unified Data</span> Into Verified Action
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              DataGOL unifies data, provides context, and turns every decision into trusted action. No more dashboard diving. Just ask, execute, and verify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand-500/20">
                See How It Works
              </button>
              <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700">
                Documentation
              </button>
            </div>
          </div>
          
          {/* Agent Chat Interface */}
          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl blur opacity-30"></div>
             <ChatInterface />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 bg-dark-950 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">
            Powering the next generation of data-native enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {['NEXIS', 'VORTEX', 'AETHER', 'QUANTUM', 'ORBIT'].map(logo => (
               <span key={logo} className="text-xl md:text-2xl font-bold tracking-tighter text-slate-300 hover:text-white cursor-default">
                 {logo}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LIVING LOOP */}
      <section id="how-it-works" className="py-24 bg-dark-900 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Product Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            A continuous intelligence loop that connects your entire business.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
             DataGOL transforms messy information into reliable, operational action through five interconnected steps.
          </p>
        </div>
        <LivingLoop onOpenAgent={() => setIsAgentOpen(true)} />
      </section>

      {/* SECTION 3: TEAMS HUB */}
      <div id="teams">
        <TeamsHub />
      </div>

      {/* SECTION 4: LOOP DEEP DIVE */}
      <LoopDeepDive />

      {/* CUSTOMER QUOTES (MOVED) */}
      <Testimonials />

      {/* SECTION 5: INDUSTRY HUB */}
      <IndustryHub onOpenAgent={() => setIsAgentOpen(true)} />

      {/* SECTION 6: ROI */}
      <section className="py-24 bg-brand-900/10 border-y border-brand-500/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Measurable Outcomes</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">Measured results. Verified outcomes.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">DataGOL doesn’t just produce insights — it closes the loop with verifiable action.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-400 font-mono">3x</div>
                  <div className="text-slate-200">Faster insight-to-execution cycles</div>
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                 <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-400 font-mono">70%</div>
                  <div className="text-slate-200">Fewer manual reconciliations</div>
                </div>
                 <div className="w-full h-[1px] bg-white/10"></div>
                 <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-400 font-mono">25%</div>
                  <div className="text-slate-200">More accurate forecasts</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                 <button className="text-brand-400 font-semibold hover:text-brand-300">View Case Studies →</button>
              </div>
            </div>

            <div className="bg-dark-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Operational Drag (Hours/Week)</h3>
              <p className="text-sm text-slate-400 mb-6">Comparison of manual processes vs DataGOL automation.</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBar data={data} layout="vertical" barSize={40}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff'}}
                    />
                    <Bar dataKey="val" fill="#38bdf8" radius={[0, 4, 4, 0]} />
                  </RechartsBar>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST */}
      <section className="py-24 bg-dark-950">
         <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Governance & Trust</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">Enterprise-grade security. AI-native governance.</h2>
           
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
               <div className="text-emerald-500 mb-4"><Shield size={28} /></div>
               <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Role-Based Access</h3>
               <p className="text-sm text-slate-400 leading-relaxed">Granular permissions ensuring the right people see the right data.</p>
             </div>
             <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
               <div className="text-purple-500 mb-4"><Target size={28} /></div>
               <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Transparent Reasoning</h3>
               <p className="text-sm text-slate-400 leading-relaxed">Every agent output comes with a citation trail and logic explanation.</p>
             </div>
             <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
               <div className="text-blue-500 mb-4"><Database size={28} /></div>
               <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Full Auditability</h3>
               <p className="text-sm text-slate-400 leading-relaxed">Every workflow execution is logged, versioned, and recoverable.</p>
             </div>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
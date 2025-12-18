import React from 'react';
import { ArrowRight } from 'lucide-react';

const quotes = [
  {
    name: "Prakash B.",
    role: "CTO at a Healthcare SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    eyebrow: "Unify data at one place",
    quote: "We considered various traditional data warehouses, including cloud vendors and ETL tools, but found these solutions are costly, time consuming for implementation and insufficient. DataGOL offered a unified, scalable platform that significantly reduced complexity and cost. They implemented significantly faster (8 to 10 weeks) compared to traditional methods (9 + months).",
    brandLogo: "HEALTHCARE SAAS"
  },
  {
    name: "Hoyin Cheung",
    role: "CEO at REMO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    eyebrow: "Accelerate product innovations",
    quote: "DataGol delivered on its promise to simplify data analysis. We get insights in hours instead of weeks, saving money and engineering resources. It truly democratizes data within our company.",
    brandLogo: "REMO"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Texture for Depth Perception */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {quotes.map((item, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-[24px] p-8 md:p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="relative">
                   <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-[#312e81] font-bold text-xl leading-tight tracking-tight">{item.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.role}</p>
                </div>
              </div>

              {/* Eyebrow */}
              <div className="text-[#312e81] font-extrabold text-lg mb-4 tracking-tight">
                {item.eyebrow}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-[17px] leading-[1.6] mb-12 flex-grow">
                “{item.quote}”
              </blockquote>

              {/* Case Study Link Styled exactly like the request */}
              <div className="mt-auto">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-[#4c1d95]/10 bg-[#f5f3ff] text-[#4c1d95] text-sm font-bold hover:bg-[#ede9fe] transition-all group/btn shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

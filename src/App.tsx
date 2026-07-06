import React from "react";
import { 
  ShieldCheck, 
  Activity, 
  Sparkles,
  Building2
} from "lucide-react";
import BusinessSuiteView from "./components/BusinessSuiteView";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative overflow-x-hidden">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Corporate Header Nav */}
      <header className="border-b border-stone-200/60 bg-white/80 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center shadow-sm">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-black text-base tracking-tight text-stone-900 flex items-center gap-1.5 leading-none">
                VentureFlow AI
              </h1>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mt-1 block">
                Enterprise Multi-Agent Pipeline & Cost Suite
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-800 font-mono text-[10px] font-medium">Google Search Grounding Connected</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <BusinessSuiteView />
      </main>

      {/* High-Fidelity Professional Footer */}
      <footer className="border-t border-stone-200/60 bg-white py-12 mt-20 text-center text-xs text-stone-500">
        <p className="font-display text-stone-800 font-medium">
          VentureFlow AI – Collaborative Enterprise Strategy & Optimization Console
        </p>
        <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-stone-400">
          Powered by Gemini 3.5 & Google Search Grounding Nodes • Secure Sandbox Environment
        </p>
      </footer>

    </div>
  );
}

import React from "react";
import { 
  Shield, 
  Search, 
  AlertOctagon, 
  Sparkles, 
  Award, 
  Users, 
  Activity, 
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  LineChart,
  Brain,
  SearchCode
} from "lucide-react";
import { AgentWorkflowStep } from "../types";

interface AgentWorkflowViewProps {
  workflow: AgentWorkflowStep[];
  isInvestigating: boolean;
}

const AGENT_ICONS: Record<string, React.ReactNode> = {
  "Pipeline Auditor Agent": <TrendingUp className="w-5 h-5 text-indigo-600" />,
  "Anomaly Audit Agent": <Shield className="w-5 h-5 text-amber-600" />,
  "Market Competitor Intel Agent": <Search className="w-5 h-5 text-emerald-600" />,
  "Orchestrator Agent": <Brain className="w-5 h-5 text-rose-600" />,
};

export default function AgentWorkflowView({ workflow, isInvestigating }: AgentWorkflowViewProps) {
  return (
    <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-stone-400 to-amber-500" />
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
            VentureFlow Collaborative Agent Workspace
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Real-time visual playback of collaborative multi-agent auditing & reasoning
          </p>
        </div>
        
        {isInvestigating && (
          <span className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-medium text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Agents active...
          </span>
        )}
      </div>

      <div className="relative border-l border-stone-200 ml-4 pl-8 space-y-6">
        {workflow.length === 0 && (
          <div className="text-center py-8 text-stone-400 flex flex-col items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-stone-300" />
            <p className="text-sm font-display font-medium text-stone-700">No audits run yet</p>
            <p className="text-xs max-w-xs">Enter data above and click the audit button to see the multi-agent system trace its reasoning.</p>
          </div>
        )}

        {workflow.map((step, idx) => {
          const isLast = idx === workflow.length - 1;
          const icon = AGENT_ICONS[step.agentName] || <HelpCircle className="w-5 h-5 text-stone-400" />;
          
          let statusBorder = "border-stone-200/60";
          let statusBg = "bg-[#FAF9F5]/40";
          
          if (step.status === "running") {
            statusBorder = "border-emerald-500 shadow-sm";
            statusBg = "bg-white animate-step-pulse";
          } else if (step.status === "success") {
            statusBorder = "border-emerald-500/20";
            statusBg = "bg-white";
          } else if (step.status === "warning") {
            statusBorder = "border-amber-500/20";
            statusBg = "bg-white";
          } else if (step.status === "error") {
            statusBorder = "border-red-500/20";
            statusBg = "bg-white";
          }

          return (
            <div key={step.id || idx} className="relative group transition-all duration-300">
              {/* Outer dot marker on the line */}
              <div className={`absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                step.status === "running" ? "bg-emerald-600 border-emerald-500 scale-110" : "bg-white border-stone-300"
              }`}>
                {step.status === "success" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                {step.status === "warning" && <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                {step.status === "error" && <AlertTriangle className="w-3.5 h-3.5 text-red-500" />}
                {step.status === "info" && <HelpCircle className="w-3.5 h-3.5 text-sky-600" />}
                {step.status === "running" && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Agent card body */}
              <div className={`border rounded-xl p-4 transition-all ${statusBorder} ${statusBg} shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-stone-50 border border-stone-200/60">
                      {icon}
                    </div>
                    <span className="font-display font-bold text-sm text-stone-950">
                      {step.agentName}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-stone-400">
                    {step.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-stone-700 leading-relaxed font-sans">
                  {step.message}
                </p>
                
                {step.details && (
                  <div className="mt-2 text-xs font-mono text-stone-600 bg-[#FAF9F5]/80 p-2.5 rounded border border-stone-200/50 leading-relaxed break-words">
                    {step.details}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

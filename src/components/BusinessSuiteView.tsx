import React, { useState } from "react";
import { 
  Building2, 
  TrendingUp, 
  ShieldAlert, 
  DollarSign, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Brain, 
  Activity, 
  Layers, 
  FileSpreadsheet, 
  Lightbulb, 
  ChevronRight, 
  CornerDownRight,
  Info,
  Play
} from "lucide-react";
import { 
  AgentWorkflowStep, 
  PipelineOptimizationResult, 
  ExpenseRationalizationResult, 
  InnovationAnalysisResult 
} from "../types";
import AgentWorkflowView from "./AgentWorkflowView";

export default function BusinessSuiteView() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "expense" | "innovation">("pipeline");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 1. Pipeline State
  const [pipelineText, setPipelineText] = useState(
    `Stage: Discovery | Deals: 40 | Value: $400k | Avg Days: 4 | Conv: 100%
Stage: Evaluation | Deals: 18 | Value: $360k | Avg Days: 14 | Conv: 45%
Stage: Proposal Draft | Deals: 12 | Value: $300k | Avg Days: 10 | Conv: 66%
Stage: Procurement Negs | Deals: 5 | Value: $190k | Avg Days: 28 | Conv: 41%`
  );
  const [businessModel, setBusinessModel] = useState("B2B Enterprise SaaS");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [pipelineResult, setPipelineResult] = useState<PipelineOptimizationResult | null>({
    pipelineHealthScore: 72,
    totalValue: 1250000,
    optimizedValueForecast: 1680000,
    bottlenecks: [
      "Severe 55% deal leakage detected immediately after the Technical Evaluation stage.",
      "Opaque legal & procurement reviews in Negotiation stage exceed the 20-day standard velocity threshold."
    ],
    actionPlan: [
      "Deploy self-service sandboxes during the Discovery stage to shorten technical vetting by 6 days.",
      "Establish pre-approved mutual indemnity legal templates with procurement to bypass standard custom reviews."
    ],
    stages: [
      { stageName: "Lead Discovery", count: 40, value: 400000, avgDurationDays: 4, conversionRate: 100 },
      { stageName: "Technical Evaluation", count: 18, value: 360000, avgDurationDays: 14, conversionRate: 45 },
      { stageName: "Proposal Draft", count: 12, value: 300000, avgDurationDays: 10, conversionRate: 66 },
      { stageName: "Procurement Negotiation", count: 5, value: 190000, avgDurationDays: 28, conversionRate: 41 }
    ],
    riskyDeals: [
      {
        dealName: "Acme Cloud Infrastructure Migration",
        value: 120000,
        currentStage: "Procurement Negotiation",
        stagnantDays: 38,
        riskReason: "Procurement general counsel requested customized IP indemnification clauses.",
        mitigationStrategy: "Execute standard fallback clause 'B-3' already approved by executive leadership."
      },
      {
        dealName: "Global Retail POS Expansion",
        value: 75000,
        currentStage: "Technical Evaluation",
        stagnantDays: 24,
        riskReason: "Technical lead resigned, stalling current API validation checks.",
        mitigationStrategy: "Re-assign regional solution architect to finalize verification within 48 hours."
      }
    ],
    workflow: [
      { id: "pipe-w1", agentName: "Pipeline Auditor Agent", timestamp: "08:12:10 AM", status: "success", message: "Successfully parsed deal staging matrices and calibrated deal conversion rates." },
      { id: "pipe-w2", agentName: "Pipeline Auditor Agent", timestamp: "08:12:12 AM", status: "warning", message: "Detected high-risk deal stagnation in procurement stages.", details: "Identified 2 critical risk items exceeding velocity tolerances." },
      { id: "pipe-w3", agentName: "Orchestrator Agent", timestamp: "08:12:14 AM", status: "success", message: "Pipeline strategic intelligence audit finalized.", details: "Health score calculated: 72/100." }
    ]
  });

  // 2. Expense State
  const [expenseText, setExpenseText] = useState(
    `2026-06-01 | Amazon Web Services | Cloud Infrastructure | $4,800 | Status: Active
2026-06-02 | GitHub Enterprise | Developer Licenses | $1,500 | Status: Active (Unused seats)
2026-06-04 | Luxury Dinners & Bar | Entertainment | $950 | Status: Unaudited
2026-06-05 | Figma Inc. | Design Software | $320 | Status: Active
2026-06-06 | Zoom Conferencing | Communication | $240 | Status: Active (Potential Teams overlap)`
  );
  const [isAuditing, setIsAuditing] = useState(false);
  const [expenseResult, setExpenseResult] = useState<ExpenseRationalizationResult | null>({
    auditScore: 81,
    totalAudited: 7810,
    totalPotentialSavings: 1840,
    anomaliesDetectedCount: 2,
    savingsOpportunities: [
      "Deprovision 30+ idle seat licenses on GitHub Enterprise showing zero active logins for 60 consecutive days. Potential savings: $1,100.",
      "Consolidate Zoom Conferencing into existing corporate Google Workspace premium video channels. Potential savings: $240."
    ],
    expenseItems: [
      { id: "exp-1", date: "2026-06-01", merchant: "Amazon Web Services", category: "Cloud Infrastructure", amount: 4800, riskCategory: "low", rationalizationAction: "Optimize idle database EC2 instances to decrease baseline cost by 10%." },
      { id: "exp-2", date: "2026-06-02", merchant: "GitHub Enterprise", category: "SaaS/Software", amount: 1500, riskCategory: "medium", anomalyReason: "Overage of 35 seats with zero commits or logins in the trailing 60 days.", rationalizationAction: "Downgrade unused seat seats to basic tier immediately." },
      { id: "exp-3", date: "2026-06-04", merchant: "Luxury Dinners & Bar", category: "Entertainment", amount: 950, riskCategory: "high", anomalyReason: "Single dinner transaction exceeds standard executive travel entertainment per-diem cap of $200 by 375%.", rationalizationAction: "Flag for manager review and manual expense reimbursement override." },
      { id: "exp-4", date: "2026-06-05", merchant: "Figma Inc.", category: "SaaS/Software", amount: 320, riskCategory: "low", rationalizationAction: "Retain. High utilization rates verified." }
    ],
    workflow: [
      { id: "exp-w1", agentName: "Anomaly Audit Agent", timestamp: "08:15:02 AM", status: "success", message: "Parsed raw card ledger logs and cross-referenced categories." },
      { id: "exp-w2", agentName: "Anomaly Audit Agent", timestamp: "08:15:04 AM", status: "warning", message: "Identified SaaS seat license redundancies and corporate policy expense overages.", details: "Flagged $1,840 in total potential operating budget rationalizations." },
      { id: "exp-w3", agentName: "Orchestrator Agent", timestamp: "08:15:05 AM", status: "success", message: "Expense audit reports aggregated successfully." }
    ]
  });

  // 3. Innovation State
  const [innovationText, setInnovationText] = useState("Unified Multi-Tenant Compliance Guardrails for Generative AI Corporate Workloads");
  const [targetMarket, setTargetMarket] = useState("Enterprise Security Directors & IT Counsel");
  const [isInnovating, setIsInnovating] = useState(false);
  const [innovationResult, setInnovationResult] = useState<InnovationAnalysisResult | null>({
    marketFitScore: 85,
    marketOpportunitySize: "$3.8B TAM by 2029 with 28% CAGR",
    competitiveThreatLevel: "medium",
    competitors: [
      {
        name: "LlamaGuard & PromptArmor Solutions",
        strengths: [
          "First-mover advantage in lightweight open-source input classification.",
          "Good raw integration into basic PyTorch pipelines."
        ],
        vulnerabilities: [
          "Lack of high-level multi-tenant audit logs for corporate compliance counsel.",
          "Opaque pricing scaling curves for cloud deployments."
        ],
        estimatedMarketShare: 20
      },
      {
        name: "Enterprise Cloud-Native Shield Layers",
        strengths: [
          "Highly native to AWS/Azure environments.",
          "Direct enterprise master service agreements already in place."
        ],
        vulnerabilities: [
          "Suboptimal compatibility with third-party localized custom LLMs.",
          "Opaque and complicated usage pricing patterns."
        ],
        estimatedMarketShare: 35
      }
    ],
    regulatoryMoats: [
      "SOC 2 Type II certified pipeline assertions",
      "EU AI Act Article 6 Compliance Audits & Sovereign EU data localized processing"
    ],
    pivotsAndAvenues: [
      "Integrate an automated liability compliance ledger mapping prompting logs directly to global legal liability indexes.",
      "Formulate custom on-premise air-gapped container configurations to capture high-security financial banking clients."
    ],
    executiveSummary: "This innovation concept addresses a high-value corporate security bottleneck. By offering a multi-tenant audit dashboard mapped directly to active global AI safety frameworks, the product can bypass generic security layers and secure lucrative enterprise accounts.",
    workflow: [
      { id: "inn-w1", agentName: "Market Competitor Intel Agent", timestamp: "08:18:22 AM", status: "success", message: "Initiated live Google Search Grounding across active corporate security and startup registries.", details: "Mapped search query parameters: 'Enterprise GenAI compliance input guardrails software'." },
      { id: "inn-w2", agentName: "Market Competitor Intel Agent", timestamp: "08:18:24 AM", status: "success", message: "Analyzed 2 major competitors and highlighted security compliance niches.", details: "Grounded references discovered in VC portfolios." },
      { id: "inn-w3", agentName: "Orchestrator Agent", timestamp: "08:18:26 AM", status: "success", message: "Assembled strategic innovation map.", details: "Product-Market Fit Index calibrated at 85/100." }
    ]
  });

  // Actions
  const handlePipelineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pipelineText.trim()) return;

    setIsOptimizing(true);
    setErrorMsg(null);
    setPipelineResult(null);

    try {
      const res = await fetch("/api/business/optimize-pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pipelineRawText: pipelineText, businessModel })
      });

      if (!res.ok) {
        let errMsg = `Unable to contact Pipeline Optimization Agent (HTTP ${res.status}).`;
        try {
          const errObj = await res.json();
          if (errObj && (errObj.error || errObj.message)) {
            errMsg = errObj.error || errObj.message;
          }
        } catch {
          try {
            const rawText = await res.text();
            if (rawText) errMsg = rawText;
          } catch {}
        }
        throw new Error(errMsg);
      }

      const data: PipelineOptimizationResult = await res.json();
      setPipelineResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred during pipeline optimization.");
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseText.trim()) return;

    setIsAuditing(true);
    setErrorMsg(null);
    setExpenseResult(null);

    try {
      const res = await fetch("/api/business/rationalize-expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expensesRawText: expenseText })
      });

      if (!res.ok) {
        let errMsg = `Unable to contact Expense Rationalization Agent (HTTP ${res.status}).`;
        try {
          const errObj = await res.json();
          if (errObj && (errObj.error || errObj.message)) {
            errMsg = errObj.error || errObj.message;
          }
        } catch {
          try {
            const rawText = await res.text();
            if (rawText) errMsg = rawText;
          } catch {}
        }
        throw new Error(errMsg);
      }

      const data: ExpenseRationalizationResult = await res.json();
      setExpenseResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred during expense rationalization.");
    } finally {
      setIsAuditing(false);
    }
  };

  const handleInnovationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!innovationText.trim()) return;

    setIsInnovating(true);
    setErrorMsg(null);
    setInnovationResult(null);

    try {
      const res = await fetch("/api/business/innovate-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conceptText: innovationText, targetMarket })
      });

      if (!res.ok) {
        let errMsg = `Unable to contact Competitor Intel Agent (HTTP ${res.status}).`;
        try {
          const errObj = await res.json();
          if (errObj && (errObj.error || errObj.message)) {
            errMsg = errObj.error || errObj.message;
          }
        } catch {
          try {
            const rawText = await res.text();
            if (rawText) errMsg = rawText;
          } catch {}
        }
        throw new Error(errMsg);
      }

      const data: InnovationAnalysisResult = await res.json();
      setInnovationResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred during competitive intelligence searches.");
    } finally {
      setIsInnovating(false);
    }
  };

  return (
    <div className="space-y-8" id="business-suite-root">
      {/* Dynamic Header Banner */}
      <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] relative overflow-hidden" id="biz-suite-header">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-stone-400 to-amber-500" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div id="biz-header-text">
            <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
              Agents for Business Mode
            </span>
            <h3 className="font-display font-black text-2xl text-stone-900 mt-2 flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-emerald-600" />
              VentureFlow Enterprise Workspace
            </h3>
            <p className="text-xs text-stone-500 mt-1.5 max-w-2xl leading-relaxed">
              Collaborative multi-agent engines optimizing corporate pipeline friction, compliance audits, zombie subscription overheads, and real-time competitor maps grounded by Google Search.
            </p>
          </div>

          {/* Action Tabs Selector */}
          <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200/60 self-start lg:self-center" id="biz-tabs">
            <button
              id="btn-tab-pipeline"
              onClick={() => { setActiveTab("pipeline"); setErrorMsg(null); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold font-display transition-all cursor-pointer ${
                activeTab === "pipeline" 
                  ? "bg-white text-stone-900 shadow-sm border border-stone-200/40" 
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Pipeline Optimizer
            </button>
            <button
              id="btn-tab-expense"
              onClick={() => { setActiveTab("expense"); setErrorMsg(null); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold font-display transition-all cursor-pointer ${
                activeTab === "expense" 
                  ? "bg-white text-stone-900 shadow-sm border border-stone-200/40" 
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Expense Rationalizer
            </button>
            <button
              id="btn-tab-innovation"
              onClick={() => { setActiveTab("innovation"); setErrorMsg(null); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold font-display transition-all cursor-pointer ${
                activeTab === "innovation" 
                  ? "bg-white text-stone-900 shadow-sm border border-stone-200/40" 
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Competitor Intel
            </button>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3 text-xs text-red-700" id="biz-error-alert">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <div>
            <span className="font-bold">Execution Error: </span>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}

      {/* 1. PIPELINE TAB */}
      {activeTab === "pipeline" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="tab-pipeline-content">
          {/* Settings Panel */}
          <div className="lg:col-span-5 bg-white border border-stone-200/60 p-6 rounded-2xl shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-6">
            <div>
              <h4 className="font-display font-bold text-sm text-stone-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                Pipeline Parameters
              </h4>
              <p className="text-[11px] text-stone-500 mt-1">
                Customize operational model and review stages to trigger pipeline recommendations.
              </p>
            </div>

            <form onSubmit={handlePipelineSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">Business & Delivery Model</label>
                <select
                  value={businessModel}
                  onChange={(e) => setBusinessModel(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-lg p-2.5 text-xs text-stone-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/10 outline-none transition-all cursor-pointer"
                >
                  <option value="B2B Enterprise SaaS">B2B Enterprise SaaS</option>
                  <option value="Direct-To-Consumer Commerce">Direct-To-Consumer Commerce</option>
                  <option value="Hardware / Supply Chain Retail">Hardware / Supply Chain Retail</option>
                  <option value="Corporate Legal & Consulting Ops">Corporate Legal & Consulting Ops</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">
                  Raw Staging Records / Pipeline Analytics
                </label>
                <textarea
                  rows={6}
                  value={pipelineText}
                  onChange={(e) => setPipelineText(e.target.value)}
                  placeholder="Paste stage details, counts, stagnant indices, or conversion leakages..."
                  className="w-full bg-stone-50/60 border border-stone-200 rounded-lg p-3 text-xs text-stone-800 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/10 outline-none resize-none leading-relaxed font-mono transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isOptimizing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-100 disabled:text-stone-400 text-white font-display font-bold text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isOptimizing ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-white" />
                    Calculating Velocity Curves...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    Run Pipeline Optimization Audit
                  </>
                )}
              </button>
            </form>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-[11px] text-stone-600 leading-relaxed">
              <span className="font-bold block text-stone-800 mb-1">Audit Coverage:</span>
              Pipeline Auditor Agents automatically scan stage-to-stage conversion leaks, compute forecasting impact, and identify contract bottlenecks.
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 space-y-6">
            {isOptimizing && (
              <div className="bg-white border border-stone-200/60 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                <Brain className="w-10 h-10 text-emerald-600 animate-bounce mb-3" />
                <h5 className="font-display font-bold text-sm text-stone-800">Pipeline Auditor Agent Active</h5>
                <p className="text-xs text-stone-500 mt-1 max-w-sm leading-relaxed">
                  Mapping transaction records, analyzing pipeline leakages, and drafting mitigation procedures...
                </p>
              </div>
            )}

            {pipelineResult && !isOptimizing && (
              <div className="space-y-6">
                {/* Stats Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Pipeline Health</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display font-black text-2xl text-emerald-600">
                        {pipelineResult.pipelineHealthScore}%
                      </span>
                      <span className="text-[10px] text-stone-400">/ 100</span>
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Raw Value</span>
                    <div className="flex items-baseline gap-1 mt-1 text-stone-900 font-display font-black text-xl">
                      ${pipelineResult.totalValue.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Optimized Forecast</span>
                    <div className="flex items-baseline gap-1 mt-1 text-emerald-700 font-display font-black text-xl">
                      ${pipelineResult.optimizedValueForecast.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Main analysis */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-5">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Stage Conversion Analysis</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Calculated conversion ratios and average sales cycle lengths.</p>
                  </div>

                  <div className="space-y-4">
                    {pipelineResult.stages.map((stage, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-stone-700">
                          <span className="font-semibold text-stone-900">{stage.stageName} ({stage.count} deals)</span>
                          <span className="font-mono text-stone-500">
                            ${stage.value.toLocaleString()} | {stage.avgDurationDays} days | conv: {stage.conversionRate}%
                          </span>
                        </div>
                        <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200/40">
                          <div 
                            className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${stage.conversionRate}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-red-50/40 border border-red-100 p-4 rounded-xl">
                      <span className="text-[10px] font-mono text-red-700 font-bold uppercase block mb-2">
                        Conversion Bottlenecks
                      </span>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {pipelineResult.bottlenecks.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-500 select-none">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-xl">
                      <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase block mb-2">
                        Strategic Action Plan
                      </span>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {pipelineResult.actionPlan.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 select-none">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Risky deals */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Flagged Risks & High-Stagnation Accounts</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Active deal parameters requiring immediate corrective intervention.</p>
                  </div>

                  <div className="space-y-4">
                    {pipelineResult.riskyDeals.map((deal, idx) => (
                      <div key={idx} className="bg-[#FAF9F5]/80 p-4 rounded-xl border border-stone-200/60 space-y-2.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                          <span className="font-bold text-stone-900 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            {deal.dealName}
                          </span>
                          <span className="font-mono text-stone-500">
                            Value: <span className="text-stone-800 font-semibold">${deal.value.toLocaleString()}</span> | Stage: <span className="text-indigo-700 font-semibold">{deal.currentStage}</span>
                          </span>
                        </div>

                        <div className="text-xs space-y-2 pl-5.5 font-sans leading-relaxed text-stone-700">
                          <p>
                            <span className="text-[10px] font-mono uppercase text-red-600 font-bold block mb-0.5">Stagnancy Warning ({deal.stagnantDays} days):</span>
                            {deal.riskReason}
                          </p>
                          <p className="flex items-start gap-1.5 text-stone-600 bg-white p-2.5 rounded border border-stone-200/50">
                            <CornerDownRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="text-emerald-700 font-bold text-[10px] font-mono uppercase mr-1">Remediation Blueprint:</span>
                              {deal.mitigationStrategy}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow Logs */}
                <AgentWorkflowView workflow={pipelineResult.workflow} isInvestigating={isOptimizing} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. EXPENSE TAB */}
      {activeTab === "expense" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="tab-expense-content">
          {/* Settings Panel */}
          <div className="lg:col-span-5 bg-white border border-stone-200/60 p-6 rounded-2xl shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-6">
            <div>
              <h4 className="font-display font-bold text-sm text-stone-900 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Expense Ledger Audit
              </h4>
              <p className="text-[11px] text-stone-500 mt-1">
                Paste corporate card transaction statements to detect non-compliant spending or redundant tool licensing.
              </p>
            </div>

            <form onSubmit={handleExpenseSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">
                  Ledger Transactions (Date | Merchant | Category | Amount | Status)
                </label>
                <textarea
                  rows={8}
                  value={expenseText}
                  onChange={(e) => setExpenseText(e.target.value)}
                  placeholder="Paste transaction logs..."
                  className="w-full bg-stone-50/60 border border-stone-200 rounded-lg p-3 text-xs text-stone-800 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/10 outline-none resize-none leading-relaxed font-mono transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isAuditing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-100 disabled:text-stone-400 text-white font-display font-bold text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isAuditing ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-white" />
                    Auditing Card Ledgers...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    Verify Corporate Ledger Compliance
                  </>
                )}
              </button>
            </form>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-[11px] text-stone-600 leading-relaxed">
              <span className="font-bold block text-stone-800 mb-1">Corporate Card Guardrails:</span>
              Expense Rationalizer Agents map expenditures against standard business travel allowances and flag overlapping SaaS subscriptions automatically.
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 space-y-6">
            {isAuditing && (
              <div className="bg-white border border-stone-200/60 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                <Brain className="w-10 h-10 text-emerald-600 animate-bounce mb-3" />
                <h5 className="font-display font-bold text-sm text-stone-800">Anomaly Audit Agent Engaged</h5>
                <p className="text-xs text-stone-500 mt-1 max-w-sm leading-relaxed">
                  Scanning for policy violations, duplicate charges, and zombie SaaS subscriptions...
                </p>
              </div>
            )}

            {expenseResult && !isAuditing && (
              <div className="space-y-6">
                {/* Stats Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Prudency Index</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display font-black text-2xl text-emerald-600">
                        {expenseResult.auditScore}%
                      </span>
                      <span className="text-[10px] text-stone-400">/ 100</span>
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Total Audited</span>
                    <div className="flex items-baseline gap-1 mt-1 text-stone-900 font-display font-black text-xl">
                      ${expenseResult.totalAudited.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Leakage Identified</span>
                    <div className="flex items-baseline gap-1 mt-1 text-red-600 font-display font-black text-xl">
                      ${expenseResult.totalPotentialSavings.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Savings Panel */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Opportunities for Cost Rationalization</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Identified subscription overflows and non-compliant overheads.</p>
                  </div>

                  <div className="space-y-2.5">
                    {expenseResult.savingsOpportunities.map((o, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-200/60 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audited List */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Forensic Ledger Review</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Individual transaction breakdown with specific risk flags.</p>
                  </div>

                  <div className="space-y-4">
                    {expenseResult.expenseItems.map((item) => (
                      <div key={item.id} className="bg-[#FAF9F5]/80 p-4 rounded-xl border border-stone-200/60 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                          <span className="font-bold text-stone-900 flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${
                              item.riskCategory === "high" ? "bg-red-500 animate-pulse" :
                              item.riskCategory === "medium" ? "bg-amber-500" : "bg-emerald-500"
                            }`} />
                            {item.merchant}
                          </span>
                          <span className="font-mono text-stone-500">
                            Amount: <span className="text-stone-800 font-semibold">${item.amount.toLocaleString()}</span> | {item.category}
                          </span>
                        </div>

                        {item.anomalyReason && (
                          <p className="text-xs text-red-600 pl-3.5 leading-relaxed font-sans">
                            <span className="font-bold text-[10px] font-mono uppercase mr-1">Policy Violation:</span>
                            {item.anomalyReason}
                          </p>
                        )}

                        <p className="text-xs text-stone-600 pl-3.5 flex items-start gap-1">
                          <CornerDownRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="text-emerald-700 font-bold text-[10px] font-mono uppercase mr-1">Recommended Action:</span>
                            {item.rationalizationAction}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow Logs */}
                <AgentWorkflowView workflow={expenseResult.workflow} isInvestigating={isAuditing} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. INNOVATION TAB */}
      {activeTab === "innovation" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="tab-innovation-content">
          {/* Settings Panel */}
          <div className="lg:col-span-5 bg-white border border-stone-200/60 p-6 rounded-2xl shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-6">
            <div>
              <h4 className="font-display font-bold text-sm text-stone-900 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                Strategic Market Research
              </h4>
              <p className="text-[11px] text-stone-500 mt-1">
                Enter your innovation idea and let the agents query Google Search for actual competitor matrices.
              </p>
            </div>

            <form onSubmit={handleInnovationSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">
                  Corporate Product Concept / Innovation Brief
                </label>
                <textarea
                  rows={4}
                  value={innovationText}
                  onChange={(e) => setInnovationText(e.target.value)}
                  placeholder="e.g. Real-time multi-agent carbon offset auditor for global logistics firms..."
                  className="w-full bg-stone-50/60 border border-stone-200 rounded-lg p-3 text-xs text-stone-800 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/10 outline-none resize-none leading-relaxed transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">Target Audience & Market Sector</label>
                <input
                  type="text"
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  placeholder="e.g. Enterprise Security Directors, IT Counsel, Global SCM Planners..."
                  className="w-full bg-stone-50/60 border border-stone-200 rounded-lg p-2.5 text-xs text-stone-800 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/10 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isInnovating}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-100 disabled:text-stone-400 text-white font-display font-bold text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isInnovating ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-white" />
                    Querying Search Grounding Nodes...
                  </>
                ) : (
                  <>
                    <Search className="w-3.5 h-3.5 text-white" />
                    Search Competitors & Validate Fit
                  </>
                )}
              </button>
            </form>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-[11px] text-stone-600 leading-relaxed">
              <span className="font-bold block text-stone-800 mb-1">Google Grounded Intel:</span>
              Market Intelligence Agents run active web searches to isolate existing market startups, calculate Total Addressable Market (TAM), and map regulatory barriers.
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 space-y-6">
            {isInnovating && (
              <div className="bg-white border border-stone-200/60 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                <Brain className="w-10 h-10 text-emerald-600 animate-bounce mb-3" />
                <h5 className="font-display font-bold text-sm text-stone-800">Intel Agent Running Google Search Grounding</h5>
                <p className="text-xs text-stone-500 mt-1 max-w-sm leading-relaxed">
                  Querying patent indices, active tech blogs, and startup registries to compile competitor lists...
                </p>
              </div>
            )}

            {innovationResult && !isInnovating && (
              <div className="space-y-6">
                {/* Stats Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Product-Market Fit</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display font-black text-2xl text-emerald-600">
                        {innovationResult.marketFitScore}%
                      </span>
                      <span className="text-[10px] text-stone-400">/ 100</span>
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)] overflow-hidden">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Opportunity Index</span>
                    <div className="mt-1.5 text-stone-900 font-bold text-xs leading-relaxed">
                      {innovationResult.marketOpportunitySize}
                    </div>
                  </div>
                  <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-[0_2px_12px_rgba(40,30,20,0.02)]">
                    <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wider">Threat Tier</span>
                    <div className="flex items-baseline gap-1 mt-1 text-red-600 font-display font-black text-lg uppercase">
                      {innovationResult.competitiveThreatLevel}
                    </div>
                  </div>
                </div>

                {/* Briefing */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Grounded Executive Briefing</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Comprehensive overview of the competitive landscape.</p>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                    {innovationResult.executiveSummary}
                  </p>
                </div>

                {/* Competitors Map */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-900">Active Competitors Map</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Actual market entities mapped via active Google Grounding nodes.</p>
                  </div>

                  <div className="space-y-4">
                    {innovationResult.competitors.map((comp, idx) => (
                      <div key={idx} className="bg-stone-50/60 p-4 rounded-xl border border-stone-200/60 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs border-b border-stone-200/80 pb-2">
                          <span className="font-bold text-stone-900 flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            {comp.name}
                          </span>
                          <span className="font-mono text-stone-500">
                            Est. Share: <span className="text-emerald-700 font-bold">{comp.estimatedMarketShare}%</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">Market Strengths</span>
                            <ul className="space-y-1 pl-4 list-disc text-stone-600 leading-relaxed">
                              {comp.strengths.map((s, i) => (
                                <li key={i}>{s}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono uppercase text-red-600 font-bold block">Vulnerabilities & Niches</span>
                            <ul className="space-y-1 pl-4 list-disc text-stone-600 leading-relaxed">
                              {comp.vulnerabilities.map((v, i) => (
                                <li key={i}>{v}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory hurdles & pivots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-stone-200/60 rounded-2xl p-5 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-3.5">
                    <span className="text-[10px] font-mono text-amber-700 font-bold uppercase block tracking-wider">
                      Compliance & Regulatory Barriers
                    </span>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {innovationResult.regulatoryMoats.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-amber-600 select-none">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-stone-200/60 rounded-2xl p-5 shadow-[0_2px_12px_rgba(40,30,20,0.02)] space-y-3.5">
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase block tracking-wider">
                      Recommended Strategic Pivots
                    </span>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {innovationResult.pivotsAndAvenues.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-600 select-none">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Workflow Logs */}
                <AgentWorkflowView workflow={innovationResult.workflow} isInvestigating={isInnovating} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bot, ChartNoAxesColumn, ChevronRight, Lightbulb, Sparkles, Target } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { ChatBox } from "@/components/ChatBox";
import { InsightCard } from "@/components/InsightCard";
import { PredictionPanel } from "@/components/PredictionPanel";
import { Scoreboard } from "@/components/Scoreboard";
import { StatsPanel } from "@/components/StatsPanel";
import { insights, matches } from "@/data/matches";

const tabs = ["AI Insights", "Ask MatchTalk", "Stats", "Predictions"] as const;

export default function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); const match = matches.find((m) => m.id === id); if (!match) notFound();
  const [tab, setTab] = useState<(typeof tabs)[number]>("AI Insights"); const [explain, setExplain] = useState(false);
  return <><AppHeader back /><main className="mx-auto max-w-6xl px-4 pb-28 pt-5 sm:px-6 sm:pb-16 sm:pt-8"><Link href="/" className="focus-ring mb-4 inline-flex items-center gap-1.5 rounded-lg text-xs font-bold text-mist transition hover:text-white"><ArrowLeft className="h-4 w-4" />All matches</Link><Scoreboard match={match} />
    <section className="surface mt-4 p-4 sm:p-5"><div className="mb-3 flex items-center justify-between"><div><p className="eyebrow">Live win probability</p><p className="mt-1 text-[10px] font-semibold text-mist">Updates with match momentum</p></div><Sparkles className="h-4 w-4 text-electric" /></div><div className="flex h-2.5 overflow-hidden rounded-full"><span className="bg-[#00A985]" style={{ width: `${match.winProbability.home}%` }} /><span className="bg-[#77869D]" style={{ width: `${match.winProbability.draw}%` }} /><span className="bg-flare" style={{ width: `${match.winProbability.away}%` }} /></div><div className="mt-2.5 grid grid-cols-3 text-[10px] font-black"><span>MAR {match.winProbability.home}%</span><span className="text-center text-mist">DRAW {match.winProbability.draw}%</span><span className="text-right">ESP {match.winProbability.away}%</span></div></section>
    <div className="hide-scrollbar mt-6 overflow-x-auto border-b border-line"><div className="flex min-w-max gap-6">{tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`focus-ring relative flex items-center gap-2 rounded-t-lg pb-3 text-xs font-extrabold transition ${tab === t ? "text-white" : "text-mist hover:text-white"}`}>{t === "AI Insights" && <Lightbulb className="h-4 w-4" />}{t === "Ask MatchTalk" && <Bot className="h-4 w-4" />}{t === "Stats" && <ChartNoAxesColumn className="h-4 w-4" />}{t === "Predictions" && <Target className="h-4 w-4" />}{t}{tab === t && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-electric" />}</button>)}</div></div>
    <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
      <div>{tab === "AI Insights" && <div className="space-y-3">{insights.map((item, i) => <InsightCard key={item.id} insight={item} featured={i === 0} />)}</div>}{tab === "Ask MatchTalk" && <ChatBox />}{tab === "Stats" && <StatsPanel />}{tab === "Predictions" && <PredictionPanel />}</div>
      <aside className="space-y-4"><button onClick={() => setExplain((v) => !v)} className="focus-ring group w-full overflow-hidden rounded-[22px] bg-flare p-5 text-left shadow-[0_16px_45px_rgba(255,122,26,.18)] transition hover:bg-orange-500"><span className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><Sparkles className="h-5 w-5 fill-white" /></span><ChevronRight className={`h-5 w-5 transition ${explain ? "rotate-90" : "group-hover:translate-x-1"}`} /></span><span className="mt-5 block text-lg font-black tracking-tight">Explain That Play</span><span className="mt-1 block text-xs font-semibold text-orange-100">Get a simple breakdown of what just happened.</span></button>{explain && <div className="surface border-flare/25 p-5"><p className="eyebrow text-flare">SideKick AI explains</p><p className="mt-3 text-xs font-semibold leading-6 text-slate-200">Based on the situation, the defender stepped forward late, which may have played the attacker onside. The key thing to watch is the timing of the pass.</p></div>}<div className="surface p-5"><p className="eyebrow">Match pulse</p><div className="mt-4 flex items-center gap-3"><span className="text-2xl">🔥</span><div><p className="text-sm font-black">Momentum is rising</p><p className="mt-1 text-[10px] font-semibold text-mist">3 big chances in the last 8 minutes</p></div></div></div></aside>
    </div>
  </main><BottomNav /></>;
}

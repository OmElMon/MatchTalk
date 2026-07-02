"use client";

import { useState } from "react";
import { ArrowUp, Bot, Sparkles, UserRound } from "lucide-react";

const answers: Record<string, string> = {
  "Why was that offside?": "The attacker moved beyond the second-last defender just before the pass was played. The key is their position at the moment of the pass—not when they receive the ball.",
  "Who is playing better?": "Spain has more control and territory, but Morocco is creating the sharper moments in transition. Spain looks stronger overall; Morocco still carries real counterattacking danger.",
  "What should I watch for?": "Watch the space behind Spain’s fullbacks. Morocco is waiting for those players to push forward, then trying to break quickly into the channels.",
  "Why did they make that substitution?": "It looks tactical: fresh legs in midfield can help close the growing gaps and give the team more energy in the press for the final 20 minutes.",
};

export function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "I’m watching with you. Ask me about the tactics, a call, or what might happen next." },
  ]);
  const submit = (question?: string) => {
    const text = (question ?? input).trim(); if (!text) return;
    const exact = Object.keys(answers).find((key) => key.toLowerCase() === text.toLowerCase());
    const response = exact ? answers[exact] : "Good question. Based on this match, the biggest factor is Spain’s patient buildup against Morocco’s compact shape. Watch what happens when the ball moves wide.";
    setMessages((prev) => [...prev, { role: "user", text }, { role: "ai", text: response }]); setInput("");
  };
  return (
    <div id="ask" className="surface overflow-hidden">
      <div className="border-b border-line p-5"><div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-electric"><Sparkles className="h-4 w-4 fill-white" /></span><div><h3 className="text-sm font-black">Ask MatchTalk</h3><p className="text-[10px] font-bold text-mist">Powered by SideKick AI</p></div><span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold text-emerald-400"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Ready</span></div></div>
      <div className="max-h-[390px] space-y-4 overflow-y-auto p-5" aria-live="polite">{messages.map((m, i) => <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}>{m.role === "ai" && <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-electric/15 text-electric"><Bot className="h-3.5 w-3.5" /></span>}<p className={`max-w-[84%] rounded-2xl px-4 py-3 text-xs font-semibold leading-5 ${m.role === "user" ? "rounded-br-md bg-electric text-white" : "rounded-bl-md bg-white/[0.06] text-slate-200"}`}>{m.text}</p>{m.role === "user" && <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 text-mist"><UserRound className="h-3.5 w-3.5" /></span>}</div>)}</div>
      <div className="border-t border-line p-4"><div className="hide-scrollbar mb-3 flex gap-2 overflow-x-auto pb-1">{Object.keys(answers).slice(0, 3).map((q) => <button key={q} onClick={() => submit(q)} className="focus-ring shrink-0 rounded-full border border-line bg-white/[0.03] px-3 py-2 text-[10px] font-bold text-mist transition hover:border-electric/40 hover:text-white">{q}</button>)}</div><form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex items-center gap-2 rounded-2xl border border-line bg-ink/60 p-2 focus-within:border-electric/50"><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about the match..." aria-label="Ask MatchTalk a question" className="min-w-0 flex-1 bg-transparent px-2 text-xs font-semibold text-white outline-none placeholder:text-mist" /><button aria-label="Send question" className="focus-ring grid h-9 w-9 place-items-center rounded-xl bg-electric transition hover:bg-blue-500"><ArrowUp className="h-4 w-4" /></button></form></div>
    </div>
  );
}

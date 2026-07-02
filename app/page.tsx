import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { MatchCard } from "@/components/MatchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { matches } from "@/data/matches";
import { ArrowRight, Bot, Flame, MessageCircle, Trophy } from "lucide-react";
import Link from "next/link";

const questions = [
  { q: "Why does the offside rule feel so confusing?", meta: "2.4K asking", color: "bg-[#7259FF]" },
  { q: "Who has controlled the match so far?", meta: "1.8K asking", color: "bg-electric" },
  { q: "What does a high press actually mean?", meta: "982 asking", color: "bg-[#00A985]" },
];

export default function Home() {
  const liveMatches = matches.filter((m) => m.status === "live");
  const upcomingMatches = matches.filter((m) => m.status === "upcoming");
  return (
    <><AppHeader />
      <main className="mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
        <section className="relative mb-12 overflow-hidden rounded-[28px] border border-electric/20 bg-gradient-to-br from-[#10264E] via-[#0B1930] to-panel p-6 shadow-glow sm:p-9">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[42px] border-electric/[0.06]" />
          <div className="relative max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-200 sm:hidden"><Trophy className="h-3.5 w-3.5 text-electric" /> World Cup Mode</div>
            <h1 className="text-[34px] font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl">Watch smarter.<br /><span className="text-electric">Feel every moment.</span></h1>
            <p className="mt-4 max-w-md text-sm font-medium leading-6 text-mist sm:text-base">Live context, simple explanations, and the answers casual fans wish the broadcast gave them.</p>
            <Link href="/match/mar-spa" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-xl bg-flare px-5 py-3 text-sm font-black transition hover:bg-orange-500">Join the featured match <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <section className="mb-12"><SectionHeading eyebrow="Happening now" title="Live matches" action="View all" /><div className="grid gap-4 lg:grid-cols-2">{liveMatches.map((m) => <MatchCard key={m.id} match={m} />)}</div></section>

        <section className="mb-12"><SectionHeading title="Coming up" action="Full schedule" /><div className="grid gap-4 lg:grid-cols-2">{upcomingMatches.map((m) => <MatchCard key={m.id} match={m} />)}</div></section>

        <section><SectionHeading eyebrow="Fan pulse" title="Trending questions" /><div className="grid gap-3 md:grid-cols-3">{questions.map((item, i) => <Link href="/match/mar-spa#ask" key={item.q} className="focus-ring surface group flex min-h-36 flex-col justify-between p-5 transition hover:-translate-y-1 hover:border-electric/30"><div className="flex items-start justify-between"><span className={`grid h-9 w-9 place-items-center rounded-xl ${item.color}`}><MessageCircle className="h-4 w-4" /></span><span className="flex items-center gap-1 text-[10px] font-bold text-mist"><Flame className="h-3 w-3 text-flare" /> #{i + 1}</span></div><div><p className="mt-5 text-sm font-extrabold leading-5">{item.q}</p><p className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-mist"><Bot className="h-3 w-3 text-electric" />{item.meta}</p></div></Link>)}</div></section>
      </main><BottomNav /></>
  );
}

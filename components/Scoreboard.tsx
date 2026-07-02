import { MapPin, Radio, Users } from "lucide-react";
import type { Match } from "@/data/matches";

export function Scoreboard({ match }: { match: Match }) {
  const live = match.status === "live";
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-electric/20 bg-gradient-to-b from-[#11264A] to-panel p-5 shadow-glow sm:p-8">
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-24 rounded-full bg-electric/30 blur-3xl" />
      <div className="relative flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-mist">
        <span>{match.competition}</span><span className="flex items-center gap-1.5 normal-case tracking-normal"><MapPin className="h-3.5 w-3.5" />{match.venue}</span>
      </div>
      <div className="relative my-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:my-9 sm:gap-8">
        <ScoreTeam team={match.home} />
        <div className="text-center"><p className="text-4xl font-black tabular-nums tracking-[-0.08em] sm:text-6xl">{match.homeScore}<span className="mx-3 text-mist sm:mx-5">:</span>{match.awayScore}</p>{live && <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-electric/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-blue-200"><i className="live-dot h-1.5 w-1.5 rounded-full bg-electric" />{match.minute}′ live</span>}</div>
        <ScoreTeam team={match.away} reverse />
      </div>
      <div className="relative flex items-center justify-center gap-5 border-t border-white/10 pt-4 text-[10px] font-bold text-mist"><span className="flex items-center gap-1.5"><Radio className="h-3.5 w-3.5 text-electric" />Live commentary</span><span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{match.viewers} watching</span></div>
    </section>
  );
}

function ScoreTeam({ team, reverse = false }: { team: Match["home"]; reverse?: boolean }) {
  return <div className={`flex flex-col ${reverse ? "items-end" : "items-start"}`}><span className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-3xl sm:h-20 sm:w-20 sm:text-4xl">{team.flag}</span><span className="mt-3 text-sm font-black sm:text-lg">{team.name}</span><span className="mt-0.5 text-[10px] font-bold text-mist">{team.shortName}</span></div>;
}

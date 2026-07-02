import Link from "next/link";
import { ArrowUpRight, Radio, Users } from "lucide-react";
import type { Match } from "@/data/matches";

export function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === "live";
  return (
    <article className="surface group overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/35">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">{match.competition}</p>
          <p className="mt-1.5 text-xs text-mist">{match.venue}</p>
        </div>
        {isLive ? (
          <span className="flex items-center gap-1.5 rounded-full bg-electric/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-blue-300">
            <i className="live-dot h-1.5 w-1.5 rounded-full bg-electric" /> {match.minute}′ Live
          </span>
        ) : (
          <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-mist">Upcoming</span>
        )}
      </div>

      <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <TeamBadge flag={match.home.flag} name={match.home.name} align="left" />
        {isLive ? (
          <div className="rounded-2xl border border-white/10 bg-ink/60 px-4 py-2 text-center text-2xl font-black tabular-nums tracking-tight">
            {match.homeScore}<span className="mx-2 text-mist">:</span>{match.awayScore}
          </div>
        ) : (
          <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-widest text-mist">Kickoff</p><p className="mt-1 max-w-24 text-xs font-extrabold">{match.kickoff}</p></div>
        )}
        <TeamBadge flag={match.away.flag} name={match.away.name} align="right" />
      </div>

      <div className="flex items-center justify-between border-t border-line pt-4">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-mist">
          {isLive ? <Radio className="h-3.5 w-3.5" /> : <Users className="h-3.5 w-3.5" />} {match.viewers}
        </span>
        <Link href={`/match/${match.id}`} className="focus-ring flex items-center gap-2 rounded-xl bg-flare px-4 py-2.5 text-xs font-black text-white transition hover:bg-orange-500">
          {isLive ? "Join Match" : "Match Preview"}<ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

function TeamBadge({ flag, name, align }: { flag: string; name: string; align: "left" | "right" }) {
  return (
    <div className={`flex min-w-0 flex-col ${align === "right" ? "items-end" : "items-start"}`}>
      <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-2xl shadow-inner">{flag}</span>
      <span className="mt-2 max-w-full truncate text-sm font-extrabold">{name}</span>
    </div>
  );
}

import Link from "next/link";
import { Bell, Trophy } from "lucide-react";
import { Logo } from "./Logo";

export function AppHeader({ back = false }: { back?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={back ? "Back to home" : "MatchTalk home"} className="focus-ring rounded-xl">
          <Logo />
        </Link>
        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3.5 py-2 text-xs font-extrabold text-blue-200 sm:flex">
            <Trophy className="h-3.5 w-3.5 text-electric" /> World Cup Mode
          </div>
          <button aria-label="Notifications" className="focus-ring relative grid h-10 w-10 place-items-center rounded-full border border-line bg-panel text-mist transition hover:text-white">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-panel bg-flare" />
          </button>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-[#6C4DFF] text-xs font-black">MT</div>
        </div>
      </div>
    </header>
  );
}

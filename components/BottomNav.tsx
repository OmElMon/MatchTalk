"use client";

import Link from "next/link";
import { Bot, Home, Radio, UserRound } from "lucide-react";

const nav = [{ label: "Home", icon: Home }, { label: "Live", icon: Radio }, { label: "Ask AI", icon: Bot }, { label: "Profile", icon: UserRound }];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-[#08101E]/95 px-4 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-md justify-around">
        {nav.map(({ label, icon: Icon }, i) => <Link key={label} href={i === 0 ? "/" : "#"} className={`focus-ring flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-[10px] font-bold ${i === 0 ? "text-electric" : "text-mist"}`}><Icon className="h-5 w-5" />{label}</Link>)}
      </div>
    </nav>
  );
}

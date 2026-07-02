import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-electric shadow-glow">
        <Sparkles className="h-[18px] w-[18px] fill-white text-white" />
      </span>
      {!compact && <span className="text-xl font-black tracking-[-0.04em]">Match<span className="text-electric">Talk</span></span>}
    </div>
  );
}

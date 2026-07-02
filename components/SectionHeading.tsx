import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: string }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>{eyebrow && <p className="eyebrow mb-1.5 text-electric">{eyebrow}</p>}<h2 className="text-xl font-black tracking-[-0.03em] sm:text-2xl">{title}</h2></div>
      {action && <Link href="#" className="focus-ring flex items-center gap-1.5 rounded-lg text-xs font-bold text-mist transition hover:text-white">{action}<ArrowRight className="h-3.5 w-3.5" /></Link>}
    </div>
  );
}

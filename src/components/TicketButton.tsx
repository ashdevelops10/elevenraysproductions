import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export default function TicketButton({ label, className = "inline-flex", ...anchorProps }: Props) {
  return (
    <a
      {...anchorProps}
      className={`group relative items-center gap-2 bg-accent px-6 py-2.5 text-[0.62rem] uppercase tracking-[0.28em] text-foreground transition-transform duration-500 hover:-translate-y-0.5 ${className}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

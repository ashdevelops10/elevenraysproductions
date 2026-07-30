import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

const NOTCH_TOPS = ["20%", "50%", "80%"];

/**
 * Ticket-stub shaped CTA: solid accent fill with a punched notch column and
 * a perforated divider near the right edge, echoing a torn admission ticket.
 *
 * The notches are rendered as small circles filled with the page background
 * color. This reads as a true cutout wherever the button sits on a flat
 * background (footer, cards); it's a close approximation over the hero
 * video, where the notches sit inside the dark gradient overlay near the
 * bottom of the frame.
 */
export default function TicketButton({ label, className = "", ...anchorProps }: Props) {
  return (
    <a
      {...anchorProps}
      className={`group relative inline-flex items-center gap-2 bg-accent py-2.5 pl-5 pr-7 text-[0.62rem] uppercase tracking-[0.28em] text-foreground transition-transform duration-500 hover:-translate-y-0.5 ${className}`}
    >
      {NOTCH_TOPS.map((top) => (
        <span
          key={top}
          aria-hidden="true"
          className="absolute right-0 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-background"
          style={{ top }}
        />
      ))}
      <span
        aria-hidden="true"
        className="absolute right-3.5 top-1/2 h-[65%] -translate-y-1/2 border-l border-dashed border-foreground/50"
      />
      {label}
      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

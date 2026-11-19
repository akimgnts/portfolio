/** Finished outlined artwork; the licensed font is never served to visitors. */
export default function BrandWordmark({ slug, title, size = "card" }) {
  if (slug !== "event-signal") return title;
  return <img src="/brand/signal.svg" alt="Signal" width="3545" height="757" className={`brand-wordmark brand-wordmark--${size}`} decoding="async"/>;
}

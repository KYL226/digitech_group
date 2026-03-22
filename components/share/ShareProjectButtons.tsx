"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

/** Capacité Web Share (lecture côté client sans setState dans un effect) */
function subscribeNoop() {
  return () => {};
}

function getNativeShareSupportedSnapshot() {
  return typeof navigator !== "undefined" && typeof navigator.share === "function";
}

function getNativeShareSupportedServerSnapshot() {
  return false;
}

type ShareProjectButtonsProps = {
  /** URL absolue de la page projet */
  url: string;
  title: string;
  /** Style plus compact pour les cartes dans la grille */
  compact?: boolean;
};

export function ShareProjectButtons({ url, title, compact = false }: ShareProjectButtonsProps) {
  const [copied, setCopied] = useState(false);
  const showNativeShare = useSyncExternalStore(
    subscribeNoop,
    getNativeShareSupportedSnapshot,
    getNativeShareSupportedServerSnapshot,
  );

  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(`${title} — DigiTech Agency`);

  const socialLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${encodedUrl}`,
    },
  ] as const;

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [url]);

  const nativeShare = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.share) return;
    try {
      await navigator.share({ title, text: title, url });
    } catch {
      /* ignore */
    }
  }, [title, url]);

  return (
    <div
      className={compact ? "space-y-2" : "space-y-3"}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="group"
      aria-label="Partager cette realisation"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-white/45">Partager</p>
      <div className="flex flex-wrap items-center gap-2">
        {showNativeShare && (
          <button
            type="button"
            onClick={nativeShare}
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Partager…
          </button>
        )}
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85 transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85 transition hover:border-white/30"
        >
          {copied ? "Lien copie" : "Copier le lien"}
        </button>
      </div>
    </div>
  );
}

'use client';

import * as React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
};

type ContactTickerProps = React.ComponentProps<'div'> & {
  items: ContactItem[];
};

export function ContactTicker({ className, items, ...props }: ContactTickerProps) {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  const copyToClipboard = React.useCallback(async (value: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return true;
      }
    } catch {
      // Fall through to legacy copy method.
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch {
      return false;
    }
  }, []);

  const handleCopy = React.useCallback(async (key: string, value: string) => {
    const success = await copyToClipboard(value);
    if (!success) return;

    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1300);
  }, [copyToClipboard]);

  return (
    <div
      {...props}
      className={cn(
        'relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-[52vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(188,161,111,0.18)_0%,rgba(188,161,111,0.05)_45%,transparent_72%)] blur-2xl"
      />

      <InfiniteSlider gap={28} reverse speed={72} speedOnHover={24}>
        {items.map((item, idx) => {
          const itemKey = `${item.label}-${item.value}-${idx}`;
          const isCopied = copiedKey === itemKey;
          const content = (
            <span className="inline-flex items-center gap-3">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a7060] md:text-[12px]"
                style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
              >
                {item.label}
              </span>
              <span
                className="text-[18px] font-semibold tracking-[0.03em] text-[#3d3327] md:text-[22px]"
                style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
              >
                {item.value}
              </span>
              <span
                aria-hidden="true"
                className="ml-1 text-[16px] text-[#9b8f7e]/80 md:text-[18px]"
                style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
              >
                {isCopied ? 'Copied' : '·'}
              </span>
            </span>
          );

          if (item.copyable) {
            return (
              <button
                key={itemKey}
                type="button"
                onClick={() => handleCopy(itemKey, item.value)}
                className="inline-flex items-center transition-colors duration-200 hover:text-[#1f180f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7f6f]/50"
                aria-label={`Copy ${item.label}: ${item.value}`}
              >
                {content}
              </button>
            );
          }

          if (!item.href) {
            return <React.Fragment key={itemKey}>{content}</React.Fragment>;
          }

          return (
            <a
              key={itemKey}
              href={item.href}
              className="group inline-flex items-center transition-colors duration-200 hover:text-[#1f180f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7f6f]/50"
              aria-label={`${item.label} ${item.value}`}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a7060] md:text-[12px]"
                  style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-[18px] font-semibold tracking-[0.03em] text-[#3d3327] underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-all duration-200 group-hover:decoration-current md:text-[22px]"
                  style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
                >
                  {item.value}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-1 text-[16px] text-[#9b8f7e]/80 md:text-[18px]"
                  style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
                >
                  ·
                </span>
              </span>
            </a>
          );
        })}
      </InfiniteSlider>
    </div>
  );
}

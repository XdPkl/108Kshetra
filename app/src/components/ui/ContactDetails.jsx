/**
 * ContactDetails — the one authoritative contact block (PO round 23):
 * labelled rows with copy-to-clipboard affordances. Values render
 * verbatim from the dataset — nothing is invented; placeholder markers
 * ("[To be provided…]") suppress the copy control.
 */
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      return; // clipboard unavailable — the value remains visible to copy by hand
    }
  };
  return (
    <button
      type="button"
      className="ui-btn ui-btn--secondary ui-btn--small shrink-0"
      onClick={onCopy}
      aria-label={`${copied ? 'Copied' : 'Copy'} ${value}`}
    >
      {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
      <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export default function ContactDetails({ rows }) {
  return (
    <div className="space-y-3">
      {rows.map(({ label, value, href }) => {
        const copyable = value && !value.includes('[To be provided');
        return (
          <div key={label} className="flex items-center justify-between gap-3 rounded-xl border border-[#e8cf9f] bg-[#fbf0dc] p-4">
            <div className="min-w-0">
              <span className="block text-[12px] font-bold uppercase tracking-[0.12em] text-[#a77529]">{label}</span>
              {href ? (
                <a href={href} className="text-[16px] font-semibold text-[#922e0d] underline-offset-4 break-all hover:underline">
                  {value}
                </a>
              ) : (
                <span className="text-[16px] font-semibold text-[#922e0d] break-all">{value}</span>
              )}
            </div>
            {copyable ? <CopyButton value={value} /> : null}
          </div>
        );
      })}
    </div>
  );
}

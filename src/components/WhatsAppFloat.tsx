"use client";

import { site } from "@/lib/site";

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-white md:h-[22px] md:w-[22px]">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.38A9.93 9.93 0 0 0 12.04 22c5.52 0 10.02-4.48 10.02-10 0-2.67-1.04-5.17-2.99-7.09ZM12.04 20.15a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.1 8.1 0 0 1-1.24-4.31c0-4.48 3.65-8.12 8.16-8.12 2.18 0 4.23.85 5.77 2.39a8.07 8.07 0 0 1 2.39 5.76c0 4.49-3.65 8.12-8.16 8.12Zm4.47-6.08c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.41 1.4.52.59.18 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.12-.22-.18-.47-.31Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Matchwell Furniture, I would like to know more about your wooden furniture.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      aria-label="WhatsApp us on +91 97459 36872"
      className="fixed right-4 bottom-4 z-[65] flex items-center gap-2 rounded-full bg-[#f3f3f3] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.45)] md:right-8 md:bottom-8 md:gap-3 md:p-0 md:py-2 md:pr-5 md:pl-2"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] md:h-11 md:w-11">
        <WhatsAppMark/>
      </span>
      <span className="hidden pr-1 text-[15px] font-medium tracking-tight text-[#2f2f2f] md:inline">
         WhatsApp us
      </span>
    </a>
  );
}

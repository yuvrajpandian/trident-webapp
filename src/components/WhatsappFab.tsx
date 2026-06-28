import { Icon } from "./Icon";
import { whatsappLink } from "@/lib/site";

/* Floating WhatsApp button — present on every page for instant lead capture. */
export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </span>
      <span className="hidden text-sm font-semibold sm:block">Chat with us</span>
    </a>
  );
}

import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { contact } from "@/data/contact";

const AVATAR_URL = "/photos/chingiz_photo.jpg";

export function HeroHeader() {
  return (
    <header className="flex flex-col items-center gap-4 px-6 pt-10 pb-6 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-[1.5px] border-gold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
        <Image
          src={AVATAR_URL}
          alt={contact.masterName}
          fill
          sizes="96px"
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <h1 className="font-serif text-3xl font-semibold tracking-wide text-gold">
          {contact.masterName.toUpperCase()}
        </h1>

        <span className="rounded-full border border-border-default bg-dark-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
          {contact.role} &bull; {contact.salon}
        </span>

        <p className="flex items-center gap-1.5 text-xs text-text-secondary">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Trained by {contact.trainedBy}
        </p>

        <p className="flex items-center gap-1 text-xs text-text-secondary">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {contact.address}
        </p>
      </div>

      <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-gold animate-pulse-dot" />
        <span className="text-xs font-medium text-white">
          Bu həftəyə son 3 sərbəst yer
        </span>
      </div>
    </header>
  );
}

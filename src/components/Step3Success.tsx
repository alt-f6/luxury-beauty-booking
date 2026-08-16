"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { contact } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";
import type { BookingFormData, HairLength, ServiceItem } from "@/types/booking";

interface Step3SuccessProps {
  formData: BookingFormData;
  service: ServiceItem;
  hairLength: HairLength;
}

export function Step3Success({
  formData,
  service,
  hairLength,
}: Step3SuccessProps) {
  const { t } = useLanguage();
  const serviceText =
    t.step1.services[service.id as keyof typeof t.step1.services];
  const lengthText =
    t.step1.hairLengths[hairLength.id as keyof typeof t.step1.hairLengths];

  useEffect(() => {
    const duration = 1200;
    const end = Date.now() + duration;

    const colors = ["#D4AF37", "#C5A059", "#1C3F36"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.6 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const whatsappMessage = [
    t.step3.whatsapp.greeting(contact.masterFirstName),
    t.step3.whatsapp.serviceLine(serviceText.title),
    t.step3.whatsapp.lengthLine(`${lengthText.label} (${lengthText.description})`),
    t.step3.whatsapp.nameLine(formData.name),
    t.step3.whatsapp.phoneLine(formData.phone),
    t.step3.whatsapp.commentLine(
      formData.comment || t.step3.whatsapp.noComment,
    ),
  ].join("\n");

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-10 pt-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-[1.5px] border-gold bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
        <CheckCircle2 className="h-10 w-10 text-gold" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl font-semibold text-gold">
          {t.step3.title}
        </h2>
        <p className="text-sm text-text-secondary">
          {t.step3.subtitle(contact.masterFirstName)}
        </p>
      </div>

      <div className="glass-card flex w-full flex-col gap-2 rounded-2xl px-4 py-4 text-left">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">{t.step3.serviceLabel}</span>
          <span className="font-medium text-foreground">
            {serviceText.title}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">{t.step3.lengthLabel}</span>
          <span className="font-medium text-foreground">
            {lengthText.label}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">{t.step3.nameLabel}</span>
          <span className="font-medium text-foreground">{formData.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">{t.step3.phoneLabel}</span>
          <span className="font-medium text-foreground">{formData.phone}</span>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#1EBE5D] active:scale-[0.98]"
      >
        <span className="animate-pulse-dot">{"\u{1F4AC}"}</span>
        {t.step3.whatsappCta}
      </a>
    </section>
  );
}

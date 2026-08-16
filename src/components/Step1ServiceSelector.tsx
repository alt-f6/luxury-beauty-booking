"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { hairLengths, services } from "@/data/services";

interface Step1ServiceSelectorProps {
  onComplete: (selection: { serviceId: string; hairLengthId: string }) => void;
}

export function Step1ServiceSelector({ onComplete }: Step1ServiceSelectorProps) {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [hairLengthId, setHairLengthId] = useState<string | null>(null);

  const isComplete = Boolean(serviceId && hairLengthId);

  const handleContinue = () => {
    if (!serviceId || !hairLengthId) return;
    onComplete({ serviceId, hairLengthId });
  };

  return (
    <section className="flex flex-col gap-6 px-4 pb-28">
      <div className="text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Xidməti seçin
        </h2>
        <p className="mt-1 text-sm text-text-secondary">
          Sizə uyğun texnikanı və saç uzunluğunu seçin
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {services.map((service) => {
          const isActive = service.id === serviceId;
          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => setServiceId(service.id)}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`flex items-center gap-3 rounded-xl border p-2.5 text-left transition-colors ${
                isActive
                  ? "border-gold bg-gold/10"
                  : "border-border hover:border-border-strong"
              }`}
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-base font-semibold tracking-wide text-foreground">
                  {service.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-text-secondary">
                  {service.description}
                </p>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-gold/70">
                  {service.badge}
                </span>
              </div>

              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isActive
                    ? "border-gold bg-gold text-black"
                    : "border-border text-transparent"
                }`}
              >
                <Check className="h-3 w-3" />
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">Saç uzunluğu</span>
        <div className="flex gap-2">
          {hairLengths.map((length) => {
            const isActive = length.id === hairLengthId;
            return (
              <button
                key={length.id}
                type="button"
                onClick={() => setHairLengthId(length.id)}
                className={`flex-1 rounded-full border px-2 py-2.5 text-center transition-colors ${
                  isActive
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-text-secondary hover:border-border-strong"
                }`}
              >
                <span className="flex flex-col items-center gap-0.5">
                  <span className="text-xs font-medium">{length.label}</span>
                  <span
                    className={`text-[10px] font-normal ${
                      isActive ? "text-gold/70" : "text-text-secondary"
                    }`}
                  >
                    {length.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md border-t border-border bg-bg/95 p-4 backdrop-blur-md">
        <button
          type="button"
          disabled={!isComplete}
          onClick={handleContinue}
          className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:bg-surface-strong disabled:text-text-secondary enabled:bg-gold enabled:text-black active:enabled:scale-[0.98]"
        >
          Davam et
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroHeader } from "@/components/HeroHeader";
import { Step1ServiceSelector } from "@/components/Step1ServiceSelector";
import { Step2ContactForm } from "@/components/Step2ContactForm";
import { Step3Success } from "@/components/Step3Success";
import { hairLengths, services } from "@/data/services";
import type { BookingFormData, ContactDraft, StepState } from "@/types/booking";

const stepLabels: Record<StepState, string> = {
  1: "Addım 1 / 2",
  2: "Addım 2 / 2",
  3: "Hazırdır!",
};

const slideTransition = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.25, ease: "easeInOut" as const },
};

export default function Home() {
  const [step, setStep] = useState<StepState>(1);
  const [selection, setSelection] = useState<{
    serviceId: string;
    hairLengthId: string;
  } | null>(null);
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const [contactDraft, setContactDraft] = useState<ContactDraft>({
    name: "",
    phoneDigits: "",
    comment: "",
  });

  const service = selection
    ? services.find((item) => item.id === selection.serviceId)
    : undefined;
  const hairLength = selection
    ? hairLengths.find((item) => item.id === selection.hairLengthId)
    : undefined;

  const handleStep1Complete = (next: {
    serviceId: string;
    hairLengthId: string;
  }) => {
    setSelection(next);
    setStep(2);
  };

  const handleStep2Success = (data: BookingFormData) => {
    setFormData(data);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-1 flex-col">
        <HeroHeader />

        {step < 3 && (
          <div className="mx-4 mb-2 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-strong">
              <div
                className="h-full rounded-full bg-gold transition-all duration-300"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
            <span className="whitespace-nowrap text-xs text-text-secondary">
              {stepLabels[step]}
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...slideTransition}>
              <Step1ServiceSelector onComplete={handleStep1Complete} />
            </motion.div>
          )}

          {step === 2 && service && hairLength && (
            <motion.div key="step2" {...slideTransition}>
              <Step2ContactForm
                service={service}
                hairLength={hairLength}
                draft={contactDraft}
                onDraftChange={setContactDraft}
                onBack={() => setStep(1)}
                onSuccess={handleStep2Success}
              />
            </motion.div>
          )}

          {step === 3 && formData && service && hairLength && (
            <motion.div key="step3" {...slideTransition}>
              <Step3Success
                formData={formData}
                service={service}
                hairLength={hairLength}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

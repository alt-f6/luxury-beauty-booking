"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Pencil } from "lucide-react";
import type {
  BookingFormData,
  ContactDraft,
  HairLength,
  ServiceItem,
} from "@/types/booking";

interface Step2ContactFormProps {
  service: ServiceItem;
  hairLength: HairLength;
  draft: ContactDraft;
  onDraftChange: (draft: ContactDraft) => void;
  onBack: () => void;
  onSuccess: (data: BookingFormData) => void;
}

const AZ_MOBILE_PREFIXES = ["10", "50", "51", "55", "60", "70", "77", "99"];

function formatAzPhone(digits: string) {
  if (digits.length === 0) return "+994 ";
  let out = `+994 (${digits.slice(0, 2)}`;
  if (digits.length >= 2) out += ")";
  if (digits.length > 2) out += ` ${digits.slice(2, 5)}`;
  if (digits.length > 5) out += `-${digits.slice(5, 7)}`;
  if (digits.length > 7) out += `-${digits.slice(7, 9)}`;
  return out;
}

function extractPhoneDigits(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("994")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  return digits.slice(0, 9);
}

const inputClasses =
  "w-full rounded-xl border border-border-default bg-dark-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

export function Step2ContactForm({
  service,
  hairLength,
  draft,
  onDraftChange,
  onBack,
  onSuccess,
}: Step2ContactFormProps) {
  const { name, phoneDigits, comment } = draft;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setName = (value: string) => onDraftChange({ ...draft, name: value });
  const setPhoneDigits = (value: string) =>
    onDraftChange({ ...draft, phoneDigits: value });
  const setComment = (value: string) =>
    onDraftChange({ ...draft, comment: value });

  const phoneValue = formatAzPhone(phoneDigits);

  const validate = () => {
    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Adınız ən azı 2 simvol olmalıdır";
    }
    if (phoneDigits.length !== 9) {
      nextErrors.phone = "Telefon nömrəsi tam daxil edilməyib";
    } else if (!AZ_MOBILE_PREFIXES.includes(phoneDigits.slice(0, 2))) {
      nextErrors.phone = `Operator kodu düzgün deyil (${AZ_MOBILE_PREFIXES.join(", ")})`;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate() || isLoading) return;

    setIsLoading(true);
    setSubmitError(null);

    const formData: BookingFormData = {
      serviceId: service.id,
      hairLengthId: hairLength.id,
      name: name.trim(),
      phone: phoneValue,
      comment: comment.trim(),
    };

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: service.title,
          length: `${hairLength.label} (${hairLength.description})`,
          comment: formData.comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      onSuccess(formData);
    } catch {
      setSubmitError("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-6 px-4 pb-10">
      <button
        type="button"
        onClick={onBack}
        className="w-fit text-sm text-text-secondary transition-colors hover:text-white"
      >
        ← Geri
      </button>

      <div className="glass-card flex items-center justify-between rounded-2xl px-4 py-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs uppercase tracking-wide text-text-secondary">
            Seçiminiz
          </span>
          <span className="text-sm font-medium text-white">
            {service.title} &bull; {hairLength.label}
          </span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 rounded-full border border-border-default px-3 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-gold/10"
        >
          <Pencil className="h-3 w-3" />
          Dəyiş
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Adınız
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Məsələn: Aysel Məmmədova"
            className={inputClasses}
          />
          {errors.name && (
            <span className="text-xs text-red-400">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-white">
            Telefon nömrəniz
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            value={phoneValue}
            onChange={(event) =>
              setPhoneDigits(extractPhoneDigits(event.target.value))
            }
            placeholder="+994 (__) ___-__-__"
            className={inputClasses}
          />
          {errors.phone && (
            <span className="text-xs text-red-400">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="comment" className="text-sm font-medium text-white">
            Əlavə qeyd
          </label>
          <textarea
            id="comment"
            rows={3}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Arzu etdiyiniz tarix, vaxt və ya saçınızın hazırkı vəziyyəti..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        {submitError && (
          <span className="text-center text-xs text-red-400">
            {submitError}
          </span>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-black transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Göndərilir...
            </>
          ) : (
            "Qeydiyyatı təsdiqlə ✨"
          )}
        </button>
      </form>
    </section>
  );
}

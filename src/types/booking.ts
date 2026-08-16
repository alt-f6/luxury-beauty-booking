export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageUrl: string;
}

export interface HairLength {
  id: string;
  label: string;
  description: string;
}

export interface BookingFormData {
  serviceId: string | null;
  hairLengthId: string | null;
  name: string;
  phone: string;
  comment: string;
}

export interface ContactDraft {
  name: string;
  phoneDigits: string;
  comment: string;
}

export type StepState = 1 | 2 | 3;

import type { HairLength, ServiceItem } from "@/types/booking";

export const services: ServiceItem[] = [
  { id: "airtouch", imageUrl: "/photos/airtouch.png" },
  { id: "balayage", imageUrl: "/photos/balayage.jpg" },
  { id: "shatush", imageUrl: "/photos/shatush.jpg" },
  { id: "total-blonde", imageUrl: "/photos/total-blonde.png" },
  { id: "keratin-care", imageUrl: "/photos/keratin-care.png" },
  { id: "cut-style", imageUrl: "/photos/cut-style.png" },
];

export const hairLengths: HairLength[] = [
  { id: "short" },
  { id: "medium" },
  { id: "long" },
];

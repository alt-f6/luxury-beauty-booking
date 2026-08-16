import type { HairLength, ServiceItem } from "@/types/booking";

export const services: ServiceItem[] = [
  {
    id: "airtouch",
    title: "Airtouch",
    badge: "Sarbashev metodu",
    description: "Təbii relyefli parlaq keçidlər",
    imageUrl: "/photos/airtouch.png",
  },
  {
    id: "balayage",
    title: "Balayage",
    badge: "Müəllif texnikası",
    description: "Günəş effekti və zərif relyef",
    imageUrl: "/photos/balayage.jpg",
  },
  {
    id: "shatush",
    title: "Shatush",
    badge: "Təbii keçid",
    description: "Yumşaq kontrast və vizual həcm",
    imageUrl: "/photos/shatush.jpg",
  },
  {
    id: "total-blonde",
    title: "Total Blonde",
    badge: "İdeal tonlama",
    description: "Zədəsiz və təmiz sarı tonlar",
    imageUrl: "/photos/total-blonde.png",
  },
  {
    id: "keratin-care",
    title: "Keratin & Saç Baxımı",
    badge: "Dərin bərpa",
    description: "İpək kimi parlaq və baxımlı saçlar",
    imageUrl: "/photos/keratin-care.png",
  },
  {
    id: "cut-style",
    title: "Kəsim & Stil",
    badge: "Fərdi forma",
    description: "Üz quruluşuna uyğun premium kəsim",
    imageUrl: "/photos/cut-style.png",
  },
];

export const hairLengths: HairLength[] = [
  {
    id: "short",
    label: "Qısa",
    description: "Çiyinə qədər",
  },
  {
    id: "medium",
    label: "Orta",
    description: "Kürəyə qədər",
  },
  {
    id: "long",
    label: "Uzun",
    description: "Kürəkdən aşağı",
  },
];

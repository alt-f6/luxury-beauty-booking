export type Lang = "az" | "ru";

export const languages: Lang[] = ["az", "ru"];

export const translations = {
  az: {
    header: {
      trainedByPrefix: "Trained by",
      slotsBadge: "Bu həftəyə son 3 sərbəst yer",
    },
    steps: {
      1: "Addım 1 / 2",
      2: "Addım 2 / 2",
      3: "Hazırdır!",
    },
    step1: {
      title: "Xidməti seçin",
      subtitle: "Sizə uyğun texnikanı və saç uzunluğunu seçin",
      hairLengthLabel: "Saç uzunluğu",
      continueCta: "Davam et",
      services: {
        airtouch: {
          title: "Airtouch",
          badge: "Sarbashev metodu",
          description: "Təbii relyefli parlaq keçidlər",
        },
        balayage: {
          title: "Balayage",
          badge: "Müəllif texnikası",
          description: "Günəş effekti və zərif relyef",
        },
        shatush: {
          title: "Shatush",
          badge: "Təbii keçid",
          description: "Yumşaq kontrast və vizual həcm",
        },
        "total-blonde": {
          title: "Total Blonde",
          badge: "İdeal tonlama",
          description: "Zədəsiz və təmiz sarı tonlar",
        },
        "keratin-care": {
          title: "Keratin & Saç Baxımı",
          badge: "Dərin bərpa",
          description: "İpək kimi parlaq və baxımlı saçlar",
        },
        "cut-style": {
          title: "Kəsim & Stil",
          badge: "Fərdi forma",
          description: "Üz quruluşuna uyğun premium kəsim",
        },
      },
      hairLengths: {
        short: { label: "Qısa", description: "Çiyinə qədər" },
        medium: { label: "Orta", description: "Kürəyə qədər" },
        long: { label: "Uzun", description: "Kürəkdən aşağı" },
      },
    },
    step2: {
      back: "← Geri",
      yourChoice: "Seçiminiz",
      change: "Dəyiş",
      nameLabel: "Adınız",
      namePlaceholder: "Məsələn: Aysel Məmmədova",
      phoneLabel: "Telefon nömrəniz",
      phonePlaceholder: "+994 (__) ___-__-__",
      commentLabel: "Əlavə qeyd",
      commentPlaceholder:
        "Arzu etdiyiniz tarix, vaxt və ya saçınızın hazırkı vəziyyəti...",
      submitCta: "Qeydiyyatı təsdiqlə ✨",
      submitting: "Göndərilir...",
      errors: {
        nameTooShort: "Adınız ən azı 2 simvol olmalıdır",
        phoneIncomplete: "Telefon nömrəsi tam daxil edilməyib",
        phoneInvalidPrefix: (prefixes: string) =>
          `Operator kodu düzgün deyil (${prefixes})`,
        submitFailed: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
      },
    },
    step3: {
      title: "Qeydiyyatınız uğurla qəbul edildi!",
      subtitle: (masterFirstName: string) =>
        `${masterFirstName} bəy ən qısa zamanda sizinlə əlaqə saxlayacaq.`,
      serviceLabel: "Xidmət",
      lengthLabel: "Uzunluq",
      nameLabel: "Ad",
      phoneLabel: "Telefon",
      whatsappCta: "WhatsApp ilə dərhal təsdiqləyin",
      whatsapp: {
        greeting: (masterFirstName: string) =>
          `Salam, ${masterFirstName} bəy! Mən saytdan qeydiyyatdan keçdim:`,
        serviceLine: (service: string) => `\u{1F487} Xidmət: ${service}`,
        lengthLine: (length: string) =>
          `\u{1F4CF} Saç uzunluğu: ${length}`,
        nameLine: (name: string) => `\u{1F464} Adım: ${name}`,
        phoneLine: (phone: string) => `\u{1F4DE} Nömrəm: ${phone}`,
        commentLine: (comment: string) => `\u{1F4AC} Qeyd: ${comment}`,
        noComment: "Qeyd yoxdur",
      },
    },
  },
  ru: {
    header: {
      trainedByPrefix: "Обучен у",
      slotsBadge: "Осталось 3 места на этой неделе",
    },
    steps: {
      1: "Шаг 1 / 2",
      2: "Шаг 2 / 2",
      3: "Готово!",
    },
    step1: {
      title: "Выберите услугу",
      subtitle: "Подберите подходящую технику и длину волос",
      hairLengthLabel: "Длина волос",
      continueCta: "Продолжить",
      services: {
        airtouch: {
          title: "Airtouch",
          badge: "Методика Сарбашева",
          description: "Естественные переходы с эффектом сияния",
        },
        balayage: {
          title: "Балаяж",
          badge: "Авторская техника",
          description: "Солнечный эффект и лёгкий рельеф",
        },
        shatush: {
          title: "Шатуш",
          badge: "Естественный переход",
          description: "Мягкий контраст и визуальный объём",
        },
        "total-blonde": {
          title: "Total Blonde",
          badge: "Идеальное тонирование",
          description: "Чистые жёлтые оттенки без повреждений",
        },
        "keratin-care": {
          title: "Кератин & уход",
          badge: "Глубокое восстановление",
          description: "Шёлковый блеск и ухоженные волосы",
        },
        "cut-style": {
          title: "Стрижка & стиль",
          badge: "Индивидуальная форма",
          description: "Премиальная стрижка под форму лица",
        },
      },
      hairLengths: {
        short: { label: "Короткие", description: "До плеч" },
        medium: { label: "Средние", description: "До лопаток" },
        long: { label: "Длинные", description: "Ниже лопаток" },
      },
    },
    step2: {
      back: "← Назад",
      yourChoice: "Ваш выбор",
      change: "Изменить",
      nameLabel: "Ваше имя",
      namePlaceholder: "Например: Айсель Мамедова",
      phoneLabel: "Ваш номер телефона",
      phonePlaceholder: "+994 (__) ___-__-__",
      commentLabel: "Дополнительный комментарий",
      commentPlaceholder:
        "Желаемая дата, время или текущее состояние волос...",
      submitCta: "Подтвердить запись ✨",
      submitting: "Отправка...",
      errors: {
        nameTooShort: "Имя должно содержать не менее 2 символов",
        phoneIncomplete: "Номер телефона введён не полностью",
        phoneInvalidPrefix: (prefixes: string) =>
          `Неверный код оператора (${prefixes})`,
        submitFailed: "Произошла ошибка. Пожалуйста, попробуйте снова.",
      },
    },
    step3: {
      title: "Ваша заявка успешно принята!",
      subtitle: (masterFirstName: string) =>
        `${masterFirstName} свяжется с вами в ближайшее время.`,
      serviceLabel: "Услуга",
      lengthLabel: "Длина",
      nameLabel: "Имя",
      phoneLabel: "Телефон",
      whatsappCta: "Подтвердить через WhatsApp",
      whatsapp: {
        greeting: (masterFirstName: string) =>
          `Здравствуйте, ${masterFirstName}! Я записался(-ась) через сайт:`,
        serviceLine: (service: string) => `\u{1F487} Услуга: ${service}`,
        lengthLine: (length: string) =>
          `\u{1F4CF} Длина волос: ${length}`,
        nameLine: (name: string) => `\u{1F464} Имя: ${name}`,
        phoneLine: (phone: string) => `\u{1F4DE} Мой номер: ${phone}`,
        commentLine: (comment: string) => `\u{1F4AC} Комментарий: ${comment}`,
        noComment: "Комментариев нет",
      },
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = typeof translations.az;

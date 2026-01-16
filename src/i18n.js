import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Welcome
      "Ski equipment delivered at your doorstep":
        "Ski equipment delivered at your doorstep",
      Services: "Our Services",
      bookNow: "Book Equipment",
      "Working Hours: 07:30 - 23:00": "Open daily 07:30 – 23:00",
      tapToOpen: "Tap map to open in Google Maps",

      // Form General
      bookEquipment: "Book Equipment",
      whatDoYouNeed: "What do you need?",
      name: "Name",
      email: "Email",
      optional: "optional",
      phone: "Phone Number",
      from: "From",
      to: "To",
      location: "Delivery Location",
      height: "Height",
      weight: "Weight",
      age: "Age",
      sex: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      helmet: "Helmet",
      helmetSize: "Helmet Size",
      goggles: "Goggles",
      jacket: "Jacket",
      jacketSize: "Jacket Size",
      pants: "Pants",
      pantsSize: "Pants Size",
      shoeSize: "Shoe Size",
      notes: "Notes",
      specialNotes: "Additional note",
      select: "Select",
      selectSize: "Select size",

      // Equipment Types
      fullSet: "Full Ski Set",
      skis: "Skis Only",
      boots: "Boots Only",
      snowboard: "Snowboard Set",
      clothes: "Clothes Only",

      // Basket
      yourReservations: "Your Reservations",
      addToList: "Add to List",
      days: "days",
      remove: "Remove",
      sendAllReservations: "Send All Reservations",
      noItems: "No items in the reservation.",

      // Popups
      itemAdded: "Item Added!",
      addAnotherPerson: "You can add another person now.",
      reservationSent: "Reservation Sent!",
      thankYouOrderReceived: "Thank you! We received your order.",
      done: "Done",

      // Validation
      required: "This field is required",
      invalidPhone: "Please enter a valid phone number",
      heightMin: "Height must be at least 100 cm",
      heightMax: "Height cannot exceed 220 cm",
      weightMin: "Weight must be at least 30 kg",
      weightMax: "Weight cannot exceed 150 kg",
      ageMin: "Age must be at least 3",
      ageMax: "Age cannot exceed 100",

      // Email
      emailError: "Failed to send. Please try WhatsApp or call us.",

      // Customer email details
      rentalDates: "Rental Dates",
      customer: "Customer",

      // Language
      selectLanguage: "Language",

      // Services
      service1: "Skis, boots, poles",
      service2: "Helmets, goggles, jackets, pants",
      service3: "Delivery to your apartment",
      service4: "Rent or buy — new & used",
      service5: "Skis, snowboards, boots, helmets, goggles, jackets and pants",
      service6: "Book in advance and pick up your equipment",


      checkPricing: "Check pricing",
      hidePricing: "Hide pricing",
      equipment: "Equipment/day",
      nextDay: "Next day",

      skiSet: "Ski set",
      snowboardSet: "Snowboard set",
      skisPoles: "Skis + poles",
      kidsSkis: "Kids skis (<135cm)",
      sled: "Sled",

      deliveryMethod: "Delivery method",
      deliveryToApartment: "Delivery to apartment",
      pickupAtRental: "Pick up at ski rental",
      pickupInfo:
        "Pickup instructions and exact location will be sent to you by email.",
      deliveryLocked:
        "Delivery method is locked after adding the first reservation.",
      deliveryHoursInfo:
      "Delivery is available daily between 14:00 and 21:00.",
      shoeSizeRequired:
        "Shoe size is mandatory.",
      phoneRequired:
        "Phone number is required",
        nameRequired: "Name is required",
      emailRequired: "Email is required",
      fromDateRequired: "Start date is required",
      toDateRequired: "End date is required",
      locationRequired: "Location is required",
      heightRequired: "Height is required",
      weightRequired: "Weight is required",
      invalidEmail: "Please enter a valid email address",
      locationLockedSameAddress: "Address is locked because all equipment must be delivered to the same address.",

    },
  },

  // ==================== MONTENEGRIN ====================
  cnr: {
    translation: {
      // Welcome
      "Ski equipment delivered at your doorstep":
        "Ski oprema dostavljena na vaša vrata",
      Services: "Naše usluge",
      bookNow: "Rezerviši opremu",
      "Working Hours: 07:30 - 23:00": "Otvoreno svaki dan 07:30 – 23:00",
      tapToOpen: "Dodirnite mapu za Google Maps",

      // Form General
      bookEquipment: "Rezervacija opreme",
      whatDoYouNeed: "Šta vam treba?",
      name: "Ime",
      email: "Email",
      optional: "opciono",
      phone: "Broj telefona",
      from: "Od",
      to: "Do",
      location: "Lokacija isporuke",
      height: "Visina",
      weight: "Težina",
      age: "Godine",
      sex: "Pol",
      male: "Muško",
      female: "Žensko",
      other: "Drugo",
      helmet: "Kaciga",
      helmetSize: "Veličina kacige",
      goggles: "Naočare",
      jacket: "Jakna",
      jacketSize: "Veličina jakne",
      pants: "Pantalone",
      pantsSize: "Veličina pantalona",
      shoeSize: "Broj cipela",
      notes: "Napomene",
      specialNotes: "Dodatna napomena",
      select: "Izaberi",
      selectSize: "Izaberi veličinu",

      // Equipment
      fullSet: "Komplet (skije + pancerice)",
      skis: "Samo skije",
      boots: "Samo pancerice",
      snowboard: "Snowboard set",
      clothes: "Samo odjeća",

      // Basket
      yourReservations: "Vaše rezervacije",
      addToList: "Dodaj",
      days: "dana",
      remove: "Ukloni",
      sendAllReservations: "Pošalji sve rezervacije",
      noItems: "Nema dodatih stavki.",

      // Popups
      itemAdded: "Dodato!",
      addAnotherPerson: "Možete napraviti još rezervacija.",
      reservationSent: "Rezervacija poslata!",
      thankYouOrderReceived: "Hvala! Primili smo vašu rezervaciju.",
      done: "Gotovo",

      // Validation
      required: "Ovo polje je obavezno",
      invalidPhone: "Unesite ispravan broj telefona",
      heightMin: "Visina mora biti najmanje 100 cm",
      heightMax: "Visina ne može biti veća od 220 cm",
      weightMin: "Težina mora biti najmanje 30 kg",
      weightMax: "Težina ne može biti veća od 150 kg",
      ageMin: "Godine moraju biti najmanje 3",
      ageMax: "Godine ne mogu biti veće od 100",

      // Email
      emailError: "Slanje nije uspjelo. Kontaktirajte WhatsApp ili pozivom.",

      // Customer email
      rentalDates: "Datum najma",
      customer: "Kupac",

      // Language
      selectLanguage: "Jezik",

      // Services
      service1: "Skije, pancerice, štapovi",
      service2: "Kacige, naočare, jakne, pantalone",
      service3: "Dostava do apartmana",
      service4: "Iznajmljivanje ili kupovina — novo i polovno",
      service5: "Skije, bordovi, pancerice, kacige, naočare, jakne i pantalone",
      service6: "Rezervišite unaprijed i preuzmite vašu opremu",

      checkPricing: "Pogledaj cjenovnik",
      hidePricing: "Sakrij cjenovnik",
      equipment: "Oprema/dan",
      nextDay: "Sledeći dan",

      skiSet: "Ski komplet",
      snowboardSet: "Snowboard komplet",
      skisPoles: "Skije + štapovi",
      kidsSkis: "Male skije (<135cm)",
      sled: "Sanke",

      deliveryMethod: "Način preuzimanja",
      deliveryToApartment: "Dostava do apartmana",
      pickupAtRental: "Preuzimanje u ski rentalu",
      pickupInfo:
        "Tačna lokacija i instrukcije za preuzimanje biće poslate email-om.",
      deliveryLocked:
        "Način preuzimanja se ne može mijenjati nakon prve rezervacije.",

      deliveryHoursInfo:
        "Dostava je dostupna svakog dana u periodu od 14:00 do 21:00.",
      nameRequired: "Ime je obavezno",
      emailRequired: "Email je obavezan",
      phoneRequired: "Broj telefona je obavezan",
      fromDateRequired: "Datum početka je obavezan",
      toDateRequired: "Datum završetka je obavezan",
      locationRequired: "Lokacija je obavezna",
      heightRequired: "Visina je obavezna",
      weightRequired: "Težina je obavezna",
      shoeSizeRequired: "Broj cipela je obavezan",
      invalidEmail: "Unesite email adresu u ispravnom formatu",
      locationLockedSameAddress:  "Adresa je zaključana jer sva oprema mora biti dostavljena na istu adresu.",

    },
  },

  // ==================== ALBANIAN ====================
  sq: {
    translation: {
      "Ski equipment delivered at your doorstep":
        "Pajisje skijimi të dërguara deri te dera juaj",
      Services: "Shërbimet tona",
      bookNow: "Rezervo pajisjet",
      "Working Hours: 07:30 - 23:00": "E hapur çdo ditë 07:30 – 23:00",
      tapToOpen: "Prekni hartën për Google Maps",

      // Form
      bookEquipment: "Rezervoni pajisjet",
      whatDoYouNeed: "Çfarë ju nevojitet?",
      name: "Emri",
      email: "Email",
      optional: "opsionale",
      phone: "Numri i telefonit",
      from: "Nga",
      to: "Deri",
      location: "Lokacioni i dorëzimit",
      height: "Lartësia",
      weight: "Pesha",
      age: "Mosha",
      sex: "Gjinia",
      male: "Mashkull",
      female: "Femër",
      other: "Tjetër",
      helmet: "Helmetë",
      helmetSize: "Madhësia e helmetës",
      goggles: "Syze skijimi",
      jacket: "Xhaketë",
      jacketSize: "Madhësia e xhaketës",
      pants: "Pantallona",
      pantsSize: "Madhësia e pantallonave",
      shoeSize: "Madhësia e këpucëve",
      notes: "Shënime",
      specialNotes: "Shënim shtesë",
      select: "Zgjidh",
      selectSize: "Zgjidh madhësinë",

      // Equipment
      fullSet: "Set i plotë (ski + çizme)",
      skis: "Vetëm ski",
      boots: "Vetëm çizme",
      snowboard: "Set snowboard",
      clothes: "Vetëm rroba",

      // Basket
      yourReservations: "Rezervimet tuaja",
      addToList: "Shto",
      days: "ditë",
      remove: "Hiq",
      sendAllReservations: "Dërgo të gjitha rezervimet",
      noItems: "Nuk ka artikuj në rezervim.",

      // Popups
      itemAdded: "Artikulli u shtua!",
      addAnotherPerson: "Mund të shtoni një person tjetër.",
      reservationSent: "Rezervimi u dërgua!",
      thankYouOrderReceived: "Faleminderit! Ne e pranuam rezervimin tuaj.",
      done: "Përfundoi",

      // Validation
      required: "Kjo fushë është e detyrueshme",
      invalidPhone: "Shkruani një numër telefoni të vlefshëm",
      heightMin: "Lartësia duhet të jetë të paktën 100 cm",
      heightMax: "Lartësia nuk mund të kalojë 220 cm",
      weightMin: "Pesha duhet të jetë të paktën 30 kg",
      weightMax: "Pesha nuk mund të kalojë 150 kg",
      ageMin: "Mosha duhet të jetë të paktën 3",
      ageMax: "Mosha nuk mund të kalojë 100",

      // Email
      emailError: "Dërgimi dështoi. Kontaktoni në WhatsApp ose telefon.",

      rentalDates: "Datat e marrjes",
      customer: "Klienti",

      selectLanguage: "Gjuha",

      service1: "Ski, çizme, shkopinj",
      service2: "Helmeta, syze, xhaketa, pantallona",
      service3: "Dorëzim në apartament",
      service4: "Me qira ose blerje — të reja & të përdorura",
      service5: "Ski, snowboard, këpucë skish, helmeta, syze, xhaketa dhe pantallona",
      service6: "Rezervoni paraprakisht dhe merrni pajisjet tuaja",

      checkPricing: "Shiko çmimet",
      hidePricing: "Fshih çmimet",
      equipment: "Pajisje/ditë",
      nextDay: "Dita tjetër",

      skiSet: "Set ski",
      snowboardSet: "Set snowboard",
      skisPoles: "Ski + shkopinj",
      kidsSkis: "Ski për fëmijë (<135cm)",
      sled: "Slitë",

      deliveryMethod: "Mënyra e marrjes",
      deliveryToApartment: "Dorëzim në apartament",
      pickupAtRental: "Marrje në ski rental",
      pickupInfo:
        "Udhëzimet dhe vendndodhja e saktë për marrje do t’ju dërgohen me email.",
      deliveryLocked:
        "Mënyra e marrjes nuk mund të ndryshohet pas rezervimit të parë.",
      deliveryHoursInfo:
        "Dorëzimi është i disponueshëm çdo ditë nga ora 14:00 deri në 21:00.",
      nameRequired: "Emri është i detyrueshëm",
      emailRequired: "Email-i është i detyrueshëm",
      phoneRequired: "Numri i telefonit është i detyrueshëm",
      fromDateRequired: "Data e fillimit është e detyrueshme",
      toDateRequired: "Data e përfundimit është e detyrueshme",
      locationRequired: "Lokacioni është i detyrueshëm",
      heightRequired: "Lartësia është e detyrueshme",
      weightRequired: "Pesha është e detyrueshme",
      shoeSizeRequired: "Madhësia e këpucëve është e detyrueshme",
      invalidEmail: "Shkruani një adresë email-i të vlefshme",
      locationLockedSameAddress: "Adresa është e kyçur sepse e gjithë pajisja duhet të dorëzohet në të njëjtën adresë.",

    },
  },

  // ==================== RUSSIAN ====================
  ru: {
    translation: {
      "Ski equipment delivered at your doorstep":
        "Горнолыжное снаряжение с доставкой до двери",
      Services: "Наши услуги",
      bookNow: "Забронировать оборудование",
      "Working Hours: 07:30 - 23:00": "Открыто ежедневно 07:30 – 23:00",
      tapToOpen: "Нажмите на карту для Google Карт",

      // Form
      bookEquipment: "Бронирование оборудования",
      whatDoYouNeed: "Что вам нужно?",
      name: "Имя",
      email: "Email",
      optional: "необязательно",
      phone: "Телефон",
      from: "С",
      to: "По",
      location: "Адрес доставки",
      height: "Рост",
      weight: "Вес",
      age: "Возраст",
      sex: "Пол",
      male: "Мужской",
      female: "Женский",
      other: "Другое",
      helmet: "Шлем",
      helmetSize: "Размер шлема",
      goggles: "Очки",
      jacket: "Куртка",
      jacketSize: "Размер куртки",
      pants: "Штаны",
      pantsSize: "Размер штанов",
      shoeSize: "Размер обуви",
      notes: "Заметки",
      specialNotes: "Дополнительная заметка",
      select: "Выбрать",
      selectSize: "Выберите размер",

      // Equipment
      fullSet: "Полный комплект (лыжи + ботинки)",
      skis: "Только лыжи",
      boots: "Только ботинки",
      snowboard: "Комплект сноуборда",
      clothes: "Только одежда",

      // Basket
      yourReservations: "Ваши бронирования",
      addToList: "Добавить",
      days: "дней",
      remove: "Удалить",
      sendAllReservations: "Отправить все бронирования",
      noItems: "Нет добавленных элементов.",

      // Popups
      itemAdded: "Добавлено!",
      addAnotherPerson: "Вы можете добавить еще одного человека.",
      reservationSent: "Бронирование отправлено!",
      thankYouOrderReceived: "Спасибо! Мы получили ваше бронирование.",
      done: "Готово",

      // Validation
      required: "Это поле обязательно",
      invalidPhone: "Введите корректный номер телефона",
      heightMin: "Рост должен быть не менее 100 см",
      heightMax: "Рост не может превышать 220 см",
      weightMin: "Вес должен быть не менее 30 кг",
      weightMax: "Вес не может превышать 150 кг",
      ageMin: "Возраст должен быть не менее 3 лет",
      ageMax: "Возраст не может превышать 100 лет",

      // Email
      emailError:
        "Не удалось отправить. Свяжитесь с нами через WhatsApp или по телефону.",

      rentalDates: "Даты аренды",
      customer: "Клиент",

      selectLanguage: "Язык",

      service1: "Лыжи, ботинки, палки",
      service2: "Шлемы, очки, куртки, штаны",
      service3: "Доставка в апартаменты",
      service4: "Аренда или покупка — новое и б/у",
      service5: "Лыжи, сноуборды, ботинки, шлемы, очки, куртки и брюки",
      service6: "Забронируйте заранее и получите своё снаряжение",

      checkPricing: "Посмотреть цены",
      hidePricing: "Скрыть цены",
      equipment: "Оборудование/день",
      nextDay: "Следующий день",

      skiSet: "Лыжный комплект",
      snowboardSet: "Комплект сноуборда",
      skisPoles: "Лыжи + палки",
      kidsSkis: "Детские лыжи (<135 см)",
      sled: "Сани",

      deliveryMethod: "Способ получения",
      deliveryToApartment: "Доставка в апартаменты",
      pickupAtRental: "Самовывоз в прокате",
      pickupInfo:
        "Инструкции и точное место получения будут отправлены вам по электронной почте.",
      deliveryLocked:
        "Способ получения нельзя изменить после добавления первой брони.",
      deliveryHoursInfo:
        "Доставка осуществляется ежедневно с 14:00 до 21:00.",
      nameRequired: "Имя обязательно",
      emailRequired: "Email обязателен",
      phoneRequired: "Номер телефона обязателен",
      fromDateRequired: "Дата начала обязательна",
      toDateRequired: "Дата окончания обязательна",
      locationRequired: "Адрес обязателен",
      heightRequired: "Рост обязателен",
      weightRequired: "Вес обязателен",
      shoeSizeRequired: "Размер обуви обязателен",
      invalidEmail: "Введите корректный адрес электронной почты",
      locationLockedSameAddress:"Адрес заблокирован, так как всё оборудование должно быть доставлено по одному адресу.",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

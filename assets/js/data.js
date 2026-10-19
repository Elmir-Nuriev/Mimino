/**
 * Aura Del Mar Boutique Hotel & Restaurant Batumi
 * Data models: Rooms, Pricing, Amenities, Reviews, Rates
 */

const MIMINO_CONFIG = {
  hotel: {
    name: "Aura Del Mar",
    fullName: "Aura Del Mar Boutique Hotel & Restaurant",
    stars: 3,
    rating: {
      ostrovok: { score: 8.2, label: "Отлично", count: "1 отзыв" },
      booking: { score: 9.7, label: "Превосходно", count: "260+ отзывов" }
    },
    address: {
      street: "ул. Георгия Анцухелидзе, 31",
      city: "Батуми",
      country: "Грузия",
      postalCode: "6010",
      coords: { lat: 41.615425, lng: 41.596672 },
      seaDistance: "250 м от моря",
      airportDistance: "604 м от аэропорта Батуми"
    },
    contacts: {
      phone: "+995 599 12 34 56",
      whatsapp: "+995599123456",
      email: "info@auradelmar.ge",
      workingHours: "Круглосуточно 24/7"
    }
  },
  
  // Base currency is GEL with 1-to-1 sync like on Horizont & Vortex
  currencies: {
    GEL: { symbol: "₾", rate: 1, name: "GEL (₾)", prefix: "", suffix: " ₾" },
    USD: { symbol: "$", rate: 1 / 2.7, name: "USD ($)", prefix: "$", suffix: "" },
    EUR: { symbol: "€", rate: 1 / 2.95, name: "EUR (€)", prefix: "€", suffix: "" },
    RUB: { symbol: "₽", rate: 35, name: "RUB (₽)", prefix: "", suffix: " ₽" }
  },

  rooms: [
    {
      id: "standard-double",
      category: "double",
      priceGEL: 160,
      priceRUB: 5600,
      area: 22,
      images: [
        { url: "assets/images/std-room-1.jpg", alt: "Standard Double Room Aura Del Mar" },
        { url: "assets/images/std-room-2.jpg", alt: "Room with Balcony" },
        { url: "assets/images/bathroom-1.jpg", alt: "Private Bathroom" },
        { url: "assets/images/hotel-facade.jpg", alt: "Aura Del Mar Facade" }
      ],
      i18n: {
        ru: {
          title: "Стандартный двухместный номер",
          subtitle: "Standard Double Room with Balcony",
          capacity: "2 гостя",
          bed: "1 большая двуспальная кровать Queen Size",
          view: "Вид на тихий внутренний дворик и сад",
          badge: "Популярный выбор",
          description: "Уютный светлый номер в теплых тонах, идеально подходящий для пары или делового путешественника. Оснащен собственной ванной комнатой, Smart TV и выходом на балкон."
        },
        en: {
          title: "Standard Double Room",
          subtitle: "Standard Double Room with Balcony",
          capacity: "2 Guests",
          bed: "1 Queen Size Bed",
          view: "Courtyard & Garden View",
          badge: "Top Choice",
          description: "A bright and comfortable room in warm natural tones with a private balcony, en-suite bathroom, Smart TV, and climate control."
        },
        ka: {
          title: "სტანდარტული ორადგილიანი ნომერი",
          subtitle: "ორადგილიანი ნომერი აივნით",
          capacity: "2 სტუმარი",
          bed: "1 Queen Size საწოლი",
          view: "ხედი მყუდრო ეზოზე",
          badge: "პოპულარული",
          description: "ნათელი და კომფორტული ნომერი აივნით, საკუთარი აბაზანით, Smart TV-ითა და კონდიციონერით."
        },
        tr: {
          title: "Standart Çift Kişilik Oda",
          subtitle: "Balkonlu Çift Kişilik Oda",
          capacity: "2 Misafir",
          bed: "1 Queen Size Yatak",
          view: "Huzurlu Avlu Manzarası",
          badge: "Popüler Seçim",
          description: "Balkonlu, özel banyolu, Smart TV ve klimalı aydınlık ve huzurlu çift kişilik oda."
        }
      }
    },
    {
      id: "superior-double",
      category: "double",
      priceGEL: 195,
      priceRUB: 6800,
      area: 28,
      images: [
        { url: "assets/images/sup-room-1.jpg", alt: "Superior Double Room" },
        { url: "assets/images/sup-room-2.jpg", alt: "Cozy Bedroom" },
        { url: "assets/images/balcony-view.jpg", alt: "Balcony View" },
        { url: "assets/images/bathroom-2.jpg", alt: "Spacious Bathroom" }
      ],
      i18n: {
        ru: {
          title: "Улучшенный двухместный с балконом",
          subtitle: "Superior Double Room with Mountain View",
          capacity: "2 гостя",
          bed: "1 роскошная King Size кровать",
          view: "Панорамный вид на горы Аджарии и город",
          badge: "Вид на горы",
          description: "Просторный номер повышенной комфортности с панорамными окнами и видовым балконом. Идеален для романтического отдыха в Батуми с видом на закаты и горы."
        },
        en: {
          title: "Superior Double with Balcony",
          subtitle: "Superior Double Room with Mountain View",
          capacity: "2 Guests",
          bed: "1 King Size Bed",
          view: "Panoramic Mountain & City View",
          badge: "Mountain View",
          description: "Spacious elevated comfort room featuring panoramic windows, furnished balcony, coffee station, and scenic views."
        },
        ka: {
          title: "გაუმჯობესებული ორადგილიანი აივნით",
          subtitle: "ორადგილიანი ნომერი მთის ხედით",
          capacity: "2 სტუმარი",
          bed: "1 King Size საწოლი",
          view: "პანორამული ხედი მთებზე",
          badge: "მთის ხედი",
          description: "ფართო ნომერი პანორამული აივნით, King Size საწოლით, ყავის სადგურითა და ულამაზესი ხედებით."
        },
        tr: {
          title: "Balkonlu Superior Çift Kişilik",
          subtitle: "Dağ Manzaralı Superior Oda",
          capacity: "2 Misafir",
          bed: "1 King Size Yatak",
          view: "Panoramik Dağ & Şehir Manzarası",
          badge: "Dağ Manzarası",
          description: "Panoramik pencerelere, geniş balkona ve kahve istasyonuna sahip ferah superior oda."
        }
      }
    },
    {
      id: "family-suite",
      category: "family",
      priceGEL: 240,
      priceRUB: 8400,
      area: 38,
      images: [
        { url: "assets/images/fam-room-1.jpg", alt: "Family Suite Aura Del Mar" },
        { url: "assets/images/fam-room-2.jpg", alt: "Family Bedroom" },
        { url: "assets/images/std-room-2.jpg", alt: "Terrace & Balcony" },
        { url: "assets/images/bathroom-1.jpg", alt: "Family Bathroom" }
      ],
      i18n: {
        ru: {
          title: "Семейный номер с собственной ванной",
          subtitle: "Family Suite with 2 Sleeping Areas",
          capacity: "до 4 гостей",
          bed: "1 двуспальная кровать + 2 односпальные кровати",
          view: "Вид на Новый Бульвар и зеленую зону",
          badge: "Идеально для семей",
          description: "Большой семейный номер, где с комфортом разместится семья с детьми или компания друзей. Продуманное зонирование обеспечивает личное пространство каждому гостю."
        },
        en: {
          title: "Family Suite with Private Bath",
          subtitle: "Family Suite with 2 Sleeping Areas",
          capacity: "Up to 4 Guests",
          bed: "1 Double Bed + 2 Twin Beds",
          view: "New Boulevard & Park View",
          badge: "Family Pick",
          description: "Large 38 m² suite with two designated sleeping areas, private balcony, and enhanced soundproofing for relaxing family holidays."
        },
        ka: {
          title: "საოჯახო ნომერი საკუთარი აბაზანით",
          subtitle: "საოჯახო ლუქსი 2 საძინებელი ზონით",
          capacity: "4 სტუმრამდე",
          bed: "1 ორადგილიანი + 2 ერთადგილიანი საწოლი",
          view: "ახალი ბულვარის ხედი",
          badge: "ოჯახებისთვის",
          description: "დიდი 38 მ² საოჯახო ნომერი ორი საძინებელი ზონით, აივნითა და მაღალი ხმის იზოლაციით."
        },
        tr: {
          title: "Özel Banyolu Aile Süiti",
          subtitle: "2 Yatak Bölümlü Aile Odası",
          capacity: "4 Kişiye Kadar",
          bed: "1 Çift Kişilik + 2 Tek Kişilik Yatak",
          view: "Yeni Bulvar Manzarası",
          badge: "Aileler İçin",
          description: "İki ayrı uyku alanına, geniş balkona ve ses yalıtımına sahip 38 m² ferah aile süiti."
        }
      }
    },
    {
      id: "deluxe-studio",
      category: "deluxe",
      priceGEL: 310,
      priceRUB: 10850,
      area: 46,
      images: [
        { url: "assets/images/deluxe-room-1.jpg", alt: "Deluxe Studio Aura Del Mar" },
        { url: "assets/images/deluxe-room-2.jpg", alt: "Living & Bedroom" },
        { url: "assets/images/terrace-2.jpg", alt: "Sunset Terrace" },
        { url: "assets/images/bathroom-2.jpg", alt: "Design Bathroom" }
      ],
      i18n: {
        ru: {
          title: "Делюкс Студия с видом на море",
          subtitle: "Deluxe Studio with Panoramic Sea Sunset View",
          capacity: "до 3 гостей",
          bed: "1 King Size кровать + дизайнерский диван",
          view: "Прямой вид на Чёрное море и закаты",
          badge: "Премиум класс",
          description: "Флагманский номер отеля Aura Del Mar с огромной террасой, откуда открывается потрясающий вид на море и взлетающие самолёты. Оснащен гостиной зоной и мини-кухней."
        },
        en: {
          title: "Deluxe Studio with Sea View",
          subtitle: "Deluxe Studio with Panoramic Sea Sunset View",
          capacity: "Up to 3 Guests",
          bed: "1 King Size Bed + Designer Sofa",
          view: "Direct Black Sea & Sunset View",
          badge: "Premium Suite",
          description: "Flagship luxury suite featuring an oversized panoramic terrace, kitchenette, Nespresso machine, and direct sunset views over the sea."
        },
        ka: {
          title: "დელუქს სტუდია ზღვის ხედით",
          subtitle: "დელუქსი ზღვისა და მზის ჩასვლის ხედით",
          capacity: "3 სტუმრამდე",
          bed: "1 King Size საწოლი + დივანი",
          view: "შავი ზღვისა და მზის ჩასვლის ხედი",
          badge: "პრემიუმი",
          description: "Aura Del Mar-ის საუკეთესო ნომერი დიდი პანორამული ტერასით, მინი-სამზარეულოთი და ზღვის ულამაზესი ხედებით."
        },
        tr: {
          title: "Deniz Manzaralı Deluxe Stüdyo",
          subtitle: "Panoramik Gün Batımı Manzaralı Stüdyo",
          capacity: "3 Kişiye Kadar",
          bed: "1 King Size Yatak + Tasarım Kanepe",
          view: "Doğrudan Deniz ve Gün Batımı",
          badge: "Premium Süit",
          description: "Geniş panoramik terasa, mini mutfağa ve deniz üzerinde batan güneş manzarasına sahip amiral gemisi süit."
        }
      }
    }
  ],

  extraServices: [
    {
      id: "transfer",
      priceGEL: 35,
      priceRUB: 1200,
      i18n: {
        ru: { name: "Индивидуальный трансфер (Аэропорт / Ж/Д Батуми)", desc: "Комфортабельный автомобиль с кондиционером встретит вас прямо у выхода из терминала." },
        en: { name: "Private Airport/Railway Transfer", desc: "Air-conditioned premium vehicle meeting you directly at the terminal arrivals gate." },
        ka: { name: "ინდივიდუალური ტრანსფერი (აეროპორტი/სადგური)", desc: "კომფორტული მანქანა კონდიციონერით დაგხვდებათ ტერმინალის გასასვლელთან." },
        tr: { name: "Özel Havalimanı / Gar Transferi", desc: "Klimalı konforlu araç sizi doğrudan terminal çıkışında karşılar." }
      }
    },
    {
      id: "dinner",
      priceGEL: 80,
      priceRUB: 2800,
      i18n: {
        ru: { name: "Праздничный ужин на двоих в ресторане «Aura Del Mar»", desc: "Аджарские блюда, шашлык на углях, хачапури и домашнее вино." },
        en: { name: "Gourmet Dinner for Two at Aura Del Mar", desc: "Traditional Adjarian delicacies, charcoal grilled mtsvadi, khachapuri, and house wine." },
        ka: { name: "სადღესასწაულო ვახშამი ორზე რესტორანში", desc: "აჭარული კერძები, მწვადი მაყალზე, ხაჭაპური და საუკეთესო ღვინო." },
        tr: { name: "Restoranda İki Kişilik Akşam Yemeği", desc: "Acaristan lezzetleri, mangalda şaşlık, haçapuri ve ev yapımı Gürcü şarabı." }
      }
    },
    {
      id: "early_checkin",
      priceGEL: 45,
      priceRUB: 1500,
      i18n: {
        ru: { name: "Ранний заезд / Поздний выезд", desc: "Возможность заселиться до 14:00 или продлить пребывание до 18:00 (по согласованию)." },
        en: { name: "Guaranteed Early Check-in / Late Check-out", desc: "Check-in before 14:00 or stay until 18:00 upon prior arrangement." },
        ka: { name: "ადრეული შესვლა / გვიანი გასვლა", desc: "შესვლა 14:00-მდე ან ყოფნის გახანგრძლივება 18:00-მდე შეთანხმებით." },
        tr: { name: "Erken Giriş / Geç Çıkış", desc: "Önceden teyit ile 14:00'ten önce giriş veya 18:00'e kadar geç çıkış imkanı." }
      }
    },
    {
      id: "wine_tour",
      priceGEL: 100,
      priceRUB: 3500,
      i18n: {
        ru: { name: "Экскурсия в горы Аджарии и дегустация вин", desc: "Водопад Махунцети, арочный мост Царицы Тамары и винодельня с гидом." },
        en: { name: "Mountain Adjaria Tour & Wine Tasting", desc: "Makhuntseti waterfall, Queen Tamara bridge, and authentic boutique winery visit." },
        ka: { name: "ექსკურსია მთიან აჭარაში & ღვინის დეგუსტაცია", desc: "მახუნცეთის ჩანჩქერი, თამარ მეფის ხიდი და ავთენტური მარნის მონახულება." },
        tr: { name: "Acaristan Dağları Turu ve Şarap Tadımı", desc: "Mahuntseti şelalesi, Kraliçe Tamara köprüsü ve butik şarap evi gezisi." }
      }
    }
  ],

  distances: [
    {
      place: {
        ru: "Побережье Чёрного моря (Новый Бульвар)",
        en: "Black Sea Coast (New Boulevard)",
        ka: "შავი ზღვის სანაპირო (ახალი ბულვარი)",
        tr: "Karadeniz Sahili (Yeni Bulvar)"
      },
      distance: "250 м",
      walk: {
        ru: "3 мин пешком",
        en: "3 min walk",
        ka: "3 წთ ფეხით",
        tr: "3 dk yürüyüş"
      }
    },
    {
      place: {
        ru: "Батумский пляж",
        en: "Batumi Seaside Beach",
        ka: "ბათუმის სანაპირო",
        tr: "Batum Plajı"
      },
      distance: "835 м",
      walk: {
        ru: "10 мин пешком",
        en: "10 min walk",
        ka: "10 წთ ფეხით",
        tr: "10 dk yürüyüş"
      }
    },
    {
      place: {
        ru: "Международный аэропорт Батуми (BUS)",
        en: "Batumi International Airport (BUS)",
        ka: "ბათუმის საერთაშორისო აეროპორტი (BUS)",
        tr: "Batum Uluslararası Havalimanı (BUS)"
      },
      distance: "604 м",
      walk: {
        ru: "7 мин пешком / 2 мин на авто",
        en: "7 min walk / 2 min drive",
        ka: "7 წთ ფეხით / 2 წთ მანქანით",
        tr: "7 dk yürüme / 2 dk araç"
      }
    },
    {
      place: {
        ru: "Приморский Парк Батуми",
        en: "Seaside Boulevard Park",
        ka: "ბათუმის ზღვისპირა პარკი",
        tr: "Sahil Parkı"
      },
      distance: "918 м",
      walk: {
        ru: "11 мин пешком",
        en: "11 min walk",
        ka: "11 წთ ფეხით",
        tr: "11 dk yürüyüş"
      }
    },
    {
      place: {
        ru: "Этнографический музей «Борджгало»",
        en: "Borjgalo Ethnographic Museum",
        ka: "ეთნოგრაფიული მუზეუმი «ბორჯღალო»",
        tr: "Borjgalo Etnografya Müzesi"
      },
      distance: "2.5 км",
      walk: {
        ru: "5 мин на авто",
        en: "5 min drive",
        ka: "5 წთ მანქანით",
        tr: "5 dk araçla"
      }
    },
    {
      place: {
        ru: "Батумский Дельфинарий и Парк 6 Мая",
        en: "Batumi Dolphinarium & May 6 Park",
        ka: "ბათუმის დელფინარიუმი & 6 მაისის პარკი",
        tr: "Batum Yunus Akvaryumu & 6 Mayıs Parkı"
      },
      distance: "4.2 км",
      walk: {
        ru: "8 мин на авто",
        en: "8 min drive",
        ka: "8 წთ მანქანით",
        tr: "8 dk araçla"
      }
    },
    {
      place: {
        ru: "Гонио-Апсаросская крепость",
        en: "Gonio-Apsaros Fortress",
        ka: "გონიო-აფსაროსის ციხესიმაგრე",
        tr: "Gonio-Apsaros Kalesi"
      },
      distance: "4.9 км",
      walk: {
        ru: "9 мин на авто",
        en: "9 min drive",
        ka: "9 წთ მანქანით",
        tr: "9 dk araçla"
      }
    },
    {
      place: {
        ru: "Площадь Пьяцца и Старый город",
        en: "Piazza Square & Old Batumi",
        ka: "პიაცა და ძველი ბათუმი",
        tr: "Piazza Meydanı & Eski Batum"
      },
      distance: "5.3 км",
      walk: {
        ru: "10 мин на авто",
        en: "10 min drive",
        ka: "10 წთ მანქანით",
        tr: "10 dk araçla"
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MIMINO_CONFIG;
}

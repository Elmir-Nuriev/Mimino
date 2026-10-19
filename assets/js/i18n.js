/**
 * AURA DEL MAR BATUMI - Master Multilingual i18n Module
 * Languages: Russian (RU), English (EN), Georgian (KA), Turkish (TR)
 */

const I18N = {
  "ru": {
    // Topbar & Nav
    "topbar.address": "Батуми, ул. Георгия Анцухелидзе, 31 (250 м до моря)",
    "topbar.reception": "Стойка регистрации 24/7",
    "topbar.direct_booking": "Прямое бронирование без комиссии",
    "topbar.lang_label": "Язык:",
    "topbar.currency_label": "Валюта:",
    "topbar.call": "Позвонить",
    "nav.rooms": "Номера и цены",
    "nav.about": "Об отеле",
    "nav.restaurant": "Ресторан",
    "nav.amenities": "Удобства",
    "nav.reviews": "Отзывы",
    "nav.location": "Локация",
    "nav.faq": "Вопросы",
    "nav.book": "Забронировать",
    "nav.choose_lang": "Выберите язык / Select Language:",

    // Hero
    "hero.tag": "Бутик-отель на побережье Чёрного моря • Батуми",
    "hero.title": "Отель <em>Aura Del Mar</em><br>в сердце Батуми",
    "hero.desc": "Камерный бутик-отель на 12 номеров с грузинским гостеприимством, рестораном авторской кухни, панорамной террасой и захватывающим видом на взлетающие самолёты.",
    "hero.badge_sea": "250 м до моря",
    "hero.badge_breakfast": "Вкусный завтрак включен",
    "hero.badge_parking": "Бесплатная парковка",
    "hero.rating_score": "8.2",
    "hero.rating_max": "/ 10",
    "hero.rating_title": "Отлично",
    "hero.rating_source": "Рейтинг по отзывам Ostrovok",
    "hero.sea_card_title": "1-я линия Нового Бульвара",
    "hero.sea_card_desc": "3 минуты прогулки до пляжа",
    "hero.cta_rooms": "Выбрать номер",
    "hero.cta_restaurant": "О ресторане",

    // Rooms Section
    "rooms.tag": "Каталог номеров и цены",
    "rooms.title": "Номера бутик-отеля Aura Del Mar",
    "rooms.subtitle": "Всего 12 просторных номеров. В каждом номере балкон, кондиционер, скоростной Wi-Fi и бесплатный сытный завтрак каждое утро.",
    "rooms.filter_all": "Все категории (12)",
    "rooms.filter_double": "Двухместные",
    "rooms.filter_family": "Семейные",
    "rooms.filter_deluxe": "Делюкс & Студии",
    "rooms.per_night": "/ сутки",
    "rooms.price_label": "Цена за 1 ночь",
    "rooms.gallery_btn": "Галерея",
    "rooms.book_btn": "Забронировать",
    "rooms.breakfast_tag": "☕ Завтрак включен",
    "rooms.ac_tag": "❄ Кондиционер",
    "rooms.tv_tag": "📺 Smart TV",
    "rooms.wifi_tag": "📶 Wi-Fi 100 Мбит",
    "rooms.shower_tag": "🚿 Собственный душ",
    "rooms.balcony_tag": "🌿 Балкон",

    // About Section
    "about.tag": "О бутик-отеле",
    "about.title": "Уют, спокойствие и вид на море",
    "about.subtitle": "Отель «Aura Del Mar» создан для тех, кто ценит искреннее персональное внимание, чистоту и домашний уют вдали от шумных типовых высоток.",
    "about.p1": "Наш отель расположен в тихом зеленом районе Нового Бульвара Батуми, всего в 250 метрах от благоустроенного побережья и приморского парка.",
    "about.p2": "Уникальная особенность отеля — близость к взлетно-посадочной полосе. С террасы и верхних балконов открывается завораживающее зрелище заходящих на посадку лайнеров прямо над морским горизонтом, при этом номера отлично звукоизолированы для крепкого сна.",
    "about.f1_title": "Камерная атмосфера",
    "about.f1_desc": "Всего 12 номеров гарантируют тишину, отсутствие очередей и индивидуальный подход к каждому гостю.",
    "about.f2_title": "Пляж в 3 минутах",
    "about.f2_desc": "Прямая освещенная аллея до морского пляжа и набережной Нового Бульвара.",
    "about.f3_title": "Свой сад и терраса",
    "about.f3_desc": "Уютный зеленый двор с ротанговой мебелью, виноградной лозой и тенью в знойный полдень.",
    "about.f4_title": "Авиационный споттинг",
    "about.f4_desc": "Легендарная локация Батуми для эффектных фото самолётов на фоне закатного неба.",

    // Restaurant Section
    "restaurant.tag": "Гастрономия",
    "restaurant.title": "Ресторан и терраса «Aura Del Mar»",
    "restaurant.subtitle": "Настоящая аджарская и грузинская кухня из фермерских продуктов",
    "restaurant.p1": "Каждое утро мы накрываем для наших гостей сытный домашний завтрак: свежеиспеченный грузинский хлеб, домашний сыр сулугуни, фермерские яйца, хачапури, фрукты и ароматный кофе.",
    "restaurant.p2": "Днем и вечером наш ресторан работает по меню à la carte. Попробуйте нежнейший шашлык на углях, хинкали ручной лепки, сациви и отборные вина из знаменитых виноделен Кахетии.",
    "restaurant.cta_wa": "Забронировать столик в WhatsApp",
    "restaurant.dish1": "Аджарский хачапури",
    "restaurant.dish1_desc": "С хрустящей корочкой, молодым сыром и фермерским желтком",
    "restaurant.dish2": "Шашлык на мангале",
    "restaurant.dish2_desc": "Сочное маринованное мясо на виноградной лозе с соусом сацебели",
    "restaurant.dish3": "Грузинские вина",
    "restaurant.dish3_desc": "Саперави, Ркацители и Киндзмараули из квеври",

    // Amenities Section
    "amenities.tag": "Комфорт гостей",
    "amenities.title": "Все удобства для вашего идеального отдыха",
    "amenities.subtitle": "В отеле Aura Del Mar есть всё необходимое для длительного комфортного проживания, удаленной работы и яркого отпуска в Батуми.",

    // Reviews Section
    "reviews.tag": "Впечатления гостей",
    "reviews.title": "Реальные отзывы гостей",
    "reviews.subtitle": "Мы гордимся высокими оценками на мировых порталах бронирования",

    // Location Section
    "location.tag": "Расположение",
    "location.title": "Как добраться до отеля",
    "location.subtitle": "Батуми, Новый Бульвар, ул. Георгия Анцухелидзе, 31",
    "location.dist_title": "Расстояния от отеля:",
    "location.yandex_btn": "Открыть на Яндекс Картах",
    "location.google_btn": "Открыть на Google Maps",

    // FAQ Section
    "faq.tag": "Частые вопросы",
    "faq.title": "Ответы на популярные вопросы гостей",
    "faq.q1": "Во сколько заезд и выезд из отеля?",
    "faq.a1": "Стандартное время заезда — с 14:00, выезд — до 12:00. При наличии свободных номеров мы с радостью предоставим ранний заезд или поздний выезд без дополнительной платы.",
    "faq.q2": "Включен ли завтрак в стоимость проживания?",
    "faq.a2": "Да! Вкусный и сытный континентальный завтрак с горячими грузинскими блюдами включен в стоимость проживания для всех гостей.",
    "faq.q3": "Предоставляете ли вы трансфер из аэропорта?",
    "faq.a3": "Да, отель находится всего в 600 метрах от международного аэропорта Батуми. Мы можем встретить вас на комфортабельном автомобиле с кондиционером.",
    "faq.q4": "Есть ли бесплатная парковка?",
    "faq.a4": "Да, на территории отеля Aura Del Mar есть собственная бесплатная охраняемая парковка с видеонаблюдением 24/7.",
    "faq.q5": "Можно ли с домашними животными?",
    "faq.a5": "Мы любим животных! Размещение с небольшими питомцами возможно по предварительному согласованию при бронировании.",
    "faq.q6": "Какие способы оплаты вы принимаете?",
    "faq.a6": "Оплата возможна банковскими картами (Visa, Mastercard), наличными (GEL, USD, EUR, RUB) при заселении или банковским переводом.",

    // Footer
    "footer.brand_sub": "Boutique Hotel & Restaurant • Batumi",
    "footer.desc": "Камерный бутик-отель на 12 номеров в 250 м от моря на Новом Бульваре Батуми. Ресторан авторской кухни, сад, панорамная терраса и домашнее гостеприимство.",
    "footer.nav_title": "Навигация",
    "footer.contacts_title": "Контакты",
    "footer.hours_title": "Режим работы",
    "footer.hours_desc": "Стойка регистрации: Круглосуточно 24/7<br>Ресторан: 08:30 – 23:00<br>Завтраки: 09:00 – 11:00",
    "footer.rights": "Все права защищены. Официальный сайт отеля Aura Del Mar Batumi.",
    "footer.wa_label": "Чат в WhatsApp"
  },

  "en": {
    // Topbar & Nav
    "topbar.address": "Batumi, 31 Giorgi Antsukhelidze St. (250 m to beach)",
    "topbar.reception": "Front Desk 24/7",
    "topbar.direct_booking": "Direct Booking • Zero Extra Fees",
    "topbar.lang_label": "Language:",
    "topbar.currency_label": "Currency:",
    "topbar.call": "Call Us",
    "nav.rooms": "Rooms & Rates",
    "nav.about": "About",
    "nav.restaurant": "Restaurant",
    "nav.amenities": "Amenities",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.faq": "FAQ",
    "nav.book": "Book Now",
    "nav.choose_lang": "Select Language:",

    // Hero
    "hero.tag": "Boutique Hotel on Black Sea Coast • Batumi",
    "hero.title": "Hotel <em>Aura Del Mar</em><br>in Heart of Batumi",
    "hero.desc": "An intimate boutique hotel with 12 stylish rooms, authentic Georgian hospitality, fine dining restaurant, panoramic terrace, and iconic plane spotting view.",
    "hero.badge_sea": "250 m to Seafront",
    "hero.badge_breakfast": "Delicious Breakfast Included",
    "hero.badge_parking": "Free Private Parking",
    "hero.rating_score": "8.2",
    "hero.rating_max": "/ 10",
    "hero.rating_title": "Excellent",
    "hero.rating_source": "Guest Rating Verified",
    "hero.sea_card_title": "New Boulevard 1st Line",
    "hero.sea_card_desc": "3 minutes walk to the beach",
    "hero.cta_rooms": "Explore Rooms",
    "hero.cta_restaurant": "Our Restaurant",

    // Rooms Section
    "rooms.tag": "Rooms Catalog & Rates",
    "rooms.title": "Aura Del Mar Boutique Rooms",
    "rooms.subtitle": "Just 12 exclusive rooms. Every room features a private balcony, AC, high-speed Wi-Fi, and a complimentary hot breakfast daily.",
    "rooms.filter_all": "All Rooms (12)",
    "rooms.filter_double": "Double Rooms",
    "rooms.filter_family": "Family Suites",
    "rooms.filter_deluxe": "Deluxe & Studios",
    "rooms.per_night": "/ night",
    "rooms.price_label": "Rate per 1 night",
    "rooms.gallery_btn": "Gallery",
    "rooms.book_btn": "Book Now",
    "rooms.breakfast_tag": "☕ Breakfast Included",
    "rooms.ac_tag": "❄ Air Conditioner",
    "rooms.tv_tag": "📺 Smart TV",
    "rooms.wifi_tag": "📶 Wi-Fi 100 Mbps",
    "rooms.shower_tag": "🚿 Private Shower",
    "rooms.balcony_tag": "🌿 Balcony",

    // About Section
    "about.tag": "About Boutique Hotel",
    "about.title": "Comfort, Serenity & Sea Breeze",
    "about.subtitle": "Aura Del Mar was crafted for travelers seeking genuine personal attention and home comfort away from crowded mega-towers.",
    "about.p1": "Situated in the quiet seaside district of Batumi New Boulevard, only 250 meters from the coast and seaside promenade park.",
    "about.p2": "A unique highlight is our proximity to Batumi airport runway. Watch aircraft gracefully descend right over the sea horizon from our upper terrace, while inside our acoustic insulation guarantees peaceful sleep.",
    "about.f1_title": "Intimate Ambiance",
    "about.f1_desc": "Only 12 rooms ensure tranquility, no crowded lobbies, and dedicated care for every guest.",
    "about.f2_title": "3 Min to Beach",
    "about.f2_desc": "Direct scenic stroll to the seaside promenade, sunset spots, and bicycle paths.",
    "about.f3_title": "Private Garden & Terrace",
    "about.f3_desc": "Lush courtyard with wicker furniture, grapevine canopy, and gentle afternoon shade.",
    "about.f4_title": "Plane Spotting",
    "about.f4_desc": "Batumi's legendary photography spot for airplane arrivals framed against sunset skies.",

    // Restaurant Section
    "restaurant.tag": "Culinary Experience",
    "restaurant.title": "Aura Del Mar Restaurant & Lounge",
    "restaurant.subtitle": "Authentic Adjarian & Georgian culinary art from farm-fresh local produce",
    "restaurant.p1": "Every morning begins with our rich breakfast spread: warm oven-baked Georgian breads, Sulguni cheese, farm eggs, khachapuri, fresh fruits, and premium coffee.",
    "restaurant.p2": "Lunch and dinner feature an à la carte menu with tender charcoal skewers (mtsvadi), hand-crafted khinkali, satsivi, and boutique Kakhetian wines aged in clay qvevri.",
    "restaurant.cta_wa": "Reserve a Table via WhatsApp",
    "restaurant.dish1": "Adjarian Khachapuri",
    "restaurant.dish1_desc": "Golden crust boat with molten young cheese and organic butter",
    "restaurant.dish2": "Charcoal Grilled Mtsvadi",
    "restaurant.dish2_desc": "Tender marinated meat grilled over grapevine coals with satsebeli sauce",
    "restaurant.dish3": "Heritage Georgian Wines",
    "restaurant.dish3_desc": "Estate Saperavi, Rkatsiteli & Kindzmarauli aged in qvevri",

    // Amenities Section
    "amenities.tag": "Guest Comforts",
    "amenities.title": "Premium Hotel Amenities for Your Stay",
    "amenities.subtitle": "Everything you need for extended leisure, remote work, and memorable seaside holidays in Batumi.",

    // Reviews Section
    "reviews.tag": "Guest Impressions",
    "reviews.title": "Verified Guest Testimonials",
    "reviews.subtitle": "Proudly rated with top scores on international booking portals",

    // Location Section
    "location.tag": "Location & Access",
    "location.title": "How to Reach the Hotel",
    "location.subtitle": "Batumi, New Boulevard, 31 Giorgi Antsukhelidze St.",
    "location.dist_title": "Key Distances:",
    "location.yandex_btn": "Open in Yandex Maps",
    "location.google_btn": "Open in Google Maps",

    // FAQ Section
    "faq.tag": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What are check-in and check-out times?",
    "faq.a1": "Standard check-in is from 14:00, and check-out is until 12:00. Early check-in or late check-out is offered free of charge subject to room availability.",
    "faq.q2": "Is breakfast included in the room rate?",
    "faq.a2": "Yes! A rich, freshly prepared continental and hot Georgian breakfast is included for all staying guests.",
    "faq.q3": "Do you provide airport transfer?",
    "faq.a3": "Yes, our hotel is located just 600 meters from Batumi International Airport. We can arrange a comfortable air-conditioned private pick-up.",
    "faq.q4": "Is private parking free?",
    "faq.a4": "Yes, Aura Del Mar provides complimentary private on-site parking secured with 24/7 CCTV surveillance.",
    "faq.q5": "Are pets allowed?",
    "faq.a5": "We are pet-friendly! Small pets are welcome upon prior confirmation when booking.",
    "faq.q6": "What payment methods are accepted?",
    "faq.a6": "We accept major credit cards (Visa, Mastercard), cash (GEL, USD, EUR, RUB) upon arrival, or direct bank transfer.",

    // Footer
    "footer.brand_sub": "Boutique Hotel & Restaurant • Batumi",
    "footer.desc": "Boutique hotel with 12 rooms 250m from the Black Sea coast on Batumi New Boulevard. Fine restaurant, private garden, panoramic terrace, and warm hospitality.",
    "footer.nav_title": "Navigation",
    "footer.contacts_title": "Contacts",
    "footer.hours_title": "Operating Hours",
    "footer.hours_desc": "Reception: 24/7 Open<br>Restaurant: 08:30 – 23:00<br>Breakfast: 09:00 – 11:00",
    "footer.rights": "All rights reserved. Official website of Aura Del Mar Batumi.",
    "footer.wa_label": "WhatsApp Chat"
  },

  "ka": {
    // Topbar & Nav
    "topbar.address": "ბათუმი, ანწუხელიძის ქ. 31 (250 მ ზღვამდე)",
    "topbar.reception": "მიღება 24/7",
    "topbar.direct_booking": "პირდაპირი ჯავშანი საკომისიოს გარეშე",
    "topbar.lang_label": "ენა:",
    "topbar.currency_label": "ვალუტა:",
    "topbar.call": "დარეკვა",
    "nav.rooms": "ნომრები",
    "nav.about": "სასტუმრო",
    "nav.restaurant": "რესტორანი",
    "nav.amenities": "კომფორტი",
    "nav.reviews": "შეფასებები",
    "nav.location": "ლოკაცია",
    "nav.faq": "კითხვები",
    "nav.book": "დაჯავშნა",
    "nav.choose_lang": "აირჩიეთ ენა:",

    // Hero
    "hero.tag": "ბუტიკ-სასტუმრო შავი ზღვის სანაპიროზე • ბათუმი",
    "hero.title": "სასტუმრო <em>Aura Del Mar</em><br>ბათუმის გულში",
    "hero.desc": "მყუდრო ბუტიკ-სასტუმრო 12 ნომრით, ქართული სტუმართმოყვარეობით, ავთენტური რესტორნით, პანორამული ტერასითა და ულამაზესი ხედებით.",
    "hero.badge_sea": "250 მ ზღვამდე",
    "hero.badge_breakfast": "საუზმე შედის ფასში",
    "hero.badge_parking": "უფასო პარკინგი",
    "hero.rating_score": "8.2",
    "hero.rating_max": "/ 10",
    "hero.rating_title": "შესანიშნავი",
    "hero.rating_source": "სტუმრების შეფასება",
    "hero.sea_card_title": "ახალი ბულვარის 1-ლი ზოლი",
    "hero.sea_card_desc": "3 წუთის სავალი სანაპირომდე",
    "hero.cta_rooms": "ნომრის არჩევა",
    "hero.cta_restaurant": "რესტორანი",

    // Rooms Section
    "rooms.tag": "ნომრების კატალოგი და ფასები",
    "rooms.title": "Aura Del Mar-ის ნომრები",
    "rooms.subtitle": "სულ 12 მყუდრო ნომერი. თითოეულ ნომერშია აივანი, კონდიციონერი, მაღალსიჩქარიანი Wi-Fi და უფასო საუზმე ყოველ დილით.",
    "rooms.filter_all": "ყველა ნომერი (12)",
    "rooms.filter_double": "ორადგილიანი",
    "rooms.filter_family": "საოჯახო",
    "rooms.filter_deluxe": "დელუქსი & სტუდია",
    "rooms.per_night": "/ ღამე",
    "rooms.price_label": "ფასი 1 ღამით",
    "rooms.gallery_btn": "გალერეა",
    "rooms.book_btn": "დაჯავშნა",
    "rooms.breakfast_tag": "☕ საუზმე შედის",
    "rooms.ac_tag": "❄ კონდიციონერი",
    "rooms.tv_tag": "📺 Smart TV",
    "rooms.wifi_tag": "📶 Wi-Fi 100 მბ/წმ",
    "rooms.shower_tag": "🚿 საკუთარი შხაპი",
    "rooms.balcony_tag": "🌿 აივანი",

    // About Section
    "about.tag": "სასტუმროს შესახებ",
    "about.title": "სიმყუდროვე, სიმშვიდე და ზღვის ხედი",
    "about.subtitle": "სასტუმრო «Aura Del Mar» შექმნილია მათთვის, ვინც აფასებს პირად ყურადღებას, სისუფთავესა და ოჯახურ კომფორტს ხმაურიანი ცათამბჯენებისგან მოშორებით.",
    "about.p1": "სასტუმრო მდებარეობს ბათუმის ახალი ბულვარის მწვანე ზოლში, სანაპიროდან და ზღვისპირა პარკიდან სულ რაღაც 250 მეტრში.",
    "about.p2": "სასტუმროს უნიკალური თავისებურებაა თვითმფრინავების სანახაობრივი დაშვება. ტერასიდან იშლება ულამაზესი ხედი ზღვასა და მზის ჩასვლაზე, ხოლო ნომრებში სრული ხმის იზოლაციაა.",
    "about.f1_title": "მყუდრო გარემო",
    "about.f1_desc": "მხოლოდ 12 ნომერი უზრუნველყოფს სიმშვიდეს, რიგების არარსებობასა და პირად ზრუნვას.",
    "about.f2_title": "3 წუთი ზღვამდე",
    "about.f2_desc": "პირდაპირი მოკლე გზა სანაპირომდე და ახალი ბულვარის სასეირნო ბილიკებამდე.",
    "about.f3_title": "საკუთარი ბაღი და ტერასა",
    "about.f3_desc": "მწვანე ეზო როტანგის ავეჯით, ყურძნის ხეივნითა და გრილი ჩრდილით ცხელ შუადღეს.",
    "about.f4_title": "თვითმფრინავების ხედი",
    "about.f4_desc": "ბათუმის ცნობილი ლოკაცია ულამაზესი ფოტოებისა და მზის ჩასვლისთვის.",

    // Restaurant Section
    "restaurant.tag": "გასტრონომია",
    "restaurant.title": "რესტორანი და ტერასა «Aura Del Mar»",
    "restaurant.subtitle": "ნამდვილი აჭარული და ქართული სამზარეულო ნატურალური ფერმერული პროდუქტებით",
    "restaurant.p1": "ყოველ დილით სტუმრებს ვუმასპინძლდებით უგემრიელესი საუზმით: ცხელი თონის პური, სულგუნი, ფერმერული კვერცხი, ხაჭაპური, ხილი და ყავა.",
    "restaurant.p2": "შუადღესა და საღამოს რესტორანი მუშაობს à la carte მენიუთი: წვნიანი მწვადი, ხინკალი, საცივი და კახური ქვევრის რჩეული ღვინოები.",
    "restaurant.cta_wa": "მაგიდის დაჯავშნა WhatsApp-ში",
    "restaurant.dish1": "აჭარული ხაჭაპური",
    "restaurant.dish1_desc": "ხრაშუნა ცომი, ნაზი ყველი და ფერმერული კვერცხის გული",
    "restaurant.dish2": "მწვადი მაყალზე",
    "restaurant.dish2_desc": "ვაზის ნასხლავზე შემწვარი წვნიანი ხორცი საწებლით",
    "restaurant.dish3": "ქართული ღვინოები",
    "restaurant.dish3_desc": "საფერავი, რქაწითელი და ქინძმარაული ქვევრიდან",

    // Amenities Section
    "amenities.tag": "სტუმრების კომფორტი",
    "amenities.title": "ყველა პირობა იდეალური დასვენებისთვის",
    "amenities.subtitle": "Aura Del Mar-ში ყველაფერია როგორც ხანგრძლივი დასვენებისთვის, ისე დისტანციური მუშაობისთვის.",

    // Reviews Section
    "reviews.tag": "სტუმრების შთაბეჭდილებები",
    "reviews.title": "სტუმრების შეფასებები",
    "reviews.subtitle": "ვამაყობთ საერთაშორისო პორტალებზე მიღებული უმაღლესი ქულებით",

    // Location Section
    "location.tag": "მდებარეობა",
    "location.title": "როგორ მოხვიდეთ სასტუმრომდე",
    "location.subtitle": "ბათუმი, ახალი ბულვარი, გიორგი ანწუხელიძის ქ. 31",
    "location.dist_title": "მანძილი ობიექტებამდე:",
    "location.yandex_btn": "Yandex რუკაზე ნახვა",
    "location.google_btn": "Google Maps-ზე ნახვა",

    // FAQ Section
    "faq.tag": "ხშირი კითხვები",
    "faq.title": "პასუხები პოპულარულ შეკითხვებზე",
    "faq.q1": "როდისაა შესვლა და გასვლა?",
    "faq.a1": "სტანდარტული შესვლა — 14:00-დან, გასვლა — 12:00-მდე. თავისუფალი ნომრების არსებობისას ადრეული შესვლა ან გვიანი გასვლა უფასოა.",
    "faq.q2": "საუზმე შედის ფასში?",
    "faq.a2": "დიახ! უგემრიელესი და ნოყიერი საუზმე შედის ყველა სტუმრის განთავსების ღირებულებაში.",
    "faq.q3": "გაქვთ ტრანსფერი აეროპორტიდან?",
    "faq.a3": "დიახ, სასტუმრო ბათუმის აეროპორტიდან სულ რაღაც 600 მეტრშია. შეგვიძლია დაგხვდეთ კომფორტული მანქანით.",
    "faq.q4": "პარკინგი უფასოა?",
    "faq.a4": "დიახ, სასტუმროს ტერიტორიაზე მოქმედებს საკუთარი უფასო დაცული პარკინგი ვიდეოკონტროლით 24/7.",
    "faq.q5": "შინაური ცხოველები ნებადართულია?",
    "faq.a5": "ჩვენ გვიყვარს ცხოველები! პატარა შინაური ცხოველების განთავსება შესაძლებელია წინასწარი შეთანხმებით.",
    "faq.q6": "გადახდის რა მეთოდები მოქმედებს?",
    "faq.a6": "გადახდა შესაძლებელია საბანკო ბარათებით (Visa, Mastercard), ნაღდი ფულით (GEL, USD, EUR, RUB) ან საბანკო გადარიცხვით.",

    // Footer
    "footer.brand_sub": "Boutique Hotel & Restaurant • Batumi",
    "footer.desc": "მყუდრო ბუტიკ-სასტუმრო 12 ნომრით ზღვიდან 250 მეტრში ბათუმის ახალ ბულვარზე. ავთენტური რესტორანი, ბაღი, პანორამული ტერასა და გულთბილი მასპინძლობა.",
    "footer.nav_title": "ნავიგაცია",
    "footer.contacts_title": "კონტაქტი",
    "footer.hours_title": "სამუშაო საათები",
    "footer.hours_desc": "მიღება: 24/7 უწყვეტად<br>რესტორანი: 08:30 – 23:00<br>საუზმე: 09:00 – 11:00",
    "footer.rights": "ყველა უფლება დაცულია. სასტუმრო Aura Del Mar Batumi-ს ოფიციალური საიტი.",
    "footer.wa_label": "WhatsApp ჩატი"
  },

  "tr": {
    // Topbar & Nav
    "topbar.address": "Batum, Giorgi Antsukhelidze Cad. 31 (Denize 250 m)",
    "topbar.reception": "Resepsiyon 24/7",
    "topbar.direct_booking": "Doğrudan Rezervasyon • Komisyonsuz",
    "topbar.lang_label": "Dil:",
    "topbar.currency_label": "Para Birimi:",
    "topbar.call": "Bizi Arayın",
    "nav.rooms": "Odalar & Fiyatlar",
    "nav.about": "Otelimiz",
    "nav.restaurant": "Restoran",
    "nav.amenities": "Olanaklar",
    "nav.reviews": "Yorumlar",
    "nav.location": "Konum",
    "nav.faq": "SSS",
    "nav.book": "Rezervasyon Yap",
    "nav.choose_lang": "Dil Seçiniz:",

    // Hero
    "hero.tag": "Karadeniz Sahilinde Butik Otel • Batum",
    "hero.title": "Otel <em>Aura Del Mar</em><br>Batum'un Kalbinde",
    "hero.desc": "12 odalı butik otelimizde Gürcü misafirperverliği, gurme restoran, panoramik teras ve büyüleyici uçak iniş manzarası sizi bekliyor.",
    "hero.badge_sea": "Denize 250 m",
    "hero.badge_breakfast": "Leziz Kahvaltı Dahil",
    "hero.badge_parking": "Ücretsiz Özel Otopark",
    "hero.rating_score": "8.2",
    "hero.rating_max": "/ 10",
    "hero.rating_title": "Mükemmel",
    "hero.rating_source": "Doğrulanmış Misafir Puanı",
    "hero.sea_card_title": "Yeni Bulvar 1. Hat",
    "hero.sea_card_desc": "Plaja sadece 3 dakika yürüyüş",
    "hero.cta_rooms": "Odaları İncele",
    "hero.cta_restaurant": "Restoranımız",

    // Rooms Section
    "rooms.tag": "Oda Kataloğu ve Fiyatlar",
    "rooms.title": "Aura Del Mar Butik Odaları",
    "rooms.subtitle": "Sadece 12 seçkin oda. Her odada balkon, klima, hızlı Wi-Fi ve her sabah ücretsiz zengin kahvaltı mevcuttur.",
    "rooms.filter_all": "Tüm Odalar (12)",
    "rooms.filter_double": "Çift Kişilik",
    "rooms.filter_family": "Aile Odaları",
    "rooms.filter_deluxe": "Deluxe & Stüdyo",
    "rooms.per_night": "/ gece",
    "rooms.price_label": "1 Gece Fiyatı",
    "rooms.gallery_btn": "Galeri",
    "rooms.book_btn": "Rezervasyon Yap",
    "rooms.breakfast_tag": "☕ Kahvaltı Dahil",
    "rooms.ac_tag": "❄ Klima",
    "rooms.tv_tag": "📺 Smart TV",
    "rooms.wifi_tag": "📶 Wi-Fi 100 Mbps",
    "rooms.shower_tag": "🚿 Özel Duş",
    "rooms.balcony_tag": "🌿 Balkon",

    // About Section
    "about.tag": "Butik Otel Hakkında",
    "about.title": "Konfor, Huzur ve Deniz Esintisi",
    "about.subtitle": "Aura Del Mar Oteli, kalabalık gökdelenlerden uzakta kişisel ilgi, hijyen ve ev konforu arayan misafirler için tasarlandı.",
    "about.p1": "Otelimiz Batum Yeni Bulvar'ın yeşil sahil bölgesinde, plaja ve sahil parkına sadece 250 metre mesafede yer almaktadır.",
    "about.p2": "Otelimizin benzersiz özelliği havalimanı iniş hattına yakınlığıdır. Terasımızdan deniz üzerinde alçalan uçakların büyüleyici manzarasını izleyebilir, odanızda ise ses yalıtımı ile huzurla uyuyabilirsiniz.",
    "about.f1_title": "Butik Atmosfer",
    "about.f1_desc": "Sadece 12 oda sessizlik, kuyruksuz sakin bir ortam ve her konuğa özel ilgi sağlar.",
    "about.f2_title": "Plaja 3 Dakika",
    "about.f2_desc": "Sahile, gün batımı seyir teraslarına ve bisiklet yollarına doğrudan kısa yürüyüş yolu.",
    "about.f3_title": "Özel Bahçe & Teras",
    "about.f3_desc": "Rattan mobilyalar, üzüm asmaları ve serin gölgeli huzurlu avlu.",
    "about.f4_title": "Uçak Manzarası",
    "about.f4_desc": "Gün batımında iniş yapan uçakları fotoğraflamak için Batum'un en ünlü noktası.",

    // Restaurant Section
    "restaurant.tag": "Gastronomi",
    "restaurant.title": "Aura Del Mar Restoran & Teras",
    "restaurant.subtitle": "Taze çiftlik ürünleriyle hazırlanan geleneksel Acaristan ve Gürcü mutfağı",
    "restaurant.p1": "Her sabah misafirlerimize taze pişmiş Gürcü ekmeği, sulguni peyniri, köy yumurtası, sıcak haçapuri, taze meyveler ve kahve ile leziz bir kahvaltı sunuyoruz.",
    "restaurant.p2": "Öğle ve akşam yemeklerinde à la carte menümüzle kömürde ızgara mtsvadi, el yapımı hınkal, satsivi ve seçkin kvevri şarapları servis ediyoruz.",
    "restaurant.cta_wa": "WhatsApp'tan Masa Ayırın",
    "restaurant.dish1": "Acaristan Haçapurisi",
    "restaurant.dish1_desc": "Çıtır hamur, genç peynir ve taze çiftlik yumurtası",
    "restaurant.dish2": "Kömürde Şaşlık",
    "restaurant.dish2_desc": "Bağ çubukları üzerinde pişmiş marine edilmiş leziz et ve sacebeli sosu",
    "restaurant.dish3": "Gürcü Şarapları",
    "restaurant.dish3_desc": "Kvevride yıllandırılmış Saperavi, Rkatsiteli ve Kindzmarauli",

    // Amenities Section
    "amenities.tag": "Misafir Konforu",
    "amenities.title": "Tatiliniz İçin Eksiksiz Otel Olanakları",
    "amenities.subtitle": "Aura Del Mar'da uzun süreli konaklama, uzaktan çalışma ve keyifli bir Batum tatili için gereken her şey mevcuttur.",

    // Reviews Section
    "reviews.tag": "Misafir Deneyimleri",
    "reviews.title": "Doğrulanmış Misafir Yorumları",
    "reviews.subtitle": "Uluslararası rezervasyon portallarındaki yüksek puanlarımızla gurur duyuyoruz",

    // Location Section
    "location.tag": "Konum ve Ulaşım",
    "location.title": "Otele Nasıl Ulaşılır?",
    "location.subtitle": "Batum, Yeni Bulvar, Giorgi Antsukhelidze Cad. 31",
    "location.dist_title": "Önemli Noktalara Mesafe:",
    "location.yandex_btn": "Yandex Haritalarda Aç",
    "location.google_btn": "Google Haritalarda Aç",

    // FAQ Section
    "faq.tag": "Sıkça Sorulan Sorular",
    "faq.title": "Misafirlerimizin En Çok Merak Ettikleri",
    "faq.q1": "Giriş ve çıkış saatleri nedir?",
    "faq.a1": "Standart giriş 14:00'ten itibaren, çıkış 12:00'ye kadardır. Müsaitlik durumunda erken giriş veya geç çıkış ücretsiz olarak sağlanır.",
    "faq.q2": "Kahvaltı fiyata dahil mi?",
    "faq.a2": "Evet! Taze hazırlanan sıcak ve lezzetli kahvaltı tüm konuklarımız için fiyata dahildir.",
    "faq.q3": "Havalimanı transferi sağlıyor musunuz?",
    "faq.a3": "Evet, otelimiz Batum Uluslararası Havalimanı'na sadece 600 metre mesafededir. Klimalı araçla konforlu transfer sağlayabiliriz.",
    "faq.q4": "Otopark ücretsiz mi?",
    "faq.a4": "Evet, Aura Del Mar bünyesinde 24 saat güvenlik kameralı ücretsiz özel otopark mevcuttur.",
    "faq.q5": "Evcil hayvan kabul ediliyor mu?",
    "faq.a5": "Evcil hayvan dostuyuz! Küçük dostlarımız rezervasyon sırasında önceden bildirilmek kaydıyla kabul edilmektedir.",
    "faq.q6": "Hangi ödeme yöntemleri geçerlidir?",
    "faq.a6": "Kredi kartları (Visa, Mastercard), girişte nakit (GEL, USD, EUR, RUB) veya banka havalesi ile ödeme kabul edilmektedir.",

    // Footer
    "footer.brand_sub": "Boutique Hotel & Restaurant • Batumi",
    "footer.desc": "Batum Yeni Bulvar'da denize 250 m mesafede 12 odalı butik otel. Gurme restoran, özel bahçe, panoramik teras ve samimi Gürcü misafirperverliği.",
    "footer.nav_title": "Menü",
    "footer.contacts_title": "İletişim",
    "footer.hours_title": "Çalışma Saatleri",
    "footer.hours_desc": "Resepsiyon: 24/7 Kesintisiz<br>Restoran: 08:30 – 23:00<br>Kahvaltı: 09:00 – 11:00",
    "footer.rights": "Tüm hakları saklıdır. Aura Del Mar Batumi Oteli resmi web sitesi.",
    "footer.wa_label": "WhatsApp Sohbeti"
  }
};

let currentLanguage = localStorage.getItem('auradelmar_lang') || 'ru';

function t(key, lang = currentLanguage) {
  if (I18N[lang] && I18N[lang][key] !== undefined) {
    return I18N[lang][key];
  }
  if (I18N['ru'] && I18N['ru'][key] !== undefined) {
    return I18N['ru'][key];
  }
  return key;
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'ru';
  currentLanguage = lang;
  localStorage.setItem('auradelmar_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'ka') {
    document.body.classList.add('lang-ka');
  } else {
    document.body.classList.remove('lang-ka');
  }

  // Update text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key, lang);
    if (translation !== key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key, lang);
    if (translation !== key) {
      el.placeholder = translation;
    }
  });

  // Update titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translation = t(key, lang);
    if (translation !== key) {
      el.title = translation;
    }
  });

  // Update desktop language buttons active state
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile language buttons active state
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch custom event for app.js and booking.js
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initI18n() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  setLanguage(currentLanguage);
}

// Global exposure
window.I18N = I18N;
window.t = t;
window.setLanguage = setLanguage;
window.getCurrentLanguage = () => currentLanguage;

document.addEventListener('DOMContentLoaded', initI18n);

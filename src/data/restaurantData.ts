import { MenuItem, VipCabin } from '../types';

export const RESTAURANT_INFO = {
  name: 'DIDOR Restaurant',
  sloganTg: 'Таъме, ки мехоҳед дубора таҷриба кунед',
  sloganRu: 'Вкус, к которому хочется возвращаться снова',
  sloganEn: 'Experience taste and celebration at DIDOR',
  address: '26 Rahmon Nabiyev Street, Dushanbe, Tajikistan',
  addressTg: 'кӯчаи Раҳмон Набиев 26, ш. Душанбе, Тоҷикистон',
  addressRu: 'ул. Рахмона Набиева 26, г. Душанбе, Таджикистан',
  phoneDelivery: '+992 981 840 404',
  phoneDeliveryRaw: '+992981840404',
  phoneBooking: '+992 000 700 088',
  phoneBookingRaw: '+992000700088',
  hours: '10:00 – 23:00 (Ҳар рӯз / Ежедневно / Daily)',
  mapCoordinates: {
    lat: 38.5540,
    lng: 68.7695,
  },
  googleMapsUrl: 'https://maps.google.com/?q=Rahmon+Nabiyev+Street+26+Dushanbe',
  instagram: 'https://instagram.com/didor_restaurant',
  whatsappDelivery: 'https://wa.me/992981840404?text=Салом!%20Мехоҳам%20аз%20ресторани%20DIDOR%20таом%20фармоиш%20диҳам.',
  whatsappBooking: 'https://wa.me/992000700088?text=Салом!%20Мехоҳам%20дар%20DIDOR%20миз%20ё%20зали%20тӯёнаро%20брон%20кунам.'
};

export const MENU_ITEMS: MenuItem[] = [
  // Grilled Meats / Кабобҳо
  {
    id: 'm1',
    name: 'Кабоби Шоҳонаи DIDOR',
    nameRu: 'Шашлык по-царски DIDOR',
    nameEn: 'DIDOR Royal Mixed Kebab Platter',
    description: 'Маҷмӯи беҳтарин гӯштҳои барра, лула-кабоб, мурғ ва ҷазза бо пиёзи кабуд, помидори сихӣ ва соуси махсуси шэф.',
    descriptionRu: 'Ассорти из сочной баранины, люля-кебаба, цыпленка и джазза на мангале с запеченными томатами и фирменным соусом.',
    descriptionEn: 'Grand platter of tender charcoal lamb, lula kebab, chicken skewers, and crispy fat with grilled vegetables.',
    price: 185,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    weight: '850 гр',
    badge: 'Махсуси Шэф',
    badgeRu: 'Шеф-выбор',
    badgeEn: "Chef's Pick",
    isChefSpecial: true,
  },
  {
    id: 'm2',
    name: 'Қабурғаи Барра дар Оташ (Корейка)',
    nameRu: 'Каре ягненка на углях',
    nameEn: 'Charcoal-Grilled Lamb Chops',
    description: 'Қабурғаи мулоими барраи ҳисорӣ бо набототи кӯҳӣ ва сирпиёз дар оташи зинда пухташуда.',
    descriptionRu: 'Нежнейшие ребрышки гиссарского ягненка, маринованные в горных травах и обжаренные на углях.',
    descriptionEn: 'Succulent mountain lamb chops marinated in wild thyme and garlic, seared over natural charcoal.',
    price: 95,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    weight: '350 гр',
    badge: 'Бестселлер',
    badgeRu: 'Хит продаж',
    badgeEn: 'Best Seller',
  },
  {
    id: 'm3',
    name: 'Лула-Кабоби Асил бо Панир',
    nameRu: 'Люля-кебаб с сулугуни',
    nameEn: 'Lula Kebab with Melted Cheese',
    description: 'Гӯшти кӯфтаи мулоим бо мағзи панири гудохташуда ва гиёҳҳои хушбӯй дар бари лаваш.',
    descriptionRu: 'Сочный люля-кебаб из отборного мяса с тягучим сыром и зеленью, подается в тонком лаваше.',
    descriptionEn: 'Minced spiced meat skewer stuffed with molten cheese and fresh coriander, served on warm flatbread.',
    price: 52,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
    weight: '250 гр',
  },
  {
    id: 'm4',
    name: 'Шашлики Мурғи Маринадшуда',
    nameRu: 'Шашлык из куриного филе',
    nameEn: 'Tender Marinated Chicken Shashlik',
    description: 'Гӯшти мулоими мурғ дар маринади заъфаронӣ ва қаймоқ бо ќаламфури булғорӣ.',
    descriptionRu: 'Куриное филе в сливочно-шафрановом маринаде с болгарским перцем.',
    descriptionEn: 'Free-range chicken breast cubes infused with saffron, cream, and sweet bell peppers.',
    price: 45,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    weight: '280 гр',
  },

  // National Cuisine / Таомҳои Миллӣ
  {
    id: 'm5',
    name: 'Оши Палави Шоҳонаи Тӯёна',
    nameRu: 'Праздничный свадебный плов',
    nameEn: 'Royal Wedding Plov (Oshi Palav)',
    description: 'Оши суннатии дегӣ бо биринҷи лазерӣ, гӯшти мулоими барра, нахӯд, мавизи сиёҳ, тухми бедона ва қазӣ.',
    descriptionRu: 'Традиционный плов из отборного риса «Лазер», сочной баранины, нута, изюма, перепелиных яиц и деликатесного казы.',
    descriptionEn: 'Tajik signature festive plov cooked with laser rice, slow-braised lamb, yellow carrots, kazy horsemeat sausage and quail eggs.',
    price: 68,
    category: 'national',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    weight: '450 гр',
    badge: 'Суннати DIDOR',
    badgeRu: 'Гордость DIDOR',
    badgeEn: 'DIDOR Heritage',
    isChefSpecial: true,
  },
  {
    id: 'm6',
    name: 'Шӯрбои Кӯҳии Хонагӣ',
    nameRu: 'Наваристая горная шурпа',
    nameEn: 'Rich Mountain Lamb Shurbo',
    description: 'Шӯрбои шаффофи сергӯшт бо устухони барра, нахӯд, сабзии ширин ва набототи Помир.',
    descriptionRu: 'Прозрачный наваристый бульон с крупным куском ягнятины, нутом и сладкими овощами.',
    descriptionEn: 'Aromatic rich broth simmered for hours with bone-in lamb, chickpeas, sweet carrots and herbs.',
    price: 48,
    category: 'national',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    weight: '400 мл',
  },
  {
    id: 'm7',
    name: 'Манту бо Гӯшти Буридашуда (5 дона)',
    nameRu: 'Манты с рубленым мясом (5 шт)',
    nameEn: 'Handmade Steamed Mantu (5 pcs)',
    description: 'Хамири тунуки дастӣ бо гӯшти буридашудаи барра, пиёз ва равғани думба, бо сметанаи хонагӣ.',
    descriptionRu: 'Тончайшее тесто с рубленым мясом баранины и специями, подаются со сметаной и зеленью.',
    descriptionEn: 'Delicate steamed dumplings stuffed with hand-minced lamb and cumin, served with sour cream.',
    price: 46,
    category: 'national',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    weight: '380 гр',
  },
  {
    id: 'm8',
    name: 'Қурутоби Хонагӣ бо Фатири Варақин',
    nameRu: 'Курутоб праздничный с фатиром',
    nameEn: 'Traditional Royal Qurutob',
    description: 'Фатири гарми варақин, қурути сафеди табиӣ, равғани зард (зағир), пиёз ва кабудии тоза.',
    descriptionRu: 'Слоеный фатир в кремовом соусе из чаки, политый топленым льняным маслом с жареным луком.',
    descriptionEn: 'Authentic layered pastry drenched in mountain yoghurt cream sauce, topped with hot clarified flaxseed oil and herbs.',
    price: 42,
    category: 'national',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    weight: '500 гр',
  },

  // Salads & Starters / Салатҳо
  {
    id: 'm9',
    name: 'Салати Фирмавии DIDOR',
    nameRu: 'Фирменный салат DIDOR',
    nameEn: 'Signature DIDOR Warm Salad',
    description: 'Гӯшти нарми гӯсолаи дар оташ бирён, баргҳои руколо, помидори черри, чормағзи карамелӣ ва соуси анории Наршароб.',
    descriptionRu: 'Теплая телятина гриль, свежая руккола, вяленые томаты черри, кедровые орехи и бальзамический наршараб.',
    descriptionEn: 'Warm seared beef tenderloin, fresh arugula, sweet cherry tomatoes, glazed walnuts and pomegranate reduction.',
    price: 58,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    weight: '300 гр',
    badge: 'Тавсияи Хона',
    badgeRu: 'Выбор гостей',
    badgeEn: 'Guest Choice',
  },
  {
    id: 'm10',
    name: 'Аччиқ-Чучук бо Помидори Ширин',
    nameRu: 'Ачик-чучук с южными томатами',
    nameEn: 'Crisp Achichuk Tomato & Onion Salad',
    description: 'Помидорҳои ширини маҳаллӣ бо пиёзи сафеди тунук бурида ва райҳони тоза — ҳамроҳи беҳтарин барои палав ва кабоб.',
    descriptionRu: 'Тончайшие ломтики сладких томатов, белый лук и свежий базилик — классика к плову.',
    descriptionEn: 'Thinly sliced sun-ripened local tomatoes with sweet white onions and fresh purple basil.',
    price: 25,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    weight: '220 гр',
  },

  // Banquet & Festive / Тӯёна ва Зали 2
  {
    id: 'm11',
    name: 'Дастархони Тӯёнаи Шоҳона (барои 10 нафар)',
    nameRu: 'Свадебный праздничный сет (на 10 персон)',
    nameEn: 'Grand Banquet Table Feast (for 10 guests)',
    description: 'Маҷмӯи пурраи тӯёна: палави дегӣ, 10 намуд кабоб, 4 намуд салат, нонҳои гулдор, нӯшокиҳо ва меваҷот.',
    descriptionRu: 'Полный праздничный стол: плов, гриль-ассорти, салаты, горячие закуски, свежие фрукты и выпечка.',
    descriptionEn: 'Full celebratory spread featuring centerpiece plov, mixed grill towers, curated salads, traditional breads and fresh seasonal fruits.',
    price: 1350,
    category: 'banquet',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    weight: 'Барои 10 нафар',
    badge: 'Барои Зали Тӯёна',
    badgeRu: 'Для Банкетного Зала',
    badgeEn: 'Banquet Hall Feature',
    isChefSpecial: true,
  },
  {
    id: 'm12',
    name: 'Салмон дар Тафдон бо Сабзавот',
    nameRu: 'Лосось запеченный с овощами',
    nameEn: 'Baked Royal Salmon with Asparagus',
    description: 'Стейки моҳии сурх бо соуси лиму ва равғани зайтун, сабзавоти грилшуда.',
    descriptionRu: 'Стейк лосося на пару с белым соусом, спаржей и запеченным картофелем.',
    descriptionEn: 'Prime Norwegian salmon fillet with citrus butter glaze, asparagus and baby potatoes.',
    price: 110,
    category: 'banquet',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    weight: '320 гр',
  },

  // Drinks & Tea / Нӯшокиҳо
  {
    id: 'm13',
    name: 'Чойи Шоҳона бо Ҳил ва Заъфарон',
    nameRu: 'Шафранно-кардамоновый чайный набор',
    nameEn: 'Royal Saffron & Cardamom Tea Set',
    description: 'Чойи сабз ё сиёҳи эронӣ бо заъфарон, набот, лиму, бодом ва шириниҳои шарқӣ.',
    descriptionRu: 'Ароматный чай со специями, шафраном, наватом и восточными сладостями.',
    descriptionEn: 'Fragrant green or black tea infused with real saffron threads, cardamom pods, rock candy and dry sweets.',
    price: 32,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    weight: 'Чойники 1 литр',
  },
  {
    id: 'm14',
    name: 'Шарбати Табиии Анор ва Тарбуз',
    nameRu: 'Свежевыжатый гранатовый сок',
    nameEn: 'Fresh Pressed Mountain Pomegranate',
    description: 'Шарбати 100% тоза ва фишурдашуда аз анорҳои ширин-турши маҳаллӣ.',
    descriptionRu: '100% натуральный свежевыжатый сок из отборных сочных гранатов.',
    descriptionEn: 'Pure freshly squeezed cold-pressed pomegranate juice without added sugar.',
    price: 35,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    weight: '300 мл',
  }
];

export const VIP_CABINS: VipCabin[] = [
  {
    id: 'vip-1',
    name: 'VIP Кабинка «Тоҷ» (Royal Crown)',
    nameRu: 'VIP Кабинет «Тоҷ» (Royal Crown)',
    nameEn: 'VIP Suite "Taj" (Royal Crown)',
    capacity: '12 – 18 нафар',
    features: [
      'Овози баландсифат ва Smart TV',
      'Пешхидмати инфиродӣ (Personal Butler)',
      'Иқлими ҷудогона (HVAC Climate Control)',
      'Муҳити пурра ором ва махфӣ'
    ],
    featuresRu: [
      'Караоке премиум и Smart TV 75"',
      'Персональный официант',
      'Индивидуальный климат-контроль',
      'Полная звукоизоляция'
    ],
    featuresEn: [
      'Premium Sound & 75" Smart TV',
      'Dedicated personal server',
      'Independent climate control',
      'Acoustic isolation for privacy'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Кабинкаи боҳашамат бо мизи дарози чӯбини заранг ва диванҳои пӯстии бароҳат барои ҷашнҳои оилавӣ ва музокироти расмӣ.',
    descriptionRu: 'Премиальный кабинет с массивным деревянным столом и мягкими кожаными креслами для важных встреч и семейных дат.',
    descriptionEn: 'Luxury suite featuring solid oak dining table and plush leather banquettes for high-profile business dinners and intimate gatherings.'
  },
  {
    id: 'vip-2',
    name: 'VIP Кабинка «Зарафшон» (Golden Suite)',
    nameRu: 'VIP Кабинет «Зарафшан» (Golden Suite)',
    nameEn: 'VIP Suite "Zarafshon" (Golden Suite)',
    capacity: '8 – 12 нафар',
    features: [
      'Ороишоти тиллоӣ ва чароғҳои биллурӣ',
      'Системаи аудиоии Bluetooth',
      'Хизматрасонии VIP бе навбат',
      'Мизи мудаввари сӯҳбаторо'
    ],
    featuresRu: [
      'Золотой интерьер и хрустальные люстры',
      'Аудиосистема Bluetooth',
      'VIP обслуживание вне очереди',
      'Уютный круглый стол'
    ],
    featuresEn: [
      'Golden accents & crystal chandeliers',
      'Bluetooth premium sound',
      'Priority VIP service',
      'Round discussion dining table'
    ],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
    description: 'Интерьери гарму маҳрамона бо нақшу нигори классикӣ ва оинаҳои калон, беҳтарин барои зодрӯз ва маҳфилҳои дӯстона.',
    descriptionRu: 'Изысканная обстановка в золотых тонах с круглым столом для непринужденного и комфортного отдыха.',
    descriptionEn: 'Cozy golden ambiance tailored for birthday celebrations and close family anniversaries.'
  },
  {
    id: 'vip-3',
    name: 'VIP Кабинка «Помир» (Summit Chamber)',
    nameRu: 'VIP Кабинет «Памир» (Summit Chamber)',
    nameEn: 'VIP Suite "Pamir" (Summit Chamber)',
    capacity: '16 – 24 нафар',
    features: [
      'Калонтарин кабинкаи VIP дар ошёна',
      'Ҷои алоҳида барои чойнӯшӣ ва истироҳат',
      'Караоке бо микрофонҳои бесим',
      'Гардероби инфиродӣ'
    ],
    featuresRu: [
      'Самый просторный VIP кабинет',
      'Отдельная лаунж-зона для чаепития',
      'Караоке-система с беспроводными микрофонами',
      'Индивидуальный гардероб'
    ],
    featuresEn: [
      'Largest VIP room in the complex',
      'Private oriental lounge corner',
      'Wireless karaoke station',
      'Private coat check & washroom'
    ],
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80',
    description: 'Ҳуҷраи калону мукаммал бо минтақаи чойнӯшии суннатӣ ва фазои фарохи шомгоҳӣ барои меҳмонони олиқадр.',
    descriptionRu: 'Просторный зал для масштабных семейных ужинов с выделенной зоной для традиционного восточного чаепития.',
    descriptionEn: 'Grand salon equipped for larger family feasts, equipped with an oriental tea lounge and private multimedia.'
  }
];

export const BANQUET_HALL_SPECS = {
  floor: 'Ошёнаи 2-юм (2nd Floor)',
  capacityMax: 300,
  capacityOptimal: '100 – 280 нафар',
  idealForTg: ['Тӯйҳои Арӯсӣ', 'Ҷашнҳои Юбилей', 'Маросимҳои Суннат-Тӯй', 'Корпоративҳои Калон'],
  idealForRu: ['Свадебные торжества', 'Юбилеи и дни рождения', 'Суннат-туи и обряды', 'Корпоративные банкеты'],
  idealForEn: ['Grand Weddings', 'Jubilee Celebrations', 'Family Ceremonies', 'Corporate Banquets'],
  perksTg: [
    'Саҳнаи махсус барои ҳофизон ва ансамбли мусиқӣ бо нурафкании замонавӣ',
    'Садои мукаммали акустикӣ ва микрофонҳои бесими консертӣ',
    'Қолинҳои сурх ва даромадгоҳи бошукӯҳ барои навхонадорон',
    'Менюи фармоишӣ бо дастархони пурфайз ва шириниҳои беҳтарин',
    'Ороишоти гулҳои табиӣ ва чароғҳои биллурии боҳашамат'
  ],
  perksRu: [
    'Большая сцена для музыкантов и артистов со световым оборудованием',
    'Концертный звук и беспроводные микрофоны',
    'Торжественная входная группа и красная дорожка для молодоженов',
    'Богатое банкетное меню с деликатесами национальной и европейской кухни',
    'Хрустальные люстры и авторское декорирование залов'
  ],
  perksEn: [
    'Spacious stage with modern live audio and concert lighting',
    'Professional acoustics suited for live orchestra and performances',
    'Grand bridal entrance with red carpet reception',
    'Curated multi-course banquet feast designed by Executive Chefs',
    'Handcrafted crystal chandeliers and royal floral arrangements'
  ],
  images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
  ]
};

export const REVIEWS = [
  {
    author: 'Фаррух Исмоилов',
    roleTg: 'Ҷашни тӯйи арӯсӣ дар ошёнаи 2-юм',
    roleRu: 'Свадебный банкет на 2-м этаже',
    roleEn: 'Wedding celebration on 2nd floor',
    commentTg: 'Тӯйи додарамро дар ошёнаи 2-юми DIDOR гузаронидем. 220 нафар меҳмон ҳама қоил шуданд! Ош ва кабобҳо беҳад болаззат, хизматрасонӣ дар дараҷаи олӣ. Ташаккур ба роҳбарият!',
    commentRu: 'Проводили свадьбу брата в банкетном зале на 2 этаже. 220 гостей остались в полном восторге! Плов и шашлыки бесподобные, официанты внимательные.',
    commentEn: 'We celebrated my brother’s wedding on the 2nd floor hall for 220 guests. The plov, skewers, and hospitality were world-class!',
    rating: 5,
  },
  {
    author: 'Зарина Раҳимова',
    roleTg: 'Шоми оилавӣ дар VIP Кабинка',
    roleRu: 'Семейный ужин в VIP Кабинете',
    roleEn: 'Family dinner in VIP Suite',
    commentTg: 'Кабинкаи VIP барои зодрӯзи модарам ҷои орзуҳо буд. Фазои орому бароҳат, садои хуб, гӯшти мулоим ва чойи бо заъфарон беназир аст. Ҳатман боз меоем.',
    commentRu: 'Отмечали юбилей мамы в VIP кабинете. Очень уютно, роскошный интерьер, звукоизоляция идеальная, а кабоб тает во рту.',
    commentEn: 'Celebrated my mother’s birthday in the VIP room. Impeccable privacy, exquisite tea service and tender meats. Truly 5 stars.',
    rating: 5,
  },
  {
    author: 'Алишер Ғафуров',
    roleTg: 'Доставка ба хона',
    roleRu: 'Доставка на дом',
    roleEn: 'Home Delivery',
    commentTg: 'Ҳамеша ба офису хона аз DIDOR кабоб ва палав фармоиш медиҳем (+992 981 840 404). Таомҳо гарму тоза дар термо-қуттиҳо сари вақт мерасанд.',
    commentRu: 'Регулярно заказываем доставку из DIDOR. Привозят очень быстро, мясо горячее с дымком, упаковано великолепно.',
    commentEn: 'Ordered delivery multiple times across Dushanbe. Arrives sizzling hot in thermal packages, authentic taste every time.',
    rating: 5,
  }
];

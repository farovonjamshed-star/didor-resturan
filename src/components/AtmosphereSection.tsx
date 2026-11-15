import React from 'react';
import { Language } from '../types';
import { REVIEWS } from '../data/restaurantData';
import { Sparkles, Star, Flame, HeartHandshake, Music2, ShieldCheck, Quote } from 'lucide-react';

interface AtmosphereSectionProps {
  currentLang: Language;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ currentLang }) => {
  const t = {
    sub: { tg: 'Фалсафаи Мо', ru: 'Наша Философия', en: 'Our Philosophy' },
    title: { tg: 'Меҳмоннавозии Асили Тоҷикӣ ва Сифати Шоҳона', ru: 'Традиционное Гостеприимство и Королевский Уровень', en: 'Tajik Hospitality & Royal Quality' },
    desc: {
      tg: 'Дар DIDOR мо ҳар як таомро бо муҳаббат ва суннатҳои қадимаи миллӣ омода месозем. Аз бӯи дилангези кабоб то навои дилнавози мусиқӣ — ҳама чиз барои осоиши шумост.',
      ru: 'В DIDOR каждое блюдо создается с уважением к вековым традициям. От неповторимого аромата шашлыка до живых мелодий — все создано для вашего комфорта.',
      en: 'At DIDOR, every recipe honors centuries of culinary tradition. From smoke-kissed kebabs to captivating live melodies, every moment is crafted for your delight.',
    },
    pillars: [
      {
        icon: Flame,
        title: { tg: 'Оташи Зиндаи Ангишт', ru: 'Живой Огонь Мангала', en: 'Natural Charcoal Fire' },
        desc: {
          tg: 'Ҳамаи кабобҳо ва гӯштҳои мо танҳо дар ангишти табиии чӯб бо ҳарорати танзимшуда пухта мешаванд.',
          ru: 'Все виды шашлыка и стейков готовятся исключительно на натуральных древесных углях.',
          en: 'All kebabs and meats are grilled exclusively over natural hardwood embers for exquisite smoky flavor.',
        },
      },
      {
        icon: HeartHandshake,
        title: { tg: 'Меҳмоннавозии Тоҷикона', ru: 'Душевное Гостеприимство', en: 'Warm Hospitality' },
        desc: {
          tg: 'Меҳмон барои мо азиз аст. Дастархони кушода, чойи гарму заъфаронӣ ва пешвозгирии гарм.',
          ru: 'Гость — высшая ценность. Богатый дастархан, шафрановый чай и искреннее восточное уважение.',
          en: 'Guests are cherished. Abundant table spreads, saffron tea and attentive royal treatment.',
        },
      },
      {
        icon: Music2,
        title: { tg: 'Мусиқии Зинда', ru: 'Живая Музыка', en: 'Live Music Evenings' },
        desc: {
          tg: 'Дар рӯзҳои истироҳат ва маҳфилҳо — мусиқии орому дилнишини суннатӣ ва эстрадии муосир.',
          ru: 'В праздничные дни и уикенды звучит живая музыка, создавая неповторимую атмосферу праздника.',
          en: 'Soulful live instrumentals and contemporary melodies elevating your evening experience.',
        },
      },
      {
        icon: ShieldCheck,
        title: { tg: '100% Ҳалол & Табиӣ', ru: '100% Халяль и Свежесть', en: '100% Halal Certified' },
        desc: {
          tg: 'Интихоби гӯшти тозаи ҳисорӣ ва маҳсулоти табиии деҳқонӣ бидуни ягон маводи сунъӣ.',
          ru: 'Только свежайшее фермерское мясо высшей категории и экологически чистые продукты.',
          en: 'Prime mountain pasture meats and organic local produce prepared with utmost culinary purity.',
        },
      },
    ],
    reviewsTitle: { tg: 'Фикри Меҳмонони Мо', ru: 'Отзывы Наших Гостей', en: 'Words from Our Guests' },
  };

  return (
    <section className="py-24 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.sub[currentLang]}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title[currentLang]}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.desc[currentLang]}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#121214] border border-[#27272B] p-6 rounded-2xl gold-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#221F17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title[currentLang]}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc[currentLang]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-semibold">
                  <span>Стандарти DIDOR</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guest Reviews */}
        <div className="mt-12 bg-[#121214]/90 border border-[#2B2B30] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-1">
              Эътимод & Таҷриба
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t.reviewsTitle[currentLang]}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="bg-[#17171A] border border-[#2E2E33] p-6 rounded-2xl flex flex-col justify-between relative group hover:border-[#D4AF37]/40 transition-colors"
              >
                <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-4 right-4" />

                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                    "{currentLang === 'ru' ? rev.commentRu : currentLang === 'en' ? rev.commentEn : rev.commentTg}"
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800">
                  <div className="font-bold text-sm text-white">{rev.author}</div>
                  <div className="text-[11px] text-[#D4AF37] font-medium mt-0.5">
                    {currentLang === 'ru' ? rev.roleRu : currentLang === 'en' ? rev.roleEn : rev.roleTg}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Language } from '../types';
import { BANQUET_HALL_SPECS, VIP_CABINS, RESTAURANT_INFO } from '../data/restaurantData';
import { Crown, Sparkles, CheckCircle2, Phone, Calendar, Music, Users, Volume2, Tv, Shield } from 'lucide-react';

interface BanquetSectionProps {
  currentLang: Language;
  onOpenBooking: (type: 'banquet' | 'vip') => void;
}

export const BanquetSection: React.FC<BanquetSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'banquet' | 'vip'>('banquet');
  const [selectedVipIndex, setSelectedVipIndex] = useState(0);

  const t = {
    sub: { tg: 'Ошёнаи 2-юм & Фазои VIP', ru: '2-й Этаж & VIP Пространство', en: '2nd Floor & VIP Spaces' },
    title: { tg: 'Ҷашнҳои Шоҳона ва Муҳити Пурфароғат', ru: 'Королевские Торжества и VIP Комфорт', en: 'Royal Celebrations & VIP Comfort' },
    desc: {
      tg: 'Зали боҳашамати тӯёна дар ошёнаи 2-юм то 300 нафар меҳмон ва ҳуҷраҳои мукаммали VIP барои сӯҳбатҳои маҳрамона, ҷашнҳои хотирмон ва вохӯриҳои муҳим.',
      ru: 'Роскошный банкетный зал на 2 этаже вместимостью до 300 персон и приватные VIP-кабинеты с индивидуальным обслуживанием и первоклассной акустикой.',
      en: 'High-end 2nd-floor wedding banquet hall welcoming up to 300 guests, alongside bespoke VIP suites for intimate gatherings.',
    },
    banquetTab: { tg: 'Зали Тӯёна (Ошёнаи 2)', ru: 'Банкетный Зал (2 этаж)', en: 'Banquet Hall (2nd Floor)' },
    vipTab: { tg: 'VIP-Кабинкаҳо', ru: 'VIP-Кабинеты', en: 'Private VIP Suites' },
    callDirect: { tg: 'Брони мустақими Зали Тӯёна:', ru: 'Прямая бронь зала:', en: 'Direct Hall Reservation:' },
    bookHallBtn: { tg: 'Брон кардани Зали Тӯёна', ru: 'Забронировать Банкетный Зал', en: 'Book Banquet Hall' },
    bookVipBtn: { tg: 'Брон кардани VIP-Кабинка', ru: 'Забронировать VIP-Кабинет', en: 'Reserve VIP Suite' },
  };

  const currentVip = VIP_CABINS[selectedVipIndex];

  return (
    <section id="banquet" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.sub[currentLang]}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title[currentLang]}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.desc[currentLang]}
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#161619] border border-[#2F2F35] rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('banquet')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'banquet'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8891E] text-black shadow-lg font-extrabold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.banquetTab[currentLang]}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vip')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'vip'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8891E] text-black shadow-lg font-extrabold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.vipTab[currentLang]}
            </button>
          </div>
        </div>

        {/* Tab 1: 2nd-Floor Banquet Hall Showcase */}
        {activeTab === 'banquet' && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131316] border border-[#2D2D32] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              {/* Highlight badge in corner */}
              <div className="absolute -top-3 left-8 bg-[#D4AF37] text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                {BANQUET_HALL_SPECS.floor}
              </div>

              {/* Left Column: Hall Description & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase mb-1">
                    Ғунҷоиш: {BANQUET_HALL_SPECS.capacityOptimal} (то {BANQUET_HALL_SPECS.capacityMax} нафар)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Зали Боҳашамати Тӯёна «DIDOR PALACE»
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Маконе сазовори зеботарин рӯзи ҳаёти шумо. Бо чароғҳои буллурии тиллоӣ,
                    даромадгоҳи шоҳонаи арӯсу домод ва ошпазони соҳибтаҷриба, ки ҳар як
                    маросимро ба хотираи фаромӯшнопазир табдил медиҳанд.
                  </p>
                </div>

                {/* Event Types */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Идеалӣ барои маросимҳои:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(currentLang === 'ru'
                      ? BANQUET_HALL_SPECS.idealForRu
                      : currentLang === 'en'
                      ? BANQUET_HALL_SPECS.idealForEn
                      : BANQUET_HALL_SPECS.idealForTg
                    ).map((type, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-amber-200/90 bg-[#201D16] border border-[#D4AF37]/30 px-3 py-1 rounded-lg font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Amenities List */}
                <div className="space-y-2.5 pt-2">
                  {(currentLang === 'ru'
                    ? BANQUET_HALL_SPECS.perksRu
                    : currentLang === 'en'
                    ? BANQUET_HALL_SPECS.perksEn
                    : BANQUET_HALL_SPECS.perksTg
                  ).map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action and Phone */}
                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('banquet')}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.bookHallBtn[currentLang]}</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                    className="px-5 py-3 rounded-xl border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-semibold flex items-center justify-center gap-2 bg-[#1A1A1E] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{RESTAURANT_INFO.phoneBooking}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                  <img
                    src={BANQUET_HALL_SPECS.images[0]}
                    alt="Banquet Hall Grand Hall"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-medium text-amber-200">
                    Фазои 250+ нафар · Зали асосии тӯйҳо
                  </div>
                </div>

                <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden group">
                  <img
                    src={BANQUET_HALL_SPECS.images[1]}
                    alt="Banquet Hall Detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-2 left-2 text-[10px] text-zinc-300">
                    Дастархони шоҳона
                  </div>
                </div>

                <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden group">
                  <img
                    src={BANQUET_HALL_SPECS.images[2]}
                    alt="Banquet Hall Stage"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-2 left-2 text-[10px] text-zinc-300">
                    Саҳна & Нурафканӣ
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: VIP Cabins (VIP Rooms) */}
        {activeTab === 'vip' && (
          <div id="vip" className="animate-in fade-in duration-500 space-y-8">
            {/* VIP Cabin Selector Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {VIP_CABINS.map((cabin, idx) => (
                <button
                  key={cabin.id}
                  type="button"
                  onClick={() => setSelectedVipIndex(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    selectedVipIndex === idx
                      ? 'bg-[#252219] border-[#D4AF37] text-[#D4AF37] shadow-md font-bold'
                      : 'bg-[#151517] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {currentLang === 'ru' ? cabin.nameRu : currentLang === 'en' ? cabin.nameEn : cabin.name}
                </button>
              ))}
            </div>

            {/* Selected VIP Cabin Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131316] border border-[#2D2D32] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Image side */}
              <div className="lg:col-span-6 relative h-72 sm:h-84 rounded-2xl overflow-hidden group">
                <img
                  src={currentVip.image}
                  alt={currentVip.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#0F0F0F]/90 border border-[#D4AF37]/50 text-[#D4AF37] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                  Ғунҷоиш: {currentVip.capacity}
                </div>
              </div>

              {/* Info side */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {currentLang === 'ru' ? currentVip.nameRu : currentLang === 'en' ? currentVip.nameEn : currentVip.name}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {currentLang === 'ru' ? currentVip.descriptionRu : currentLang === 'en' ? currentVip.descriptionEn : currentVip.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(currentLang === 'ru'
                    ? currentVip.featuresRu
                    : currentLang === 'en'
                    ? currentVip.featuresEn
                    : currentVip.features
                  ).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#1A1A1E] border border-zinc-800 text-xs text-zinc-300"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('vip')}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.bookVipBtn[currentLang]}</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                    className="px-5 py-3 rounded-xl border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-semibold flex items-center justify-center gap-2 bg-[#1A1A1E] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{RESTAURANT_INFO.phoneBooking}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

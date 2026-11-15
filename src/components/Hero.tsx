import React from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Calendar, Utensils, Phone, Sparkles, ShieldCheck, Users, Crown, ArrowDown } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: (type?: 'table' | 'vip' | 'banquet') => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const content = {
    badge: {
      tg: 'Ресторани Шоҳона & Маҷмааи Тӯёна',
      ru: 'Премиальный Ресторан & Банкетный Комплекс',
      en: 'Royal Dining & Banquet Complex',
    },
    titlePrefix: 'DIDOR',
    slogan: {
      tg: 'Таъме, ки мехоҳед дубора таҷриба кунед',
      ru: 'Вкус, к которому хочется возвращаться снова',
      en: 'A taste you will want to experience again',
    },
    description: {
      tg: 'Ҷои беҳтарин барои лаззат бурдан аз кабобҳои оташӣ, оши суннатии тӯёна, баргузории тӯйҳои бошукӯҳ дар ошёнаи 2-юм ва сӯҳбатҳои самимона дар VIP-кабинкаҳои боҳашамат.',
      ru: 'Идеальное место для ценителей сочных шашлыков на углях, настоящего праздничного плова, пышных свадеб на 2-м этаже и закрытых встреч в VIP-кабинетах.',
      en: 'The premier destination in Dushanbe for charcoal-grilled kebabs, festive plov, grand wedding celebrations on the 2nd floor, and private VIP luxury suites.',
    },
    ctaBook: {
      tg: 'Брон кардани Миз',
      ru: 'Забронировать Стол',
      en: 'Reserve a Table',
    },
    ctaMenu: {
      tg: 'Дидани Меню',
      ru: 'Смотреть Меню',
      en: 'Explore Menu',
    },
    ctaBanquet: {
      tg: 'Зали Тӯёна (Ошёнаи 2)',
      ru: 'Банкетный Зал (2 этаж)',
      en: 'Banquet Hall (2nd Fl)',
    },
    features: [
      {
        icon: Crown,
        title: { tg: 'Зали Тӯёна 300 нафар', ru: 'Банкетный Зал 300 мест', en: '300-Seat Banquet Hall' },
        sub: { tg: 'Ошёнаи 2-юм бо саҳна ва садои консертӣ', ru: '2-й этаж со сценой и светом', en: '2nd floor with stage & audio' },
      },
      {
        icon: Users,
        title: { tg: 'VIP-Кабинкаҳои Боҳашамат', ru: 'Приватные VIP-Кабинеты', en: 'Private VIP Suites' },
        sub: { tg: 'Аз 8 то 24 нафар бо Smart TV & Karaoke', ru: 'От 8 до 24 персон с караоке', en: '8 to 24 guests with smart TV' },
      },
      {
        icon: ShieldCheck,
        title: { tg: '100% Гӯшти Ҳалол', ru: '100% Халяль продукты', en: '100% Halal Quality' },
        sub: { tg: 'Гӯшти тозаи ҳисорӣ дар оташи зинда', ru: 'Свежее фермерское мясо на мангале', en: 'Local mountain meats on open fire' },
      },
    ],
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F]">
      {/* Background Visual Layers: Dark Charcoal Atmosphere with Ambient Warm Gold Lighting */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Luxury Textured Dark Vignette */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Multi-layered dark gradients for readability and elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0F0F0F]/90 to-[#0A0A0B]/95" />
        <div className="absolute inset-0 bg-radial from-amber-600/10 via-transparent to-transparent pointer-events-none" />

        {/* Ambient Gold Halo in Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Floating Logo Badge Centerpiece */}
        <div className="mb-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="relative p-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#F3E5AB]/30 to-[#D4AF37]/20 rounded-full blur-md opacity-75" />
            <Logo size="xl" showSubtitle={true} className="relative z-10" />
          </div>
        </div>

        {/* Quiet Subtitle / Category Label without pill enclosure */}
        <div className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>{content.badge[currentLang]}</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>

        {/* Main Headline: «DIDOR — Таъме, ки мехоҳед дубора таҷриба кунед» */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight mb-5">
          <span className="font-brand-sans tracking-wider block sm:inline">DIDOR</span>{' '}
          <span className="text-zinc-400 font-light hidden sm:inline">—</span>{' '}
          <span className="gold-gradient-text block sm:inline italic font-serif-luxury font-normal">
            «{content.slogan[currentLang]}»
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8">
          {content.description[currentLang]}
        </p>

        {/* Action Buttons Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-14">
          {/* Primary CTA: Book Table */}
          <button
            type="button"
            onClick={() => onOpenBooking('table')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:from-white hover:via-[#F3E5AB] hover:to-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{content.ctaBook[currentLang]}</span>
          </button>

          {/* Secondary CTA: View Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#F8F5F0] bg-[#161619] hover:bg-[#202025] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>{content.ctaMenu[currentLang]}</span>
          </a>

          {/* Tertiary CTA: Banquet Hall 2nd Floor */}
          <a
            href="#banquet"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-medium tracking-wider text-amber-200/90 hover:text-white bg-transparent hover:bg-white/5 border border-amber-500/20 hover:border-amber-400/50 transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>{content.ctaBanquet[currentLang]}</span>
          </a>
        </div>

        {/* Value Highlights Feature Grid (Clean typography, no static pill enclosures) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full max-w-5xl text-left">
          {content.features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#141416]/90 border border-[#D4AF37]/20 p-5 rounded-xl gold-card-hover backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#222018] border border-[#D4AF37]/30 text-[#D4AF37] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm lg:text-base leading-snug">
                      {item.title[currentLang]}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {item.sub[currentLang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-zinc-500 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[11px] tracking-widest uppercase text-zinc-400">DIDOR</span>
          <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, ExternalLink, Calendar, Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

interface LocationFooterProps {
  currentLang: Language;
  onOpenBooking: (type?: 'table' | 'vip' | 'banquet') => void;
}

export const LocationFooter: React.FC<LocationFooterProps> = ({ currentLang, onOpenBooking }) => {
  const t = {
    locationBadge: { tg: 'Макон & Тамос', ru: 'Локация & Контакты', en: 'Location & Contacts' },
    locationTitle: { tg: 'Ба Ресторани DIDOR Хуш Омадед', ru: 'Добро пожаловать в DIDOR', en: 'Welcome to DIDOR Restaurant' },
    addressLabel: { tg: 'Суроға:', ru: 'Адрес:', en: 'Address:' },
    hoursLabel: { tg: 'Соати корӣ:', ru: 'Время работы:', en: 'Working Hours:' },
    deliveryPhone: { tg: 'Хадамоти Доставка:', ru: 'Служба Доставки:', en: 'Delivery Service:' },
    bookingPhone: { tg: 'Брони Миз ва Зали Тӯёна (Ошёнаи 2):', ru: 'Бронь столов и банкетного зала (2 этаж):', en: 'Table & Banquet Hall Booking (2nd Fl):' },
    openMaps: { tg: 'Кушодан дар Google Maps', ru: 'Открыть в Google Maps', en: 'Open in Google Maps' },
    openYandex: { tg: 'Кушодан дар Яндекс Карты', ru: 'Открыть в Яндекс Картах', en: 'Open in Yandex Maps' },
    quickNav: { tg: 'Бахшҳои асосӣ', ru: 'Навигация', en: 'Quick Navigation' },
    aboutDesc: {
      tg: 'DIDOR Restaurant — таомҳои боҳашамати миллӣ ва аврупоӣ, кабобҳои оташӣ, толори тӯёнаи 300-нафара дар ошёнаи 2 ва VIP-кабинкаҳо дар ш. Душанбе.',
      ru: 'DIDOR Restaurant — восточная и европейская кухня, сочные шашлыки, банкетный зал на 300 мест на 2 этаже и VIP кабинеты в г. Душанбе.',
      en: 'DIDOR Restaurant — luxury national and continental cuisine, charcoal-grilled meats, a 300-seat wedding banquet hall on the 2nd floor, and exclusive VIP suites in Dushanbe.',
    },
    rights: { tg: 'Ҳамаи ҳуқуқҳо ҳифз карда шудаанд.', ru: 'Все права защищены.', en: 'All rights reserved.' },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0A0B] text-zinc-300 border-t border-[#D4AF37]/30 relative pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.locationBadge[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.locationTitle[currentLang]}
          </h2>
          <p className="text-sm text-zinc-400">
            {currentLang === 'ru'
              ? RESTAURANT_INFO.addressRu
              : currentLang === 'en'
              ? RESTAURANT_INFO.address
              : RESTAURANT_INFO.addressTg}
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#121214] border border-[#2B2B30] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#201D16] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider block font-medium">
                    {t.addressLabel[currentLang]}
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">
                    {RESTAURANT_INFO.addressTg}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    (кӯчаи Раҳмон Набиев 26, рӯ ба рӯи боғ / назди чорроҳа)
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#201D16] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider block font-medium">
                    {t.hoursLabel[currentLang]}
                  </span>
                  <div className="text-base font-bold text-white mt-1">
                    {RESTAURANT_INFO.hours}
                  </div>
                  <div className="text-xs text-[#D4AF37] mt-0.5 font-medium">
                    Ошхона ва мангал то 22:30 фаъол аст
                  </div>
                </div>
              </div>

              {/* Delivery Contact */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17171A] border border-zinc-800">
                <div className="p-2.5 rounded-lg bg-[#252015] text-[#D4AF37] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-medium">
                    {t.deliveryPhone[currentLang]}
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
                    className="text-lg font-black text-white hover:text-[#D4AF37] transition-colors block mt-0.5"
                  >
                    {RESTAURANT_INFO.phoneDelivery}
                  </a>
                </div>
              </div>

              {/* Banquet Hall Booking Contact */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1A1812] border border-[#D4AF37]/30">
                <div className="p-2.5 rounded-lg bg-[#2B2313] text-[#D4AF37] flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-amber-200/90 block font-medium">
                    {t.bookingPhone[currentLang]}
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                    className="text-lg font-black text-[#D4AF37] hover:text-white transition-colors block mt-0.5"
                  >
                    {RESTAURANT_INFO.phoneBooking}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Openers */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap gap-3 mt-6">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1C1C20] hover:bg-[#25252A] border border-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.openMaps[currentLang]}</span>
              </a>

              <a
                href={`https://yandex.com/maps/?text=Душанбе+Рахмон+Набиев+26`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1C1C20] hover:bg-[#25252A] border border-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                <span>{t.openYandex[currentLang]}</span>
              </a>
            </div>
          </div>

          {/* Integrated Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#121214] border border-[#2B2B30] rounded-3xl overflow-hidden min-h-[380px] relative shadow-xl flex flex-col">
            <iframe
              title="DIDOR Restaurant Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.508535084918!2d68.76950000000001!3d38.554000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i78
4!4f13.1!3m3!1m2!1s0x38b5d15a51a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sRahmon%20Nabiyev%20St%2026%2C%20Dushanbe%2C%20Tajikistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              className="w-full h-full min-h-[400px] border-0 filter grayscale-40 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Banner */}
            <div className="absolute top-4 left-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-[#D4AF37]/50 px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold text-white">DIDOR Restaurant</span>
              <span className="text-zinc-400">· Rahmon Nabiyev 26</span>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom Navigation & Brandmark */}
        <div className="pt-12 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" showSubtitle={true} variant="horizontal" />
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {t.aboutDesc[currentLang]}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.whatsappBooking}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181B] border border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-zinc-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                className="w-9 h-9 rounded-full bg-[#18181B] border border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-zinc-300"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.quickNav[currentLang]}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  Асосӣ (Home)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4AF37] transition-colors">
                  Менюи Рақамӣ (Menu)
                </a>
              </li>
              <li>
                <a href="#banquet" className="hover:text-[#D4AF37] transition-colors">
                  Зали Тӯёна — Ошёнаи 2 (Banquet Hall)
                </a>
              </li>
              <li>
                <a href="#vip" className="hover:text-[#D4AF37] transition-colors">
                  VIP-Кабинкаҳо (VIP Rooms)
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#D4AF37] transition-colors">
                  Доставка дар ш. Душанбе (Delivery)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Top button */}
          <div className="md:col-span-4 space-y-3 text-left md:text-right flex flex-col md:items-end justify-between">
            <button
              type="button"
              onClick={() => onOpenBooking('table')}
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:brightness-110 shadow-lg w-full sm:w-auto text-center"
            >
              Брони Миз дар DIDOR
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#D4AF37] transition-colors mt-4"
            >
              <span>Ба болои саҳифа</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} DIDOR RESTAURANT. {t.rights[currentLang]}</p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-500">
            <span>ш. Душанбе, кӯчаи Раҳмон Набиев 26</span>
            <span>·</span>
            <span className="text-[#D4AF37]">100% Ҳалол</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

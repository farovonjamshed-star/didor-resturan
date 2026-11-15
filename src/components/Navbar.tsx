import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, ShoppingBag, Menu as MenuIcon, X, Calendar, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (type?: 'table' | 'vip' | 'banquet') => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
  onOpenCart,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels = {
    home: { tg: 'Асосӣ', ru: 'Главная', en: 'Home' },
    menu: { tg: 'Меню', ru: 'Меню', en: 'Menu' },
    banquet: { tg: 'Зали Свадьба', ru: 'Банкетный Зал', en: 'Banquet Hall' },
    vip: { tg: 'VIP-Кабинкаҳо', ru: 'VIP-Кабинеты', en: 'VIP Rooms' },
    delivery: { tg: 'Доставка', ru: 'Доставка', en: 'Delivery' },
    contact: { tg: 'Тамос', ru: 'Контакты', en: 'Contact' },
    bookTable: { tg: 'Брони Миз', ru: 'Бронь Стола', en: 'Book Table' },
  };

  const navLinks = [
    { href: '#home', label: navLabels.home[currentLang] },
    { href: '#menu', label: navLabels.menu[currentLang] },
    { href: '#banquet', label: navLabels.banquet[currentLang] },
    { href: '#vip', label: navLabels.vip[currentLang] },
    { href: '#delivery', label: navLabels.delivery[currentLang] },
    { href: '#contact', label: navLabels.contact[currentLang] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-[#0A0A0B]/95 border-b border-[#D4AF37]/15 text-xs text-[#E5DFD3] hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[#E0D8C8]">
                {RESTAURANT_INFO.addressTg}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-zinc-400">{RESTAURANT_INFO.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-zinc-400">Доставка:</span>
              <strong className="text-white font-medium">{RESTAURANT_INFO.phoneDelivery}</strong>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-zinc-400">Зали Тӯёна (Ошёнаи 2):</span>
              <strong className="text-[#D4AF37] font-semibold">{RESTAURANT_INFO.phoneBooking}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-[#D4AF37]/25 py-2.5'
            : 'bg-[#0F0F0F]/85 backdrop-blur-sm border-b border-[#D4AF37]/15 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <Logo size="sm" showSubtitle={true} variant="horizontal" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#E5DFD3] hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#171719] border border-[#2A2A2D] rounded-md p-0.5 text-xs">
              {(['tg', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 rounded text-[11px] font-semibold uppercase transition-colors ${
                    currentLang === lang
                      ? 'bg-[#D4AF37] text-black shadow-sm font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Delivery Cart Button */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Delivery cart"
              className="relative p-2.5 rounded-lg bg-[#18181A] hover:bg-[#222226] border border-[#D4AF37]/30 text-[#D4AF37] transition-all hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Golden CTA Button: "Брони Миз" */}
            <button
              type="button"
              onClick={() => onOpenBooking('table')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:from-white hover:via-[#F3E5AB] hover:to-[#D4AF37] shadow-[0_4px_18px_rgba(212,175,55,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>{navLabels.bookTable[currentLang]}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E5DFD3] hover:text-[#D4AF37] focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0F0F]/98 border-b border-[#D4AF37]/30 px-6 py-6 mt-2 space-y-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#E5DFD3] hover:text-[#D4AF37] py-2 border-b border-zinc-800/60"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('table');
                }}
                className="w-full py-3 rounded-lg font-bold text-center text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27]"
              >
                {navLabels.bookTable[currentLang]}
              </button>

              <div className="bg-[#161618] p-3 rounded-lg border border-[#2D2D30] text-xs space-y-1.5 text-zinc-300">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Доставка:</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`} className="text-[#D4AF37] font-semibold">
                    {RESTAURANT_INFO.phoneDelivery}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Зали Тӯёна (2nd Fl):</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`} className="text-white font-semibold">
                    {RESTAURANT_INFO.phoneBooking}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

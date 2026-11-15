import React, { useState } from 'react';
import { Language, MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { BanquetSection } from './components/BanquetSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { DeliverySection } from './components/DeliverySection';
import { LocationFooter } from './components/LocationFooter';
import { BookingModal } from './components/BookingModal';
import { DeliveryDrawer } from './components/DeliveryDrawer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { Phone, Calendar, ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('tg');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'table' | 'vip' | 'banquet'>('table');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenBooking = (type: 'table' | 'vip' | 'banquet' = 'table') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartItemIds = new Set(cart.map((c) => c.item.id));

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F8F5F0] relative selection:bg-[#D4AF37]/30 selection:text-[#F8F5F0]">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero currentLang={currentLang} onOpenBooking={handleOpenBooking} />

        {/* Digital Menu Highlights */}
        <MenuSection
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 2nd-Floor Banquet Hall & VIP Rooms */}
        <BanquetSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Restaurant Atmosphere, Pillars & Reviews */}
        <AtmosphereSection currentLang={currentLang} />

        {/* Express Delivery Information & Hotline */}
        <DeliverySection
          currentLang={currentLang}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cartCount}
        />
      </main>

      {/* Location, Google Map & Footer */}
      <LocationFooter
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultType={bookingType}
        currentLang={currentLang}
      />

      {/* Delivery Cart Drawer */}
      <DeliveryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currentLang={currentLang}
      />

      {/* Mobile Sticky Quick Action Bar (Bottom Floating for Immediate Calling & Booking) */}
      <aside aria-label="Quick Actions" className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#0F0F0F]/95 backdrop-blur-lg border border-[#D4AF37]/40 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#1A1A1E] text-[#D4AF37] border border-[#D4AF37]/30 rounded-xl text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Доставка</span>
        </a>

        <a
          href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#1A1A1E] text-white border border-zinc-700 rounded-xl text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Зали Тӯй</span>
        </a>

        <button
          type="button"
          onClick={() => handleOpenBooking('table')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-[#D4AF37] to-[#B8891E] text-black rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Брон</span>
        </button>
      </aside>
    </div>
  );
}

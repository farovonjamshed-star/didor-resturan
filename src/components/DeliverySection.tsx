import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Truck, Phone, MessageSquare, Clock, ShieldCheck, Flame, ShoppingBag } from 'lucide-react';

interface DeliverySectionProps {
  currentLang: Language;
  onOpenCart: () => void;
  cartCount: number;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  currentLang,
  onOpenCart,
  cartCount,
}) => {
  const t = {
    sub: { tg: 'Хадамоти Доставка', ru: 'Служба Доставки', en: 'Delivery Service' },
    title: { tg: 'Таъми Тарабхона дар Хона ва Офиси Шумо', ru: 'Вкус Ресторана у Вас Дома и в Офисе', en: 'Restaurant Flavors at Home & Office' },
    desc: {
      tg: 'Кабобҳои сихӣ, оши палави гарм ва салатҳоро бо интиқоли боэътимод дар зарфҳои гарминигоҳдоранда ба тамоми гӯшаву канори шаҳри Душанбе мерасонем.',
      ru: 'Доставляем горячие шашлыки прямо с мангала, рассыпчатый плов и свежие салаты в специальных термо-боксах по всему Душанбе.',
      en: 'Enjoy fresh-grilled kebabs, piping hot plov, and gourmet salads delivered across Dushanbe in temperature-controlled packaging.',
    },
    hotlineLabel: { tg: 'Телефони фаврии Доставка:', ru: 'Горячая линия доставки:', en: 'Fast Delivery Hotline:' },
    orderWhatsapp: { tg: 'Фармоиш бо WhatsApp', ru: 'Заказ в WhatsApp', en: 'Order via WhatsApp' },
    viewCart: { tg: 'Дидани Сабади Доставка', ru: 'Открыть Корзину', en: 'Open Delivery Cart' },
    steps: [
      {
        step: '01',
        title: { tg: 'Таомро интихоб кунед', ru: 'Выберите блюда', en: 'Choose your dishes' },
        desc: { tg: 'Аз менюи рақамии мо кабоб, палав ё салатҳоро интихоб намоед.', ru: 'Из нашего онлайн-меню на сайте.', en: 'From our digital culinary menu.' },
      },
      {
        step: '02',
        title: { tg: 'Фармоиш диҳед', ru: 'Оформите заказ', en: 'Place the order' },
        desc: { tg: 'Бо рақами +992 981 840 404 ё мустақим дар WhatsApp.', ru: 'По телефону или через WhatsApp.', en: 'Via phone hotline or WhatsApp.' },
      },
      {
        step: '03',
        title: { tg: 'Интиқоли гарм', ru: 'Горячая доставка', en: 'Sizzling hot delivery' },
        desc: { tg: 'Дар зарфҳои махсус сари вақт ба суроғаи шумо мерасад.', ru: 'В термо-упаковке прямо к вашему столу.', en: 'Delivered in thermal boxes to your door.' },
      },
    ],
  };

  return (
    <section id="delivery" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#161619] via-[#121214] to-[#0D0D0E] border border-[#D4AF37]/35 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle gold ambient glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.sub[currentLang]}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {t.title[currentLang]}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t.desc[currentLang]}
              </p>

              {/* Direct Hotline Box */}
              <div className="bg-[#1C1C20] border border-[#D4AF37]/40 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-zinc-400 block mb-1">
                    {t.hotlineLabel[currentLang]}
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
                    className="text-2xl sm:text-3xl font-black text-white hover:text-[#D4AF37] transition-colors tracking-tight flex items-center gap-2.5"
                  >
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                    <span>{RESTAURANT_INFO.phoneDelivery}</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={RESTAURANT_INFO.whatsappDelivery}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors flex-1 sm:flex-initial"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.orderWhatsapp[currentLang]}</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenCart}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>
                      {t.viewCart[currentLang]} {cartCount > 0 && `(${cartCount})`}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Step cards */}
            <div className="lg:col-span-5 space-y-4">
              {t.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-[#18181C] border border-zinc-800 p-5 rounded-2xl flex items-start gap-4 hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="text-xl font-black text-[#D4AF37] font-brand-sans w-8 flex-shrink-0 pt-0.5">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {s.title[currentLang]}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {s.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

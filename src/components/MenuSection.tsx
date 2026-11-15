import React, { useState, useMemo } from 'react';
import { MenuItem, Language } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, UtensilsCrossed, Sparkles, Plus, Check, Search, Phone, Eye } from 'lucide-react';

interface MenuSectionProps {
  currentLang: Language;
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  currentLang,
  onAddToCart,
  cartItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: { tg: 'Ҳамаи Таомҳо', ru: 'Все Блюда', en: 'All Dishes' } },
    { id: 'grill', label: { tg: 'Кабобҳо & Мангал', ru: 'Шашлыки & Мангал', en: 'Grilled & Kebabs' } },
    { id: 'national', label: { tg: 'Таомҳои Миллӣ & Палав', ru: 'Национальная Кухня', en: 'National Heritage' } },
    { id: 'salads', label: { tg: 'Салатҳо & Газакҳо', ru: 'Салаты & Закуски', en: 'Salads & Starters' } },
    { id: 'banquet', label: { tg: 'Таомҳои Тӯёна', ru: 'Банкетные Блюда', en: 'Festive & Banquets' } },
    { id: 'drinks', label: { tg: 'Чойхона & Нӯшокиҳо', ru: 'Чайная & Напитки', en: 'Tea & Drinks' } },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const nameMatch =
        item.name.toLowerCase().includes(q) ||
        item.nameRu.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q);
      const descMatch =
        item.description.toLowerCase().includes(q) ||
        item.descriptionRu.toLowerCase().includes(q);

      return matchesCategory && (nameMatch || descMatch);
    });
  }, [activeCategory, searchQuery]);

  const titles = {
    sectionSub: { tg: 'Менюи Рақамӣ', ru: 'Цифровое Меню', en: 'Digital Menu' },
    sectionTitle: { tg: 'Шоҳкориҳои Ошпазони DIDOR', ru: 'Кулинарные Шедевры DIDOR', en: 'Culinary Masterpieces of DIDOR' },
    sectionDesc: {
      tg: 'Гӯштҳои ҳалоли хуштаъм дар ангишти табиӣ, палави махсуси дегӣ бо гӯшти барра, салатҳои тару тоза ва дастархони сазовори меҳмонони олиқадр.',
      ru: 'Халяльное мясо на березовых углях, рассыпчатый праздничный плов, авторские салаты и блюда для больших застолий.',
      en: 'Halal meats roasted over natural charcoal, authentic slow-cooked wedding plov, fresh vibrant salads and banquet specialties.',
    },
    deliveryCall: {
      tg: 'Фармоиши тез ба тамоми Душанбе:',
      ru: 'Быстрый заказ доставки по Душанбе:',
      en: 'Fast delivery across Dushanbe:',
    },
    addBtn: { tg: 'Илова ба фармоиш', ru: 'В корзину', en: 'Add to Order' },
    addedBtn: { tg: 'Дар сабад', ru: 'В корзине', en: 'In Cart' },
    searchPlaceholder: { tg: 'Ҷустуҷӯи таом (кабоб, палав, салат...)', ru: 'Поиск блюда (шашлык, плов...)', en: 'Search dish...' },
  };

  const getItemName = (item: MenuItem) => {
    if (currentLang === 'ru') return item.nameRu;
    if (currentLang === 'en') return item.nameEn;
    return item.name;
  };

  const getItemDesc = (item: MenuItem) => {
    if (currentLang === 'ru') return item.descriptionRu;
    if (currentLang === 'en') return item.descriptionEn;
    return item.description;
  };

  const getItemBadge = (item: MenuItem) => {
    if (currentLang === 'ru') return item.badgeRu;
    if (currentLang === 'en') return item.badgeEn;
    return item.badge;
  };

  return (
    <section id="menu" className="py-24 bg-[#0A0A0B] relative">
      {/* Decorative Gold Accent Borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
            <Flame className="w-4 h-4 text-[#D4AF37]" />
            <span>{titles.sectionSub[currentLang]}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {titles.sectionTitle[currentLang]}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {titles.sectionDesc[currentLang]}
          </p>

          {/* Quick Direct Delivery Link */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300">
            <span>{titles.deliveryCall[currentLang]}</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
              className="text-[#D4AF37] font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              {RESTAURANT_INFO.phoneDelivery}
            </a>
          </div>
        </div>

        {/* Search Bar & Category Filter Segmented Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141416] border border-[#2D2D32] rounded-xl overflow-x-auto w-full lg:w-auto max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8891E] text-black shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {cat.label[currentLang]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={titles.searchPlaceholder[currentLang]}
              className="w-full bg-[#141416] border border-[#2D2D32] rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.has(item.id);
            const badgeText = getItemBadge(item);

            return (
              <div
                key={item.id}
                className="bg-[#121214] border border-[#26262A] rounded-2xl overflow-hidden flex flex-col justify-between gold-card-hover group"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={getItemName(item)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />

                  {/* Top unboxed quiet badge or subtle tag */}
                  {badgeText && (
                    <div className="absolute top-3 left-3 bg-[#0F0F0F]/85 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide uppercase shadow-sm">
                      {badgeText}
                    </div>
                  )}

                  {/* Weight / Portion Indicator */}
                  {item.weight && (
                    <div className="absolute top-3 right-3 text-[11px] font-medium text-zinc-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.weight}
                    </div>
                  )}

                  {/* Quick Detail View overlay trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedDish(item)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black transition-colors"
                    title="Тафсилот"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {getItemName(item)}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {getItemDesc(item)}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block">Нарх</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-[#D4AF37] tracking-tight">
                          {item.price}
                        </span>
                        <span className="text-xs font-semibold text-zinc-400 uppercase">TJS (Сомонӣ)</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart(item)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                          : 'bg-[#1D1D21] hover:bg-[#D4AF37] text-zinc-200 hover:text-black border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{titles.addedBtn[currentLang]}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black" />
                          <span>{titles.addBtn[currentLang]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search found nothing */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#141416] rounded-2xl border border-zinc-800">
            <UtensilsCrossed className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">Таоме бо чунин ном ёфт нашуд.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-[#D4AF37] underline"
            >
              Тоза кардани филтр
            </button>
          </div>
        )}
      </div>

      {/* Dish Quick Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121214] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <div className="relative h-64 w-full">
              <img
                src={selectedDish.image}
                alt={getItemName(selectedDish)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">
                  {getItemName(selectedDish)}
                </h3>
                {selectedDish.weight && (
                  <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                    {selectedDish.weight}
                  </span>
                )}
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {getItemDesc(selectedDish)}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div>
                  <span className="text-xs text-zinc-500 block">Нархи порсия</span>
                  <div className="text-2xl font-black text-[#D4AF37]">
                    {selectedDish.price}{' '}
                    <span className="text-xs font-semibold text-zinc-400 uppercase">TJS</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(selectedDish);
                      setSelectedDish(null);
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] text-black hover:brightness-110 shadow-lg"
                  >
                    {titles.addBtn[currentLang]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { CartItem, Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, X, Trash2, Plus, Minus, Phone, MessageSquare, MapPin, Truck, CheckCircle2 } from 'lucide-react';

interface DeliveryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  currentLang: Language;
}

export const DeliveryDrawer: React.FC<DeliveryDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentLang,
}) => {
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('+992 ');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const totalSum = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const labels = {
    title: { tg: 'Сабади Доставка', ru: 'Корзина Доставки', en: 'Delivery Cart' },
    empty: {
      tg: 'Сабади шумо холӣ аст. Аз меню таомҳои дилхоҳатонро илова кунед!',
      ru: 'Ваша корзина пуста. Добавьте понравившиеся блюда из меню!',
      en: 'Your cart is empty. Add your favorite dishes from our menu!',
    },
    subtotal: { tg: 'Маблағи умумӣ:', ru: 'Итого к оплате:', en: 'Total Amount:' },
    deliveryNote: {
      tg: 'Интиқоли гарм дар зарфҳои махсуси термо дар ш. Душанбе',
      ru: 'Горячая доставка в термо-боксах по всему Душанбе',
      en: 'Thermal insulated hot delivery across Dushanbe',
    },
    addressLabel: { tg: 'Суроғаи Шумо дар Душанбе *', ru: 'Ваш адрес в Душанбе *', en: 'Your Dushanbe Address *' },
    nameLabel: { tg: 'Номи Шумо *', ru: 'Ваше имя *', en: 'Your Name *' },
    phoneLabel: { tg: 'Телефони тамос *', ru: 'Телефон для связи *', en: 'Phone Number *' },
    orderWhatsapp: { tg: 'Фармоиш бо WhatsApp', ru: 'Заказать через WhatsApp', en: 'Order via WhatsApp' },
    orderCall: { tg: 'Занг ба Хадамоти Доставка', ru: 'Позвонить в доставку', en: 'Call Delivery' },
    orderSuccess: { tg: 'Фармоиш фиристода шуд!', ru: 'Заказ отправлен!', en: 'Order Sent!' },
  };

  const getItemName = (item: CartItem['item']) => {
    if (currentLang === 'ru') return item.nameRu;
    if (currentLang === 'en') return item.nameEn;
    return item.name;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const itemsList = cart
      .map((c, i) => `${i + 1}. ${getItemName(c.item)} × ${c.quantity} = ${c.item.price * c.quantity} TJS`)
      .join('\n');

    const message = encodeURIComponent(
      `Салом DIDOR Delivery!\nМехоҳам таомҳои зеринро фармоиш диҳам:\n\n${itemsList}\n\n• Ҷамъ: ${totalSum} TJS\n• Муштарӣ: ${userName}\n• Телефон: ${userPhone}\n• Суроға: ${address}`
    );

    window.open(`https://wa.me/992981840404?text=${message}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121214] border-l border-[#D4AF37]/30 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-bold text-lg text-white">{labels.title[currentLang]}</h3>
              <span className="text-xs bg-[#221F17] text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-0.5 rounded-full">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderSent ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">{labels.orderSuccess[currentLang]}</h4>
                <p className="text-xs text-zinc-300 max-w-xs mx-auto">
                  Дархости шумо ба хадамоти доставка фиристода шуд. Ба зудӣ бо шумо дар тамос мешавем!
                </p>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C1C20] border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {RESTAURANT_INFO.phoneDelivery}
                </a>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      onClearCart();
                      setOrderSent(false);
                      onClose();
                    }}
                    className="text-xs text-zinc-500 hover:text-white underline mt-4"
                  >
                    Тоза кардани сабад ва баргаштан
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto" />
                <p className="text-sm text-zinc-400 px-6">{labels.empty[currentLang]}</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-[#1B1B1E] text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30"
                >
                  Интихоби Таомҳо
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-3">
                  {cart.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-[#18181B] p-3 rounded-xl border border-zinc-800"
                    >
                      <img
                        src={item.image}
                        alt={getItemName(item)}
                        className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {getItemName(item)}
                        </h4>
                        <span className="text-xs text-[#D4AF37] font-semibold">
                          {item.price} TJS
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#202025] px-2 py-1 rounded-lg border border-zinc-700">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-3 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery details form */}
                <form id="delivery-form" onSubmit={handleSendWhatsApp} className="pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-amber-200/80 bg-[#1D1A13] p-2.5 rounded-lg border border-[#D4AF37]/20">
                    <Truck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{labels.deliveryNote[currentLang]}</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                      {labels.nameLabel[currentLang]}
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Номи Шумо"
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                      {labels.phoneLabel[currentLang]}
                    </label>
                    <input
                      type="tel"
                      required
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="+992 ..."
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                      {labels.addressLabel[currentLang]}
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Кӯча, хона, ошёна дар Душанбе"
                        className="w-full bg-[#18181B] border border-zinc-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer with totals & action */}
          {cart.length > 0 && !orderSent && (
            <div className="p-5 border-t border-zinc-800 bg-[#0E0E10] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  {labels.subtotal[currentLang]}
                </span>
                <div className="text-2xl font-black text-[#D4AF37]">
                  {totalSum} <span className="text-xs font-semibold text-zinc-400 uppercase">TJS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button
                  type="submit"
                  form="delivery-form"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{labels.orderWhatsapp[currentLang]}</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneDeliveryRaw}`}
                  className="w-full py-2.5 rounded-xl bg-[#18181B] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{labels.orderCall[currentLang]} ({RESTAURANT_INFO.phoneDelivery})</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

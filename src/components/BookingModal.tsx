import React, { useState } from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO, VIP_CABINS } from '../data/restaurantData';
import { Calendar, Users, Clock, Phone, User, CheckCircle2, X, MessageSquare, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'table' | 'vip' | 'banquet';
  currentLang: Language;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'table',
  currentLang,
}) => {
  const [hallType, setHallType] = useState<'table' | 'vip' | 'banquet'>(defaultType);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+992 ');
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [notes, setNotes] = useState('');
  const [selectedVip, setSelectedVip] = useState(VIP_CABINS[0].id);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const labels = {
    title: { tg: 'Брони Миз ё Зали Тӯёна', ru: 'Бронирование Стола или Зала', en: 'Table or Banquet Reservation' },
    sub: {
      tg: 'DIDOR Restaurant — Ошёнаи 1, VIP-кабинкаҳо ва Зали Тӯёнаи ошёнаи 2-юм',
      ru: 'DIDOR Restaurant — 1 этаж, VIP кабинеты и банкетный зал 2 этажа',
      en: 'DIDOR Restaurant — 1st floor dining, VIP suites & 2nd floor Banquet Hall',
    },
    typeLabel: { tg: 'Навъи брон:', ru: 'Тип бронирования:', en: 'Reservation Type:' },
    typeTable: { tg: 'Мизи оддӣ (Ошёнаи 1)', ru: 'Столик (1 этаж)', en: 'Main Dining (1st Fl)' },
    typeVip: { tg: 'VIP-Кабинка', ru: 'VIP-Кабинет', en: 'VIP Suite' },
    typeBanquet: { tg: 'Зали Тӯёна (Ошёнаи 2)', ru: 'Банкетный Зал (2 этаж)', en: 'Banquet Hall (2nd Fl)' },
    namePlaceholder: { tg: 'Ному насаби шумо', ru: 'Ваше имя', en: 'Your Name' },
    phonePlaceholder: { tg: '+992 00 000 0000', ru: '+992 00 000 0000', en: '+992 00 000 0000' },
    guestsLabel: { tg: 'Шумораи меҳмонон', ru: 'Количество гостей', en: 'Number of Guests' },
    dateLabel: { tg: 'Сана', ru: 'Дата', en: 'Date' },
    timeLabel: { tg: 'Вақт', ru: 'Время', en: 'Time' },
    notesLabel: { tg: 'Хоҳишҳои иловагӣ (маросим, ороиш...)', ru: 'Особые пожелания', en: 'Special Requests' },
    submitBtn: { tg: 'Тасдиқи Брон', ru: 'Подтвердить Бронь', en: 'Confirm Reservation' },
    successTitle: { tg: 'Дархост омода аст', ru: 'Заявка подготовлена', en: 'Reservation Ready to Send' },
    successDesc: {
      tg: 'Маълумот омода шуд. Барои фиристодани дархост тугмаи WhatsApp-ро пахш кунед ва дар худи WhatsApp паёмро фиристед. То он вақт брон тасдиқ нашудааст.',
      ru: 'Данные подготовлены. Нажмите кнопку WhatsApp и отправьте сообщение в самом приложении. До этого бронирование не подтверждено.',
      en: 'Your details are ready. Open WhatsApp and press Send there. The reservation is not confirmed until the message is sent and the restaurant confirms it.',
    },
    directCall: {
      tg: 'Ё метавонед ҳоло занг занед:',
      ru: 'Или позвоните прямо сейчас:',
      en: 'Or call directly now:',
    },
    whatsappBtn: {
      tg: 'Фиристодан тавассути WhatsApp',
      ru: 'Отправить в WhatsApp',
      en: 'Send via WhatsApp',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const hallName =
      hallType === 'banquet'
        ? 'Зали Тӯёна (Ошёнаи 2)'
        : hallType === 'vip'
        ? 'VIP-Кабинка'
        : 'Мизи тарабхона (Ошёнаи 1)';
    const selectedCabin = VIP_CABINS.find((c) => c.id === selectedVip)?.name;
    const text = encodeURIComponent(
      `Салом DIDOR Restaurant!\nМехоҳам брон кунам:\n• Навъ: ${hallName}${hallType === 'vip' && selectedCabin ? ` (${selectedCabin})` : ''}\n• Ном: ${name}\n• Телефон: ${phone}\n• Меҳмонон: ${guests} нафар\n• Сана: ${date}\n• Соат: ${time}\n• Эзоҳ: ${notes || 'Нест'}`
    );
    const whatsappUrl = `https://wa.me/992000700088?text=${text}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#121214] border border-[#D4AF37]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 hover:bg-[#D4AF37] text-zinc-300 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>DIDOR RESTAURANT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {labels.title[currentLang]}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                {labels.sub[currentLang]}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Selection Tabs */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  {labels.typeLabel[currentLang]}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'table', label: labels.typeTable[currentLang] },
                    { id: 'vip', label: labels.typeVip[currentLang] },
                    { id: 'banquet', label: labels.typeBanquet[currentLang] },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setHallType(t.id as any)}
                      className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold text-center border transition-all ${
                        hallType === t.id
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8891E] text-black border-transparent shadow-md'
                          : 'bg-[#18181B] text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* If VIP is selected, choose cabin */}
              {hallType === 'vip' && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Интихоби Кабинкаи VIP:
                  </label>
                  <select
                    value={selectedVip}
                    onChange={(e) => setSelectedVip(e.target.value)}
                    className="w-full bg-[#18181B] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    {VIP_CABINS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.capacity})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Номи Шумо *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={labels.namePlaceholder[currentLang]}
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Рақами телефон *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      pattern="\\+?[0-9\\s()-]{9,20}"
                      title="Рақами телефонро дуруст ворид кунед"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={labels.phonePlaceholder[currentLang]}
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Guests, Date, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    {labels.guestsLabel[currentLang]}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      required
                      min={hallType === 'banquet' ? 50 : 1}
                      max={hallType === 'banquet' ? 300 : 30}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-xl pl-9 pr-2 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    {labels.dateLabel[currentLang]}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-xl pl-9 pr-2 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    {labels.timeLabel[currentLang]}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#18181B] border border-zinc-700 rounded-xl pl-9 pr-2 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  {labels.notesLabel[currentLang]}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Масалан: Ҷашни зодрӯз, зарурати гулҳо ё мусиқии зинда..."
                  className="w-full bg-[#18181B] border border-zinc-700 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Direct Booking Phone prompt */}
              <div className="flex items-center justify-between text-xs text-zinc-400 bg-[#161618] p-3 rounded-xl border border-zinc-800">
                <span>Брони мустақим бо телефон:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                  className="text-[#D4AF37] font-bold flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {RESTAURANT_INFO.phoneBooking}
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] hover:brightness-110 shadow-lg transition-all"
              >
                {labels.submitBtn[currentLang]}
              </button>
            </form>
          </div>
        ) : (
          /* Request prepared screen — WhatsApp still requires the user to press Send. */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-[#211E14] border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
              <MessageSquare className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {labels.successTitle[currentLang]}
              </h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                {labels.successDesc[currentLang]}
              </p>
            </div>

            <div className="bg-[#18181B] p-4 rounded-2xl border border-zinc-800 text-left text-xs text-zinc-300 space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-zinc-500">Меҳмон:</span>
                <span className="font-semibold text-white">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Навъ:</span>
                <span className="text-[#D4AF37] font-bold">
                  {hallType === 'banquet' ? 'Зали Тӯёна (Ошёнаи 2)' : hallType === 'vip' ? `VIP-Кабинка${VIP_CABINS.find((c) => c.id === selectedVip)?.name ? ` — ${VIP_CABINS.find((c) => c.id === selectedVip)?.name}` : ''}` : 'Мизи тарабхона'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Сана & Вақт:</span>
                <span className="text-white">{date} соати {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Шумораи меҳмонон:</span>
                <span className="text-white">{guests} нафар</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{labels.whatsappBtn[currentLang]}</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneBookingRaw}`}
                className="px-5 py-3 rounded-xl bg-[#1C1C20] hover:bg-zinc-800 border border-[#D4AF37]/50 text-[#D4AF37] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.phoneBooking}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-zinc-500 hover:text-white underline pt-3"
            >
              Пӯшидан
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

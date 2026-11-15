export type Language = 'tg' | 'ru' | 'en';

export interface MenuItem {
  id: string;
  name: string;
  nameRu: string;
  nameEn: string;
  description: string;
  descriptionRu: string;
  descriptionEn: string;
  price: number; // in TJS (Somoni)
  category: 'grill' | 'national' | 'salads' | 'banquet' | 'drinks';
  image: string;
  weight?: string;
  badge?: string;
  badgeRu?: string;
  badgeEn?: string;
  isChefSpecial?: boolean;
  calories?: string;
  spicy?: boolean;
}

export interface VipCabin {
  id: string;
  name: string;
  nameRu: string;
  nameEn: string;
  capacity: string;
  features: string[];
  featuresRu: string[];
  featuresEn: string[];
  image: string;
  description: string;
  descriptionRu: string;
  descriptionEn: string;
}

export interface ReservationData {
  hallType: 'table' | 'vip' | 'banquet';
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  vipCabinId?: string;
  notes?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

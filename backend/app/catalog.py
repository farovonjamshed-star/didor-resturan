from sqlalchemy import select
from sqlalchemy.orm import Session

from .models import MenuItem


MENU_CATALOG = [
    {"id": "m1", "name": "Кабоби Шоҳонаи DIDOR", "name_ru": "Шашлык по-царски DIDOR", "name_en": "DIDOR Royal Mixed Kebab Platter", "price": 185},
    {"id": "m2", "name": "Қабурғаи Барра дар Оташ (Корейка)", "name_ru": "Каре ягненка на углях", "name_en": "Charcoal-Grilled Lamb Chops", "price": 95},
    {"id": "m3", "name": "Лула-Кабоби Асил бо Панир", "name_ru": "Люля-кебаб с сулугуни", "name_en": "Lula Kebab with Melted Cheese", "price": 52},
    {"id": "m4", "name": "Шашлики Мурғи Маринадшуда", "name_ru": "Шашлык из куриного филе", "name_en": "Tender Marinated Chicken Shashlik", "price": 45},
    {"id": "m5", "name": "Оши Палави Шоҳонаи Тӯёна", "name_ru": "Праздничный свадебный плов", "name_en": "Royal Wedding Plov (Oshi Palav)", "price": 68},
    {"id": "m6", "name": "Шӯрбои Кӯҳии Хонагӣ", "name_ru": "Наваристая горная шурпа", "name_en": "Rich Mountain Lamb Shurbo", "price": 48},
    {"id": "m7", "name": "Манту бо Гӯшти Буридашуда (5 дона)", "name_ru": "Манты с рубленым мясом (5 шт)", "name_en": "Handmade Steamed Mantu (5 pcs)", "price": 46},
    {"id": "m8", "name": "Қурутоби Хонагӣ бо Фатири Варақин", "name_ru": "Курутоб праздничный с фатиром", "name_en": "Traditional Royal Qurutob", "price": 42},
    {"id": "m9", "name": "Салати Фирмавии DIDOR", "name_ru": "Фирменный салат DIDOR", "name_en": "Signature DIDOR Warm Salad", "price": 58},
    {"id": "m10", "name": "Аччиқ-Чучук бо Помидори Ширин", "name_ru": "Ачик-чучук с южными томатами", "name_en": "Crisp Achichuk Tomato & Onion Salad", "price": 25},
    {"id": "m11", "name": "Дастархони Тӯёнаи Шоҳона (барои 10 нафар)", "name_ru": "Свадебный праздничный сет (на 10 персон)", "name_en": "Grand Banquet Table Feast (for 10 guests)", "price": 1350},
    {"id": "m12", "name": "Салмон дар Тафдон бо Сабзавот", "name_ru": "Лосось запеченный с овощами", "name_en": "Baked Royal Salmon with Asparagus", "price": 110},
    {"id": "m13", "name": "Чойи Шоҳона бо Ҳил ва Заъфарон", "name_ru": "Шафранно-кардамоновый чайный набор", "name_en": "Royal Saffron & Cardamom Tea Set", "price": 32},
    {"id": "m14", "name": "Шарбати Табиии Анор ва Тарбуз", "name_ru": "Свежевыжатый гранатовый сок", "name_en": "Fresh Pressed Mountain Pomegranate", "price": 35},
]


def seed_menu(db: Session) -> None:
    for item in MENU_CATALOG:
        existing = db.get(MenuItem, item["id"])
        if existing is None:
            db.add(MenuItem(**item))
        else:
            for key, value in item.items():
                setattr(existing, key, value)
    db.commit()


def get_menu(db: Session):
    return db.scalars(select(MenuItem).order_by(MenuItem.id)).all()

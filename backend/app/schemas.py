import re
from datetime import date, time
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator


PHONE_PATTERN = re.compile(r"^\+?[0-9\s()\-]{9,20}$")


class ReservationCreate(BaseModel):
    hall_type: Literal["table", "vip", "banquet"]
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=9, max_length=20)
    guests: int = Field(ge=1, le=300)
    date: date
    time: time
    vip_cabin_id: str | None = Field(default=None, max_length=32)
    notes: str | None = Field(default=None, max_length=1000)

    @field_validator("name")
    @classmethod
    def clean_name(cls, value: str) -> str:
        value = " ".join(value.split())
        if len(value) < 2:
            raise ValueError("Name must contain at least 2 characters")
        return value

    @field_validator("phone")
    @classmethod
    def valid_phone(cls, value: str) -> str:
        value = value.strip()
        if not PHONE_PATTERN.fullmatch(value):
            raise ValueError("Enter a valid phone number")
        return value

    @field_validator("date")
    @classmethod
    def date_not_in_past(cls, value: date) -> date:
        if value < date.today():
            raise ValueError("Reservation date cannot be in the past")
        return value

    @model_validator(mode="after")
    def validate_vip(self):
        if self.hall_type == "vip" and not self.vip_cabin_id:
            raise ValueError("Choose a VIP cabin")
        if self.hall_type == "vip" and self.vip_cabin_id not in {"vip-1", "vip-2", "vip-3"}:
            raise ValueError("Unknown VIP cabin")
        if self.hall_type != "vip" and self.vip_cabin_id:
            raise ValueError("VIP cabin is only valid for VIP reservations")
        if self.hall_type == "banquet" and self.guests < 50:
            raise ValueError("Banquet reservations require at least 50 guests")
        return self


class OrderLineCreate(BaseModel):
    menu_item_id: str = Field(min_length=1, max_length=32)
    quantity: int = Field(ge=1, le=20)


class OrderCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=9, max_length=20)
    address: str = Field(min_length=5, max_length=300)
    items: list[OrderLineCreate] = Field(min_length=1, max_length=50)

    @field_validator("name")
    @classmethod
    def clean_name(cls, value: str) -> str:
        return " ".join(value.split())

    @field_validator("phone")
    @classmethod
    def valid_phone(cls, value: str) -> str:
        value = value.strip()
        if not PHONE_PATTERN.fullmatch(value):
            raise ValueError("Enter a valid phone number")
        return value

    @field_validator("address")
    @classmethod
    def clean_address(cls, value: str) -> str:
        value = " ".join(value.split())
        if len(value) < 5:
            raise ValueError("Address is too short")
        return value

    @model_validator(mode="after")
    def unique_items(self):
        ids = [item.menu_item_id for item in self.items]
        if len(ids) != len(set(ids)):
            raise ValueError("Each menu item must appear only once")
        return self


class ReservationCreated(BaseModel):
    id: int
    status: str
    message: str


class OrderCreated(BaseModel):
    id: int
    status: str
    total_amount: int
    message: str


class MenuItemOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    name: str
    name_ru: str
    name_en: str
    price: int

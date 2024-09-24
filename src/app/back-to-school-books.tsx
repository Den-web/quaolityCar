"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const BOOKS = [
  {
    img: `/image/books/4car.png`,
    category: "Підбір під ключ",
    title: "Підбір під ключ Фірмовий",
    desc: "До цієї послуги включено: До 6 переглядів автомобілів наданих у продажу в нашому регіоні",
    price: "від 450euro",
    // offPrice: "$79",
  },
  {
    img: `/image/books/3car.png`,
    category: "Підбір під ключ",
    title: "Підбір під ключ Базовий",
    desc: "До цієї послуги включено: Супровід і консультації нашого експерта та онлайн підтримка у мессенджерах",
    price: "від 450euro",
    // offPrice: "$79",
  },
  {
    img: `/image/books/2car.png`,
    category: "Разовий огляд",
    title: "Разовий огляд автомобіля",
    desc: "Ця послуга включає дослідження обраного Вами автомобіля перед покупкою.",
    price: "від 100 - 150euro.",
    // offPrice: "$79",
  },
  {
    img: `/image/books/1car.png`,
    category: "Оцінка авто",
    title: "Оцінка авто перед продажем",
    desc: "Оцінка стану автомобіля (Не формування його вартості)",
    price: "50euro",
    // offPrice: "$79",
  },
];

const BOOKS_TABS = [
  "history",
  "law",
  "math",
  "economy",
  "business",
  "communication",
];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("history");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          variant="h1"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Послуги якi ми надаемо
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Ми пропонуємо широкий вибір посібників по автомобілях, 
          аналітичних звітів ринку та інструментів порівняння. 
          Чи досліджуєте ви паливну ефективність, чи оцінюєте розкішні функції, 
          у нас є всі ресурси, які вам знадобляться.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-2 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      {/* <div className="grid place-items-center">
        <Button 
          className="mt-32"
          variant="outlined"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Show more
        </Button>
      </div> */}
    </section>
  );
}


export default BackToSchoolBooks;
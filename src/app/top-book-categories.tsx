"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Індивідуальний Підхід",
    desc: "При виборі автомобіля ми враховуємо різноманітні фактори, такі як комплектація, колір і технічні характеристики. Ваші побажання та вимоги є нашим пріоритетом у знаходженні ідеального варіанту.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Довіра та Відповідальність",
    desc: "Нам довіряють тисячі клієнтів, і ми прагнемо підтримувати найвищі стандарти професіоналізму та якості обслуговування. Ваше задоволення — наш головний стимул.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Тільки Кращі Авто",
    desc: "Наше завдання — знайти не найдешевший, а найкращий варіант, який відповідає вашим вимогам на момент підбору.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Персоналізовані Рішення",
    desc: "Ми поєднуємо індивідуальний підхід, зобов'язання до високих стандартів і орієнтацію на якість, щоб ви отримали найкращий автомобіль, який відповідає вашим потребам. Насолоджуйтеся безперебійним і надійним процесом вибору авто з нами.",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography
          variant="h2" 
          color="blue-gray" 
          className="my-3"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Про сферу автопідбору
        </Typography>
        <Typography 
          variant="lead" 
          className="!text-gray-500 lg:w-6/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          >
          Умови пiдбору та ключовi аспекти
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody 
            className="relative w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >

            <Typography 
              variant="h4" 
              className="mt-9"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Автомобілі, що Найкраще Продаються 
            </Typography>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Ознайомтеся з нашим детальним оглядом автомобілів, що користуються 
              найбільшим попитом, від ефективних міських моделей до розкішних позашляховиків. 
              Ми надаємо інформацію про авто, що відповідають різним стилям життя та потребам.
            </Typography>
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size="sm" color="white">
              Скоро
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;

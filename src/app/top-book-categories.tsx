"use client";

import React from "react";
import CategoryCard from "@/components/category-card";
import ModalInfo from "@/components/modal-info";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  // {
  //   img: "/image/blogs/blog-3.png",
  //   icon: HeartIcon,
  //   title: "Індивідуальний Підхід",
  //   desc: "При виборі автомобіля ми враховуємо різноманітні фактори, такі як комплектація, колір і технічні характеристики. Ваші побажання та вимоги є нашим пріоритетом у знаходженні ідеального варіанту.",
  // },
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "1. Як це працює",
    desc: "Спочатку ми узгоджуємо бюджет покупки і ключові параметри авто (тип кузова, двигуна, коробки передач, бажані бренди та інші характеристики). Потім наш експерт з автопідбору допомагає вам в режимі онлайн обрати автомобілі, що відповідають вашим критеріям на популярних майданчиках автопродажу.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "2. Довіра та Відповідальність",
    desc: "Після оцінки переваг та недоліків ми відбираємо найбільш варті уваги автомобілі для подальшого огляду. Далі, наш експерт проводить огляд автомобілів на місці, бажано за вашої присутності, щоб ви змогли оцінити авто особисто. На кожен оглянутий автомобіль надаються детальний письмовий звіт з загальним технічним станом.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "3. Тільки Кращі Авто",
    desc: "Після огляду ми порівнюємо варіанти на основі технічного стану, вартості, та інших ключових факторів, щоб обрати найкращий варіант.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "4. Персоналізовані Рішення",
    desc: "Ми працюємо з вживаними автомобілями, тому стан кузова, салону, технічних вузлів може мати певні недоліки, типові для автомобілів з пробігом. Ми прагнемо знайти для вас оптимальний варіант, але варто розуміти, що ідеальних авто у цій категорії не буває.",
  },
];

export function TopBookCategories() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <section id="careers" className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
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
              Під ключ 
            </Typography>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              color="white"
              className="mt-4 mb-14 align-left font-normal opacity-50"
            >
              до 10000 - 450€;<br/>
              від 10000 до 15000 - 550€;<br/>
              від 15000 до 20000 - 650€;<br/>
              від 20000 - індивідуально.<br/>
              Важливо! При пошуку автомобіля необхідно розраховувати на вартість вищу від середньої ринкової, в цьому діапазоні є шанси підібрати хороший варіант.
            </Typography>
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size="sm" color="white"
              onClick={handleOpen}>
              Деталi підбору
            </Button>
            <ModalInfo open={open} handleOpen={handleOpen} setOpen={setOpen}></ModalInfo>
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

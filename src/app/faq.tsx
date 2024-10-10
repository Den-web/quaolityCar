"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "1. Що таке комплексний підбір автомобіля «Базовий»?",
    desc: "Ця послуга передбачає пошук автомобіля в рамках визначеного бюджету відповідно до ваших вимог і побажань.",
  },
  {
    title: "2. Як працює послуга автопідбору?",
    desc: "Спочатку ми узгоджуємо бюджет покупки і ключові параметри авто (тип кузова, двигуна, коробки передач, бажані бренди та інші характеристики). Потім наш експерт з автопідбору допомагає вам в режимі онлайн обрати автомобілі, що відповідають вашим критеріям на популярних майданчиках автопродажу.",
  },
  {
    title: "3. Що відбувається після вибору автомобіля?",
    desc: "Після оцінки переваг та недоліків різних варіантів ми відбираємо найбільш варті уваги автомобілі для подальшого огляду. Наш експерт проводить огляд автомобілів на місці, бажано за вашої присутності. Надаються фото/відео матеріали та детальний письмовий звіт про стан автомобіля.",
  },
  {
    title: "4. Як вибирається остаточний варіант автомобіля?",
    desc: "Після огляду ми порівнюємо варіанти на основі технічного стану, вартості, та інших ключових факторів, щоб обрати найкращий варіант.",
  },
  {
    title: "5. Чи є недоліки у вживаних автомобілів?",
    desc: "Ми працюємо з вживаними автомобілями, тому стан кузова, салону, технічних вузлів може мати певні недоліки, типові для автомобілів з пробігом. Зазвичай, після покупки рекомендується провести технічне обслуговування: заміну технічних рідин, витратних матеріалів, ременів ГРМ тощо. Витрати на це можуть стартувати від 300 доларів і більше, залежно від класу автомобіля.",
  },
  {
    title: "6. Що входить у послугу автопідбору?",
    desc: "Послуга включає: консультації та підтримку експерта онлайн, до 6 фізичних оглядів автомобілів, огляд кузова та агрегатів, перевірку на наявність кузовного ремонту чи фарбування, діагностику ЕБУ, тест-драйв, фото/відео звіти, перевірку автомобіля на СТО, супровід під час купівлі та перереєстрації автомобіля.",
  },
  {
    title: "7. Скільки фізичних оглядів автомобілів входить в послугу?",
    desc: "Послуга включає до 6 фізичних оглядів автомобілів. Виїзди за межі Києва враховують дворазовий огляд.",
  },
  {
    title: "8. Які огляди та перевірки проводяться на автомобілі?",
    desc: "Ми проводимо зовнішній огляд кузова та агрегатів, перевіряємо на наявність кузовного ремонту чи фарбування, і діагностуємо ЕБУ за допомогою спеціального обладнання.",
  },
  {
    title: "9. Чи проводиться тест-драйв обраних автомобілів?",
    desc: "Так, ми обов’язково проводимо тест-драйв кожного автомобіля, що відповідає вашим критеріям.",
  },
  {
    title: "10. Чи надається звіт по результатах огляду автомобіля?",
    desc: "Так, після кожного огляду ми надаємо фото/відео звіт і рекомендації в месенджерах по завершенню робіт із конкретним автомобілем.",
  },
];


export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section id="faq" className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography 
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Часті запитання
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Кампанія «Пошук автомобіля» — спрямована на те, щоб якомога 
            легше знайти ваш новий автомобіль для покупки.
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <AccordionHeader className="text-left text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;

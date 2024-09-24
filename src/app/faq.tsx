"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "Коли починається і закінчується кампанія «Автопідбір»?",
    desc: "Наша кампанія з автопідбору працює цілий рік, щоб допомогти вам знайти ідеальний автомобіль у будь-який час. Ми надаємо акційні пропозиції на послуги періодично, тому слідкуйте за нашими оновленнями на веб-сайті.",
  },
  {
    title: "Які автомобілі ви можете допомогти підібрати?",
    desc: "Ми пропонуємо підбір різних типів автомобілів: від економічних міських авто до розкішних позашляховиків. Наші експерти допоможуть вам знайти автомобіль, що відповідатиме вашим потребам і бюджету.",
  },
  {
    title: "Чи є у вас знижки на послуги автопідбору?",
    desc: "Так, ми періодично пропонуємо знижки на наші послуги автопідбору. Радимо перевіряти наш сайт або підписатися на розсилку, щоб не пропустити спеціальні пропозиції.",
  },
  {
    title: "Чи можу я отримати консультацію онлайн?",
    desc: "Так, ми пропонуємо онлайн-консультації та підтримку через месенджери. Наші експерти готові допомогти вам на кожному етапі вибору автомобіля.",
  },
  {
    title: "Що робити, якщо не знайду потрібний автомобіль?",
    desc: "Якщо ви не можете знайти автомобіль, що відповідає вашим критеріям, наші експерти будуть продовжувати пошук та інформуватимуть вас про нові варіанти, які з'являються на ринку.",
  },
];


export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
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

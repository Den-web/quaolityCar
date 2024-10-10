"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: BanknotesIcon,
    title: "Зберегти грощi",
    description:
      "Спiвпраця з нами збереже ваш бюджет шляхом торгу з продавцем окупить вартiсть послуги пiдбору",
  },
  {
    icon: LifebuoyIcon,
    title: "Пiдтримка 24/7",
    description:
      "З нами ви зможете отримати допомогу та консультацii по подальшому обслуговуванню авто.",
  },
  {
    icon: TruckIcon,
    title: "Зручні покупки, швидка доставка",
    description:
      "З нами ваи зможете зберегти час та грошi при пошуку авто в також дicтатися до авто в швидкi строки",
  },
];

export function GetYourBookFromUs() {
  return (
    <section id="pricing" className="px-8">
      <div className="container mx-auto mb-16 text-center">
        Замовляйте послугу пiдбору та знайдiть свое авто з нами! 
        З нами ви отримаете переваги для себе такі як
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-3 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;

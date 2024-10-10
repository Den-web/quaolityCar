"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

import { GoogleAnalytics } from "nextjs-google-analytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function Hero() {
  return (
    <section id="aboutus">
      <GoogleAnalytics trackPageViews gaMeasurementId={GA_MEASUREMENT_ID} />
      <header className="mt-12 bg-white px-8">
        <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto lg:-mt-40">
            <Typography
              variant="h2"
              color="red"
              className="text-3xl !leading-snug"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Найкраща пропозиція
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Автопiдбір
            </Typography>
            <Typography
              variant="lead"
              className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Послуги з підбору транспортного засобу передбачають оцінку стану автомобіля, 
              що забезпечує безпечну та прозору покупку. Наша команда експертів порекомендує 
              найкращі варіанти з ринку з урахуванням ваших критеріїв вибору та бюджету.
              </Typography>
            <Button 
              size="lg" color="gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              see offers
            </Button>
          </div>
          <div className="mt-40 grid gap-6 lg:mt-0">
            <div className="grid grid-cols-4 gap-6">
              <Image
                width={768}
                height={768}
                src="/image/books/1.png"
                className="rounded-lg shadow-md"
                alt="flowers"
              />
              <Image
                width={768}
                height={768}
                src="/image/books/2.png"
                className="-mt-28 rounded-lg shadow-md"
                alt="flowers"
              />
              <Image
                width={768}
                height={768}
                src="/image/books/3.png"
                className="-mt-14 rounded-lg shadow-md"
                alt="flowers"
              />
              <Image
                width={768}
                height={768}
                src="/image/books/4.png"
                className="-mt-20 rounded-lg shadow-md"
                alt="flowers"
              />
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div></div>
              <Image
                width={768}
                height={768}
                src="/image/books/5.png"
                className="-mt-28 rounded-lg shadow-md"
                alt="flowers"
              />
              <Image
                width={768}
                height={768}
                src="/image/books/6.png"
                className="-mt-14 rounded-lg shadow-md"
                alt="flowers"
              />
              <Image
                width={768}
                height={768}
                src="/image/books/7.png"
                className="-mt-20 rounded-lg shadow-md"
                alt="flowers"
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
export default Hero;

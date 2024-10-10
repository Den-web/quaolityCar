import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
// const SUB_LINKS = ["Claim", "Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

function redirectToTelegram() {
  window.open('https://t.me/YourBotUsername', '_blank'); // Replace with your bot or group link
}

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h4"
              className="mb-6"
            >
              Quality Car
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => {
                const linkId = link.toLowerCase().replace(/\s+/g, ""); // Example: "About Us" -> "aboutus"
                return (
                  <li key={link}>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      as="a"
                      href={`#${linkId}`} // Generates href="#about", "#services", etc.
                      className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 ${
                        idx === 0 ? "pr-3" : "px-3"
                      }`}
                    >
                      {link}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
            <Typography 
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h6" color="blue-gray" className="mb-3">
              Our Newsletter
            </Typography>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" />
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={redirectToTelegram}
                color="gray" className="flex-shrink-0">
                замовити
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
           className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made {" "}for QuolityCar.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

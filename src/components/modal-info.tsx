import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface ModalInfoProps {
  open: boolean | undefined;
  setOpen: (open: boolean) => void;
  handleOpen: () => void;
}

function redirectToTelegram() {
  window.open('https://t.me/YourBotUsername', '_blank'); // Replace with your bot or group link
}

const CarSelectionService = () => {
  return (
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;Ця послуга передбачає пошук автомобіля в рамках визначеного бюджету
        відповідно до ваших вимог і побажань.
      </p>

      <h3>Як це працює:</h3>
      <p>
        &nbsp;&nbsp;&nbsp;Спочатку ми узгоджуємо бюджет покупки і ключові параметри авто (тип кузова,
        двигуна, коробки передач, бажані бренди та інші характеристики). Потім наш
        експерт з автопідбору допомагає вам в режимі онлайн обрати автомобілі, що
        відповідають вашим критеріям на популярних майданчиках автопродажу.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;Після оцінки переваг та недоліків різних варіантів ми відбираємо найбільш
        варті уваги автомобілі для подальшого огляду.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;Далі, наш експерт проводить огляд автомобілів на місці, бажано за вашої
        присутності, щоб ви змогли оцінити авто особисто. На кожен оглянутий
        автомобіль надаються фото/відео матеріали та детальний письмовий звіт, в
        якому описується загальний технічний стан транспортного засобу.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;Після огляду ми порівнюємо варіанти на основі технічного стану, вартості,
        та інших ключових факторів, щоб обрати найкращий варіант.
      </p>

      <h3>Зверніть увагу:</h3>
      <p>
        &nbsp;&nbsp;&nbsp;Ми працюємо з вживаними автомобілями, тому стан кузова, салону, технічних
        вузлів може мати певні недоліки, типові для автомобілів з пробігом. Ми
        прагнемо знайти для вас оптимальний варіант, але варто розуміти, що
        ідеальних авто у цій категорії не буває. Зазвичай, після покупки
        рекомендується провести технічне обслуговування: заміну технічних рідин,
        витратних матеріалів, ременів ГРМ тощо. Витрати на це можуть стартувати від
        300 доларів і більше, залежно від класу автомобіля.
      </p>

      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Що входить в послугу:</h3>
      <ul>
        <li>&nbsp; - Консультації та підтримка нашого експерта онлайн.</li>
        <li>&nbsp; - До 6 фізичних оглядів автомобілів (виїзди за межі міста враховують дворазовий огляд).</li>
        <li>&nbsp; - Огляд кузова та агрегатів.</li>
        <li>&nbsp; - Перевірка на наявність кузовного ремонту чи фарбування.</li>
        <li>&nbsp; - Діагностика ЕБУ за допомогою спеціального обладнання.</li>
        <li>&nbsp; - Тест-драйв.</li>
        <li>&nbsp; - Надання фото/відео звіту та рекомендацій по кожному оглянутому автомобілю.</li>
        <li>
        &nbsp; - Повна перевірка автомобіля на СТО для виявлення можливих технічних
          проблем.
        </li>
        <li>&nbsp; - Супровід під час укладання договору купівлі та перереєстрації автомобіля.</li>
      </ul>
    </div>
  );
};
 
const ModalInfo: React.FC<ModalInfoProps> = ({open = false, setOpen, handleOpen}) => {

  const handleCloseAndRedirectToTelegram = () => {
    handleOpen(),
    redirectToTelegram()
  }
 
  return (
    <>
      <Dialog size={"xxl"} style={{width: '100%!important'}} open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Підбір під ключ</DialogHeader>
        <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CarSelectionService />
        </DialogBody>
        <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Закрити</span>
          </Button>
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={handleCloseAndRedirectToTelegram}
            color="blue"
          >
            Замовити
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ModalInfo;
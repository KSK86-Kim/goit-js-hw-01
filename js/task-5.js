const country = prompt("Введите название страны.");
const USER_CANCEL = "Отменено пользователем!";
const UNAVAILABLE = "В Вашей стране доставка недоступна!";
const CHINA = "китай";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";
const CHILIE = "чили";
let message;
let price;

if (country !== null) {
  switch (country.toLowerCase()) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    case CHILIE:
      price = 250;
      break;
    default:
      price = null;
  }
  if (price !== null) {
    console.log(`Доставка ${country} в будет стоить ${price} кредитов.`);
  } else {
    alert(UNAVAILABLE);
  }
} else {
  console.log(USER_CANCEL);
}

const credits = 23580;
const pricePerDroid = 3000;
const USER_CANCEL = "Отменено пользователем!";
const USER_BEGGAR = "Недостаточно средств на счету!";

let message;
let totalPrice;

let droidQuantity = prompt("Какое количество дроидов желаете приобрести?");

if (droidQuantity === null) {
  message = USER_CANCEL;
} else {
  totalPrice = droidQuantity * pricePerDroid;
  if (totalPrice <= credits) {
    let remain = credits - totalPrice;
    message = `Вы купили ${droidQuantity} дроидов, на счету осталось ${remain} кредитов.`;
  } else {
    message = USER_BEGGAR;
  }
}

console.log(message);

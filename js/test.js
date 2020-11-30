// // ---------------

// const z = 5;
// const x = "5";
// const c = true;
// console.log(z, x, c);

// const type_1 = typeof z;
// const type_2 = typeof x;
// const type_3 = typeof c;
// console.log(type_1, type_2, type_3);

// console.log(typeof z, x, c);

// console.log(typeof z);
// console.log(typeof x);
// console.log(typeof c);

// console.log("Привет, тебя нужна станция", z);
// alert("Cпасите! Меня держат в заложниках JS");

// console.log("--------------");

// // ! ----- !
// const saveMe = confirm("Спасти не уча?"); // Получение результата пользователя True или false
// // alert(saveMe);

// console.log(saveMe);
// const userInput = prompt("Что до этого Вам нужно?");
// console.log(userInput);
// console.log(typeof userInput);

// let userInput_2 = prompt("В каком количестве?");
// userInput_2 = Number(userInput_2);
// console.log(userInput_2);
// console.log(typeof userInput_2);

// // ---------------------

// let value = "123";
// console.log(value);
// console.log(typeof value);

// let number = Number(value);
// console.log(number);
// console.log(typeof number);

// // --------------------

// value = "123asd";
// console.log(value);
// console.log(typeof value);

// number = Number(value);
// console.log(number);
// console.log(typeof number);

// let blockWidth = "999px";
// console.log(blockWidth);
// let widht = Number.parseInt(blockWidth);
// console.log(widht, "Отбрасываю лишние слова/буква оставляю только цифры");

// blockWidth = "px999";
// console.log(blockWidth);
// widht = Number.parseInt(blockWidth);
// console.log(widht);

// blockWidth = "999.9px";
// console.log(blockWidth);
// widht = Number.parseInt(blockWidth);
// console.log(widht, "parseInt");

// blockWidth = "999.9px";
// console.log(blockWidth);
// widht = Number.parseFloat(blockWidth);
// console.log(widht, "parseFloat");

// -------------------------

const firstName = "Kim";
const lastName = "Kamak";
const room = 999;
const type = "VIP";

const fullName = firstName + " " + lastName;
console.log(fullName);

console.log(
  "Гость" +
    " " +
    fullName +
    " " +
    "заселился в" +
    " " +
    type +
    " " +
    "номер" +
    " " +
    room
);

console.log(firstName + " " + lastName);

const message = `Гость ${
  firstName + lastName
} ${lastName} заселился в ${type} номер ${room}`;
console.log(message);
console.log(message.length);

// -------------------------

console.log(5 + "5");
console.log(5 + "5" + 5);
console.log(5 + 5 + "5");

// за чего?
console.log(5 + 5 - "5");

console.log(5 + 5 * "5");
console.log(5 + 5 / "5");

// // -------------------------

const userPassword = "qwerty123";

const userInput_3 = prompt("Введите пароль");
console.log(userInput_3);

const normalizedInput = userInput_3.toLowerCase();
console.log(normalizedInput);
console.log(userPassword === normalizedInput);

// -------------------------

console.log(10 && false);

// Логическое && || !
let number = 80;

let isInRange = number > 10 && number <= 20;

console.log(
  `Число ${number} входит в диапазон от 10 до 20 включительно, ${isInRange}`
);

isInRange = number < 20 || number > 60;
console.log(isInRange);
console.log(0 || false || null);
console.log(0 || true || null);
console.log(8 || false || null);

const isFriend = true;
const isOwe = true;
const isFree = true;
const isOver = false;

const helpMe = (isFriend && isFree) || (isOwe && !isOver);
console.log(helpMe);

const subscription = "VIP";
const canAccessContent = subscription === "VIP" || subscription === "pro";

console.log(canAccessContent);

// ------------------------  -

let balance = 1000;
const payment = 500;

console.log(`Стоимость заказа ${payment}. Проверяем текущий баланс`);
console.log(balance);
if (balance >= payment) {
  balance -= payment;
  console.log("Всё Окей! Снимаем деньги");
  console.log(`Текущий баланс ${balance}`);
} else {
  console.log(
    `Недостаточно средств, пожалуйста пополните Ваш баланс на: ${
      payment - balance
    } грн.`
  );
}

// start-server

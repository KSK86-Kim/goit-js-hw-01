const ADMIN_PASSWORD = "jqueryismyjam";
const USER_CANCEL = "Отменено пользователем!";
const WELCOME = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещён, неверный пароль!";
let message;

message = prompt("Введите пароль.");

switch (message) {
  case null:
    message = USER_CANCEL;
    break;

  case ADMIN_PASSWORD:
    message = WELCOME;
    break;

  default:
    message = ACCESS_DENIED;
}

alert(message);


// Коллекция ключей и значений в формате:
// " #Класс кнопки закрытия# ": " #Класс модального окна, которое закрывает# "

let closeOptions = new Map([
  ['.close_action_menu', '.modal-menu'],
  ['.close_action_order', '.modal-order'],
])

window.addEventListener('load', () => {

  for (closeOption of closeOptions) {

    let modalClass = closeOption[1];
    document.querySelector(closeOption[0]).addEventListener('click', function () {

      this.closest(modalClass).close();
    });
  }
});
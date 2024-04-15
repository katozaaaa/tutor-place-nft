let burgerOptions = {

  burgerClass: '.burger_action_menu',
  burgerCall: '.modal-menu',
}

window.addEventListener('load', () => {

  document.querySelectorAll(burgerOptions.burgerClass).forEach((burger) => {

    burger.addEventListener('click', () => {

      document.querySelector(burgerOptions.burgerCall).showModal();
    });
  });
});
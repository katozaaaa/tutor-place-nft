let buttonOptions = {

  orderButtonClass: '.button_action_order',
  orderButtonCall: '.modal-order',
}

window.addEventListener('load', () => {

  document.querySelectorAll(buttonOptions.orderButtonClass).forEach((orderButton) => {

    orderButton.addEventListener('click', () => {

      document.querySelector(buttonOptions.orderButtonCall).showModal();
    });
  });
});
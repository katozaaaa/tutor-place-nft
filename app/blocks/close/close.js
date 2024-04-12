let closeOptions = {

  orderCloseClass: '.close_action_order',
  orderCloseCall: '.modal-order',
}

window.addEventListener('load', () => {

  document.querySelector(closeOptions.orderCloseClass).addEventListener('click', function () {

    this.closest(closeOptions.orderCloseCall).close();
  });
});
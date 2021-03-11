// mostrare / nascondere il menu principale

var buttonMobile = $(".header-right > a");
var menuMobile = $(".hamburger-menu");
var visible = false;

// metodo non funzionante
// buttonMobile.click(
//   function () {
//     menuMobile.addClass(".hamburger-menu.active");
//   }
// );

buttonMobile.click(
  function () {
    menuMobile.show("fast");
  }
);

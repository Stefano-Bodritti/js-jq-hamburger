// mostrare / nascondere il menu principale

var buttonMobile = $(".header-right > a");
var menuMobile = $(".hamburger-menu");
var visible = false;
var cross = $(".close");

// metodo non funzionante
// buttonMobile.click(
//   function () {
//     menuMobile.addClass(".hamburger-menu.active");
//   }
// );

// Metodo 1
// buttonMobile.click(
//   function () {
//     menuMobile.show("fast");
//   }
// );
// cross.click(
//   function () {
//     menuMobile.hide("fast");
//   }
// );

// Metodo 2
buttonMobile.click(
  function () {
    menuMobile.fadeIn("slow");
  }
);
cross.click(
  function () {
    menuMobile.fadeOut("slow");
  }
);

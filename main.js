// mostrare / nascondere il menu principale

var buttonMobile = $(".header-right > a");
var menuMobile = $(".hamburger-menu");
var cross = $(".close");

// Metodo 0 ora funzionante
buttonMobile.click(
  function () {
    menuMobile.addClass("active");
  }
);
cross.click(
  function () {
    menuMobile.removeClass("active");
  }
);

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
// buttonMobile.click(
//   function () {
//     menuMobile.fadeIn("slow");
//   }
// );
// cross.click(
//   function () {
//     menuMobile.fadeOut("slow");
//   }
// );

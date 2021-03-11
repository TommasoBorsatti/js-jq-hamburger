
var openButton = $(".header-right > a");
var closeButton = $(".hamburger-menu > a");
var hamburgerMenu = $(".hamburger-menu");


openButton.click(
  function(){
    hamburgerMenu.fadeIn(200);
  }
);

closeButton.click(
  function(){
    hamburgerMenu.fadeOut(200);
  }
);

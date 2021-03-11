
/*Sono stati creati due eventi: uno per il click del bottone hamburger (che apre il menu) e uno per il click del bottone a croce (che chiude il menu).
Al loro click, ho impostato un fade-in e un fade-out a 200 ms.
Per selezionare i bottoni nell html ho usato il selettore > visto che erano gli unici link figli diretti (non contenuti in una <ul>) de rispettivi menu.*/


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

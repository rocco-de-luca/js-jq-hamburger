//jquery lezione 1

//referenze
var hamburgerIcon = $('.header-right > a');
var closeIcon = $('.hamburger-menu .close');
var menu = $('.hamburger-menu');

//mostrare il menu
$(document).ready(function(){
hamburgerIcon.click(function(){
menu.addClass('.active');// addClass() aggiunge una classe
});
//nascondere menu
closeIcon.click(function(){
    menu.removeClass(".active") // removeClass() rimuovere una classe
});
});
     

    





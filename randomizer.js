function randomColor(){
 r = Math.floor(Math.random() * (56) + 180);
 g = Math.floor(Math.random() * (56) + 180);
 b = Math.floor(Math.random() * (56) + 180);
 jQuery('body').css('background-color','rgb('+r+','+g+','+b+')');
}

jQuery(document).ready(function(){
 randomColor();
 var t = setInterval(randomColor,6000);
});
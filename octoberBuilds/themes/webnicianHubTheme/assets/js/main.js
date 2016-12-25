/**
 * Created by Olaf Broms on 12/17/2016.
 */



$( document ).ready(function() {

$('#mobileMenu').click(function(){
    $('#mobileMenu').addClass('collapse');
    $('#mobileMenuContent').removeClass('collapse');
});
$('#mobileMenuContent').click(function(){
    $('#mobileMenu').removeClass('collapse');
    $('#mobileMenuContent').addClass('collapse');
});



});



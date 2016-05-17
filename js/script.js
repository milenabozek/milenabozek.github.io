
// Scroll
$(document).ready(function () {
// Add classe Contato //
$( "ul.menu-desktop li a" ).last().addClass( "scroll" );
$( ".lista-menu-mobile li a" ).last().addClass( "scroll" );
    // ******** Função Scroll  ******** //
    $('.scroll').click(function (event) {
        event.preventDefault();
        ancora = $(this).attr('href');
        $('html,body').animate({ scrollTop: jQuery(ancora).offset().top }, 2000);
    });
});





// Centralização do texto

    $(window).bind("load resize",function(){
        // faz com que o tamanho da div .row seja igual a 0.9 do  tamanho da tela
        $('.content-center').css({'min-height':($(window).height()* 0.8)});
        $('.element-to-center').each(function(){
            //pega o tamanho da div mãe e da div .row e encontra o meio entre as duas
            var parentHeight=$(this).parent().height();
            var thisHeight=$(this).height();
            var topmargin=(parentHeight-thisHeight)/2;
            //define o atributo margin top
            $(this).css("top",topmargin);});
            $('.element-to-center').css({position:'relative'});
    });
    $(window).resize();


    $(document).ready(function() {

        $('.wpcf7-response-output').click(function() {
            $(this).fadeOut();
        });

        $('.wpcf7-mail-sent-ok').click(function() {
            $(this).fadeOut();
        });
  }); 

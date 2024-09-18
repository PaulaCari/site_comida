// 3Barrar
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        
        //troca as 3linhas pelo x
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });


    // animação quando rolar a pag
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on ('scroll', function(){
        //adicionar a sombra
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        //console.log(scrollPosition)

       //box-shadow 
       if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
     }
     else{
        header.css('box-shadow', '8px 1px 8px rgba(0,0,0,0.2)');
     }

    });
});






//animação de aparecer os elementos textos
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

        //adicionar a sombra
       //box-shadow no header aparece a sombra assim q scrollar
       if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
        }
        else{
        header.css('box-shadow', '8px 1px 8px rgba(0,0,0,0.2)');
        }


        //animação para trocar entre as tag (inicio cardapio avaliações)
        let activeSectionIndex = 0;
        //loop
        sections.each(function(i){
            const section = $(this); //a propria seção
            const sectionTop = section.offset().top - 91;  //seçao para saber quando chegei no top - altura do header
            const sectionBotton = sectionTop+ section.outerHeight(); //quando chega no final

            if(scrollPosition >= sectionTop && scrollPosition < sectionBotton){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');  
    });

    //animação para aparecer os elementos na tela ja cole o script no html
    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.dish', {
        origin: 'right',
        duration: 3000,
        distance: '20%'
    })
    ScrollReveal().reveal('#testimonials_chef', {
        origin: 'left',
        duration: 1500,
        distance: '20%'
    })
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 6000,
        distance: '20%'
    })
    
});


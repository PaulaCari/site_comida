$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        
        //troca as 3linhas pelo x
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
});
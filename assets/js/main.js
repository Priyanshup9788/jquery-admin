$('.nav-iteam a').click(function () {
    
    $(this).next('.drop-menu').slideToggle(600);
    $('.drop-menu').not($(this).next('.drop-menu')).slideUp(600);
    $(this).children().eq(1).toggleClass('rotate');
    $('.rotate').not($(this).children().eq(1)).toggleClass('rotate')

});

$('.menu-2 .nav-iteam a').mouseover(function () { 

    $(this).next('.drop-menu').css('display','block');
    $('.drop-menu').not($(this).next('.drop-menu')).css('display','none');
});

$('.menu-2 .nav-iteam a').mouseleave(function () { 
    $('.drop-menu').css('display','none');
});

$('.profile').click(function(){
    $('.profile_list').toggleClass('d-none');
});

$('.bar').click(function(){

    if($(window).width() <768){
        $('aside').toggleClass('d-block');
    }
    else{
    $('aside').toggleClass('w-60');
    $('header').toggleClass('w-ml-60');
    $('.main-content').toggleClass('w-ml-60');
    $('footer').toggleClass('w-ml-60');
    // $('.logo img').attr('src','assets/img/favicon.png');
    $('.lft-side span').toggleClass('d-none');
    $('.fa-greater-than').toggleClass('d-none');

    if($('.logo img').attr('src')=='assets/img/favicon.png'){
        $('.logo img').attr('src','assets/img/logo.png');
    }
    else{
        $('.logo img').attr('src','assets/img/favicon.png');
    }
    $('.menu').toggleClass('d-none');
    $('.munu').toggleClass('menu-2-d-none');
    $('.menu-2').toggleClass('d-flex');
    

    // $('.menu-2').toggleClass('menu-2-d-none');

    $('.bar').toggleClass('ri-arrow-right-line')
    $('.bar').toggleClass('ri-menu-2-fill')
}
});



$('.country').click(function(){
    $('.country_options').toggleClass('d-block');
});

$('.apps').click(function(){
    $('.a_dropdown_menu').toggleClass('d-block');
});
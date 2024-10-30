$(function(){
    var winWidth=$(window).width();

    //skill bar
    function barAnimation(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
            },2000)
        });
    }
    function barStop(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
            width: 0
            },2000)
        });
    }

    // $(window).on('scroll mousemove', function(e){
    //     // 마우스 좌표값
    //     $('.cursor').css('left', e.pageX + 'px');
    //     $('.cursor').css('top', e.pageY + 'px');
    //     });
    //     $('a').hover(function(){
    //         $('.cursor').toggleClass('on');
    //     });

    //전자카탈로그
    // const panels = document.querySelectorAll(".panel");

    // panels.forEach((panel) => {
    //     panel.addEventListener("click", () => {
    //         removeActive();
    //         panel.classList.add("active");
    //     });
    // });

    // function removeActive() {
    //     panels.forEach((panel) => {
    //         panel.classList.remove("active");
    //     });
    // }

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        mousewheel: true,
        keyboard: true,
        },
    });
});
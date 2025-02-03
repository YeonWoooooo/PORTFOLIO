$(function(){
    var winWidth=$(window).width();

    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });

    //nav
    const links = document.querySelectorAll('.nav__link');
    const light = document.querySelector('.nav__light');

    function moveLight({ offsetLeft, offsetWidth }) {
    light.style.left = `${offsetLeft - offsetWidth/4}px`;
    }

    function activeLink(linkActive) {
    links.forEach(link => {
        link.classList.remove('active');
        linkActive.classList.add('active');
    })
    }


    links.forEach((link) => {
    link.addEventListener('click', (event) => {
        moveLight(event.target);
        activeLink(link);
    })
    })

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

    //gall

    var gall=$('.line_gallery');
    var gallBox=$('.line_gallery .line_gallery_box');
    var gallHeight=gallBox.find('.item').height();
    var item=gallBox.find('.item');
    var gallNum=0;
    var gallTotal=item.length;
    var timer=null;
    //console.log(gallTotal);
    //gallBox.css('top',-gallHeight);
    gallBox.find('.line:nth-child(2) .item').css('opacity',1);

    setTimeout(timerfn,5000);
    function timerfn(){
        gallMove();
        timer=setTimeout(timerfn,5000);
    }
    function gallMove(){       
        gallBox.animate({'top':'-='+gallHeight}, 700, function(){
            gallBox.find('.line').first().appendTo(gallBox);
            gallBox.css('top',0);
            gallBox.find('.line .item').css('opacity',0.3);
            gallBox.find('.line:nth-child(2) .item').css('opacity',1);
        });        
    }
    gall.mouseover(function(){
        clearTimeout(timer);
    });
    gall.mouseout(function(){
        timer=setTimeout(timerfn,1000);
    });
    
    item.click(function(){
        var itemData=$(this).attr('data');
        gallNum=itemData;
        console.log(itemData);
        $('.popup-1 .container-1').append('<img src="img/gallery'+itemData+'.png">');
        $('.popup-1').show();
        $('.popup-1').css('position', 'fixed');
        $('.popup-1 .container-1').fadeIn();
    });


    $('.popup_prev').click(function(e){
        e.preventDefault();
        $('.popup-1 .container-1').empty();
        gallNum--;
        if(gallNum<1){
            gallNum=gallTotal;
        }
        $('.popup-1 .container-1').append('<img src="img/gallery'+gallNum+'.png">');
        $('.popup-1').show();
        $('.popup-1 .container-1').fadeIn();
    });


    $('.popup_next').click(function(e){
        e.preventDefault();
        $('.popup-1 .container-1').empty();
        gallNum++;
        if(gallNum>gallTotal){
            gallNum=1;
        }
        $('.popup-1 .container-1').append('<img src="img/gallery'+gallNum+'.png">');
        $('.popup-1').show();
    });


    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.popup-1 .container-1').empty();
        $('.popup-1').hide();
    });
});
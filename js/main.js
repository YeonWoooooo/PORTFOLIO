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
        $('.popup-1 .container-1').fadeIn();
    });


    $('.popup_prev').click(function(){
        gallNum--;
        if(gallNum<1){
            gallNum=gallTotal;
        }
        $('.popup-1 .container-1').append('<img src="img/gallery'+gallNum+'.png">');
        $('.popup-1').show();
        $('.popup-1 .container-1').fadeIn();
    });


    $('.popup_next').click(function(){
        gallNum++;
        if(gallNum>gallTotal){
            gallNum=1;
        }
        $('.popup-1 .container-1').append('<img src="img/gallery'+gallNum+'.png">');
        $('.popup-1').show();
    });


    $('.popup_close').click(function(){
        $('.popup-1 .container-1').empty();
        $('.popup-1').hide();
    });
});
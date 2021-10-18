$(function(){
    var winWidth=$(window).width();
    //if(winWidth >=1600){ 
      //if없애면 태블릿, 모바일에서도 fullpage됨
        //fullpage
        $('#fullpage').fullpage({
            menu:'#menu',
            anchors:['MAIN','PROFILE','PROJECT','REVEWAL','GRAPHIC','CONTECT'],
            navigation:true,
            navigationPosition:'right',
            navigationTooltips:['MAIN','PROFILE','PROJECT','REVEWAL','GRAPHIC','CONTECT'],
            showActiveTooltip:true,
            afterLoad:function(anchorLink, index, direction){
                //6번째 section, 4번째 section의 메뉴는 검정색 글자
                //if(index==6 //|| index==4
                //     ){
                //     $('header nav ul li a').addClass('active');
                // }else {
                //     $('header nav ul li a').removeClass('active');
                // }
                //매 페이지마다 색을 다르게
                // if(index==1){
                //     $('header nav ul li a').addClass('active1');
                // }else if(index==2){
                //     $('header nav ul li a').addClass('active2');
                // }else if(index==3){
                //     $('header nav ul li a').addClass('active3');
                // }else if(index==4){
                //     $('header nav ul li a').addClass('active4');
                // }else if(index==5){
                //     $('header nav ul li a').addClass('active5');
                // }else if(index==6){
                //     $('header nav ul li a').addClass('active6');
                // }

                // if(index==6){
                //     $('header nav ul li a').addClass('active');
                //     $('#fp-nav ul li a span').addClass('active');
                //     $('#fp-nav ul li .fp-tooltip').addClass('active');
                // }else {
                //     $('header nav ul li a').removeClass('active');
                //     $('#fp-nav ul li a span').removeClass('active');
                //     $('#fp-nav ul li .fp-tooltip').removeClass('active');
                // }

                //2번째 section에서 자식 콘텐츠에 active설정
                if(index==1){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .edit ul li').removeClass('active');
                    $('.s4 .box .swiper').removeClass('active');

                }
                //2번째 section에서 자식 콘텐츠에 active설정
                if(index==2){
                    $('.s2 .box > div').addClass('active');
                    //1초 기다렸다가 barAnimation함수 호출(1번 실행)
                    setTimeout(barAnimation, 1000);
                    $('.s3 .box .edit ul li').removeClass('active');
                    $('.s4 .box .swiper').removeClass('active');
                }
                if(index==3){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .edit ul li').addClass('active');
                    $('.s3 .box .edit ul li').each(function(){
                        // var second=Math.random()*2; //0~2사이의 실수 //랜덤
                        var second=$(this).index()*0.1; //순서대로
                        $(this).css('transition-delay',second+'s');
                    });
                    $('.s4 .box .swiper').removeClass('active');
                }
                if(index==4){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .edit ul li').removeClass('active');
                    $('.s4 .box .swiper').addClass('active');
                }
                if(index==5){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .edit ul li').removeClass('active');
                    $('.s4 .box .swiper').removeClass('active');
                }
            }
        });
    //}

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

    //swiper
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    //popup gallery
    // var imgBtn=$('.s3 .box #slider ul li .over a');
    // var gallTotal=$('.s3 .box #slider ul li').length;
    // var popup=$('.popup');
    // var container=$('.popup .container');
    // var gallNum=0;

    // imgBtn.click(function(e){
    //     e.preventDefault();
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        // var attr=$(this).attr('href');
        // console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴
        // container.append('<img src="'+attr+'">');
        // popup.css('display','block');
        //클릭한 a태그의 조상객체 중 li의 인덱스 번호를 가져와서 변수에 저장
    //     gallNum=$(this).parents('li').index()+1;
    //     console.log(gallNum);
    // });

    //popup gallery next btn
    // $('.popup .next').click(function(){
    //     gallNum++;
    //     if(gallNum > gallTotal) { gallNum=1; }
    //     container.empty();
    //     container.append('<img src="img/project'+gallNum+'.png">');
    // });

    //popup gallery prev btn
    // $('.popup .prev').click(function(){
    //     gallNum--;
    //     if(gallNum < 1) { gallNum=gallTotal; }
    //     container.empty();
    //     container.append('<img src="img/project'+gallNum+'.png">');
    // });

    //popup gallery close btn
    // $('.close').click(function(){
    //     popup.css('display','none');
    //     //container안의 내용 비움
    //     container.empty();
    // });

    //s3슬라이드
    var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth +80 ; // (10*4)*2 where 10 is margin between li elements.
	
	$('#slider').css({ width: sliderUlWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth /*, marginLeft: - slideWidth */ });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
  
  $("#slider ul li").on("swipeleft",function(){
    //alert("You swiped left!");
    moveRight();
  }); 
  
  $("#slider ul li").on("swiperight",function(){
    //alert("You swiped left!");
    moveLeft();
  }); 


  //s5 gallery
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

    var words = ['HI IM KANG YEONWOO', 'Navigating Space', 'I Wanted it to be you, I wanted it to be you so badly', 'Think ! Believe ! Dream and Dare !', 'You control your destiny'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

});
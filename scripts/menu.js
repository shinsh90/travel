//--------- 돋보기 클릭시 반응하는 스크립트--------------
$(".holder").on("click", function () {
    $this = $(this);
    if ($this.hasClass("active")) {
        $this.fadeOut(500);
        setTimeout(function () {
            $this.removeClass("active");
            $("#search_top").blur();
        }, 500);
        setTimeout(function () {
            $this.fadeIn(500);
        }, 1000);
    } else {
        setTimeout(function () {
            $this.fadeIn(500);
        }, 1000);
        $(this).addClass("active");
        $("#search_top").focus();
    }
});
//--------------------------------------------------
//--------- 마우스 오버 시 반응하는 스크립트--------------
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
//--------------------------------------------------
//--------- 텝메뉴 클릭 시 반응하는 스크립트--------------
$('#category_menu li').click(function () {
    $('.arrow').removeClass('arrow');
    $(this).addClass('arrow');

});


$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


$(function () {
    $('#category_menu li').click(function () {
        var tabType = $(this).index();
        $('#category_menu li').each(function (index) {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
            if (tabType != index) {
                $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
            }
        });

    });
});

$(function () {

    if ($(".arrow").removeClass('arrow')) {
        {
            $("#category_menu li:first").addClass('arrow');
        }
    }
    $("#category_content_box article").hide(); // Initially hide all content
    $("#category_menu li:first").attr("id", "current"); // Activate first tab
    $("#category_content_box article:first").fadeIn(); // Show first tab content

    $('#category_menu a').click(function (e) {
        e.preventDefault();
        $("#category_content_box article").hide(); //Hide all content
        $("#category_menu li").attr("id", ""); //Reset id's
        $(this).parent().attr("id", "current"); // Activate this
        $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
        switch ($(this).attr('title')) {
            case "tab1":
                $("#cont1").fadeIn();
                break;
            case "tab2":
                $("#cont2").fadeIn();
                break;
            case "tab3":
                $("#cont3").fadeIn();
                break;
            case "tab4":
                $("#cont4").fadeIn();
                break;
            case "tab5":
                $("#cont5").fadeIn();
                break;
            case "tab6":
                $("#cont6").fadeIn();
                break;
        }
    });
});
//----------------------------------------------------

//-------------------팝업-----------------------------

$(function () {

    $('#dateRangePicker').daterangepicker({

        showDropdowns: true,
        timePicker: true,
        autoUpdateInput: false,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            yearSuffix: '년',
            applyLabel: '확인',
            cancelLabel: '취소',
            format: 'M/DD hh:mm A'
        }
    });

    $('#dateRangePicker').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('입실 : YYYY-MM-DD hh:mm A') + ' ~ ' + picker.endDate.format('퇴실 : YYYY-MM-DD hh:mm A'));
    });

    $('#dateRangePicker').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});

// 데이트레인지피커 팝업 // ------------------------------------

$(function () {
    $('select').niceSelect();
});
// 셀렉트박스 플러그인 //-------------------------------------------


$(function () {
    $("#calendar").zabuto_calendar();
});
// 달력 플러그인 // -------------------------------------------------

$(function () {

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.air_tabs li").click(function () {
        // console.log($(this).children());
        // $(this).children().removeClass("active").css("color", "#777");
        $("ul.air_tabs li").removeClass("active").css("color", "#777");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "#2A2E30");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

    });
});

//작은 탭메뉴 // -------------------------------------------------------

$(function () {
    $("ul.way_tabs li").click(function () {
        // $("ul.way_tabs li").removeClass("clicked").css("background-color", "white").css("color", "#2A2E30");
        // console.log($(this).parent().children());
        $(this).parent().children().removeClass("clicked").css("background-color", "white").css("color", "#2A2E30");
        $(this).addClass("clicked").css("background-color", "#2A2E30").css("color", "white");
        if ($(".show").hasClass("clicked")) {
            $(".plane_select_end_2").fadeIn();
        } else {
            $(".plane_select_end_2").fadeOut();
        }
    });
    // console.log($("ul.way_tabs:last"));
    $("ul.way_tabs:first li:first, ul.way_tabs:last li:first").trigger("click");


});
$(function () {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
            ,
        showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            ,
        showMonthAfterYear: true //년도 먼저 나오고, 뒤에 월 표시
            ,
        changeYear: true //콤보박스에서 년 선택 가능
            ,
        changeMonth: true //콤보박스에서 월 선택 가능                
            ,
        yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
            ,
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] //달력의 월 부분 텍스트
            ,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip 텍스트
            ,
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 부분 텍스트
            ,
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 부분 Tooltip 텍스트
            ,
        minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            ,
        maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)   
    });
    $("#datepicker_5").datepicker();
    $("#datepicker_4").datepicker(

    );
    $("#datepicker_3").datepicker(

    );
    $("#datepicker_2").datepicker(

    );
    $("#datepicker").datepicker(

    );


});
//----------------------------------------------------------------------------------------

var text = document.querySelector('.text');
var newDom = '';
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

//--------------------------------------------------------------------------------------

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down 
        $('header').removeClass('header_down').addClass('header_up');
    } else { // Scroll Up 
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('header_up').addClass('header_down');
        }
    }
    lastScrollTop = st;
}

//-----------------------------------------------------------------------------------

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll__top').fadeIn();
        } else {
            $('.scroll__top').fadeOut();
        }
    });
    $('.scroll__top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//-----------------------------------------------------------------------------------

$(function () {
    $('.hamburger-button').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');

    });
    var scene = document.getElementById("scene");
    var para = new Parallax(scene, {});
});

//-----------------------------------------------------------------------
// $(".plane").hide();

$(document).ready(function () {
    $(".plane").animate({
        top: "100px"
    }, 1000);

});
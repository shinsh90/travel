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
    $('.current').removeClass('current');
    $(this).addClass('current');
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
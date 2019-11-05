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
    $("#category_content_box div").hide(); // Initially hide all content
    $("#category_menu li:first").attr("id", "current"); // Activate first tab
    $("#category_content_box div:first").fadeIn(); // Show first tab content

    $('#category_menu a').click(function (e) {
        e.preventDefault();
        $("#category_content_box div").hide(); //Hide all content
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
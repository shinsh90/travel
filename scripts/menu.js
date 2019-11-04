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
$('.category_menu li').click(function () {
    $('.current').removeClass('current');
    $(this).addClass('current');
});
//----------------------------------------------------
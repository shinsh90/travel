//--------- 돋보기 클릭시 반응하는 코드--------------
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
//-----------------------------------------------

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
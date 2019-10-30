$('.holder').on('click', function () {
    $this = $(this);
    if ($this.hasClass('active')) {
        $this.fadeOut(500);
        setTimeout(function () {
            $this.removeClass('active');
            $("#search_top").blur();
        }, 500);
        setTimeout(function () {
            $this.fadeIn(500);
        }, 1000);
    } else {
        setTimeout(function () {
            $this.fadeIn(500);
        }, 1000);
        $(this).addClass('active');
        console.log($("#search_top"));
        $("#search_top").focus();
    }
});
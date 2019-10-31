$.fn.videoPanning = function () {
    var init = "center",
        onloaded = false,
        speed = 800; //animation/tween speed
    //add custom easing for jquery animation
    $.extend($.easing, {
        pan: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    });
    return this.each(function () {
        var $this = $(this),
            timer, dest;
        if ($this.data("videoPanning")) return;
        $this.data("videoPanning", 1)
            //create markup
            .wrap("<div class='img-pan-container' />")
            .after("<div class='resize' style='position:absolute; width:auto; height:auto; top:0; right:0; bottom:0; left:0; margin:0; padding:0; overflow:hidden; visibility:hidden; z-index:-1'><iframe style='width:100%; height:0; border:0; visibility:visible; margin:0' /><iframe style='width:0; height:100%; border:0; visibility:visible; margin:0' /></div>")
            //image loaded fn
            .one("load loadstart", function () {
                onloaded = true;
                setTimeout(function () {
                    $this.addClass("loaded").trigger("mousemove", 1);
                }, 1);
            }).each(function () { //run load fn even if cached
                if (!onloaded) setTimeout(function () {
                    $this.addClass("loaded").trigger("mousemove", 1);
                }, 1);
                if (this.complete) $(this).load();
            })
            //panning fn
            .parent().on("mousemove touchmove MSPointerMove pointermove", function (e, p) {
                var cont = $(this);
                e.preventDefault();
                var contH = cont.height(),
                    contW = cont.width(),
                    isTouch = e.type.indexOf("touch") !== -1,
                    isPointer = e.type.indexOf("pointer") !== -1,
                    evt = isPointer ? e.originalEvent : isTouch ? e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] : e,
                    coords = [
                        !p ? evt.pageY - cont.offset().top : init === "center" ? contH / 2 : 0,
                        !p ? evt.pageX - cont.offset().left : init === "center" ? contW / 2 : 0
                    ];
                dest = [Math.round(($this.outerHeight(true) - contH) * (coords[0] / contH)), Math.round(($this.outerWidth(true) - contW) * (coords[1] / contW))];
            })
            //resize fn
            .find(".resize iframe").each(function () {
                $(this.contentWindow || this).on("resize", function () {
                    $this.trigger("mousemove", 1);
                });
            });
        //panning animation 30 FPS
        if (!timer) {
            timer = setInterval(function () {
                $this.stop().animate({
                    "top": -dest[0],
                    "left": -dest[1]
                }, speed, "pan");
            }, 33.3);
        }
    });
}
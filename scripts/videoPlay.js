$(function () {
    console.log($.fn);
    //https://taegon.kim/archives/3058

    $(document).ready(function () {
        var myVideo = $("#myVideo").get(0);
        myVideo.muted = true;
        $("#mute").text("소리재생");

        $(".content video").videoPanning();

        $("#play").click(function () {
            myVideo.play();
        });

        $("#pause").click(function () {
            myVideo.pause();
        });

        $("#mute").click(function () {
            if (myVideo.muted) {
                myVideo.muted = false;
                $("#mute").text("음소거");
            } else {
                myVideo.muted = true;
                $("#mute").text("소리재생");
            }
        });
        var loopPlay = setInterval(function () {
            // console.log(Math.floor(myVideo.currentTime));
            if (Math.floor(myVideo.currentTime) == 0) {
                showTip($(".tip"), 5, 15);
                // showTip($(".tip2"), 15, 25);
            }
        }, 1000);
    });

    function showTip(obj, start, end) {
        setTimeout(function () {
            obj.animate({
                opacity: 1,
                // top: "-=50px"
            }, 500, "linear", function () {
                $(this).fadeIn();
            });
        }, start * 1000);

        obj.on("mouseenter", function () {
            myVideo.pause();
            obj.find("div").stop().slideDown();
        });

        obj.on("mouseleave", function () {
            myVideo.play();
            obj.find("div").stop().slideUp();
        });
        setTimeout(function () {
            obj.animate({
                opacity: 0,
                // top: "+=50px"
            }, 500, "linear", function () {
                $(this).fadeOut();
            });
        }, end * 1000);
    }
});
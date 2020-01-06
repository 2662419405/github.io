var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("欢迎来到残梦博客","今天的努力终有回报","明天再好的计划也不如今天的计划","技术改变一切,梦想成就未来","比你强大的人比你还努力");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        var arr = ['#1E90FF', '#008000', '#7FFF00', '#FF00FF', '#FF0000', '#FFD700', '#D2691E']
        var randomColor_arr = Math.floor(Math.random() * arr.length)
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": "14px",
            "color": arr[randomColor_arr]
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
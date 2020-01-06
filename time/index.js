$(function(){
    $(".item").hover(
        function(){
            $(this).css({"border":"1px solid #cfcfcf"}).addClass("colour").find(".item_inner").children("p").css({"color":"#cfcfcf"})
        },
        function(){
            $(this).css({"border":""}).removeClass("colour").find(".item_inner").children("p").css({"color":""})
        }
    )
    $(".tab_inner").children("div").click(function(){
        $this = $(this).index()
        $(this).css({"border-color":"#191919"}).siblings().css({"border-color":"#E2E2E2"})
        $(".timer").eq($(this).index()).css({"display":"block"}).siblings(".timer").css({"display":"none"})
    })
})
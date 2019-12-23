$(function(){
    $(".item").hover(
        function(){
            $(this).css({"border":"1px solid #cfcfcf"}).addClass("colour").find(".item_inner").children("p").css({"color":"#cfcfcf"})
        },
        function(){
            $(this).css({"border":""}).removeClass("colour").find(".item_inner").children("p").css({"color":""})
        }
    )
    $(".tab_inner").
})
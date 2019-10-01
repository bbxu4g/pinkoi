$(function () {
    var j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    $('.small-pic img').click(function () {
        var i = $(this).attr("id").substr(0);

        showImage.attr('src', "./" + i + ".JPG");
    })
    // console.log($(".small-pic>img").length);

    $.ajax({
        url: "./test.json",  //要讀取的檔案路徑
        data: {},
        type: "GET", //讀取方式的類型，GET POST
        async: true,
        dataType: "json", //資料類型
        success: function (data) { //成功後執行
            for (var i = 0; i < data.first.length; i++) {
                $(".row").append("<div class='pictext'>" +
                    "<div  class='p2'><img onmouseover='picmouseover(this)' onmouseout='picmouseout(this)' class='pic' src='" + data.first[i].pic + "'>" +
                    "<h4 class='text'>" + data.first[i].h4 + "</h4>" +
                    "<p class='text'>" + data.first[i].p + "</p></div><div class='p1' >" + data.first[i].date + "</div>");
                //       console.log(data.first.length);
            }
        },
        error: function () { //錯誤的時候執行
            alert("ERROR!!!");
        }
    });
    //ul滑過去會出現li底下的ul
    $(".list-ul>li").hover(function () { $(this).find("ul").css("display", "block"); },
        function () { $(this).find("ul").css("display", "none"); });
    //左右邊滑過去變黑
    $(".leftcontrol").hover(function () {
        $(".leftcontrol").addClass("backcolor-left");
        $(".leftcontrol").removeClass("backcolor-cancel"); console.log(this);
    }, function () {
        $(".leftcontrol").addClass("backcolor-cancel");
        $(".leftcontrol").removeClass("backcolor-left");
    });
    $(".rightcontrol").hover(function () {
        $("div.rightcontrol").addClass("backcolor-right");
        $("div.rightcontrol").removeClass("backcolor-cancel"); console.log(this);
    }, function () {
        $("div.rightcontrol").addClass("backcolor-cancel");
        $("div.rightcontrol").removeClass("backcolor-right");
    });
    //設定自動輪播
    setInterval(function(){ next() }, 5000);

  
});



function imgsmall(imgsmall) {
    var j = $(".w380h75").length;
    var showImage = $('#show-img');

    $('.w380h75').click(function () {
        var i = $(this).attr("id").substr(0);
        showImage.attr('src', "./top" + i + ".JPG");

        $(".w380h75").css("opacity", "0.3");
        $(this).css('opacity', "1");
    })
    // console.log($(".w380h75").length);
}


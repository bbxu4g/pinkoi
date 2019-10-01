$(function () {
    var j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    $('.small-pic img').click(function () {
        var i = $(this).attr("id").substr(0);

        showImage.attr('src', "./" + i + ".JPG");
    })
    // console.log($(".small-pic>img").length);

    $.ajax({
        url: "../data/test.json",  //要讀取的檔案路徑
        data: {},
        type: "GET", //讀取方式的類型，GET POST
        async: true,
        dataType: "json", //資料類型
        success: function (data) { //成功後執行
            for (var i = 0; i < data.first.length; i++) {
                $(".detail").append("  <div class='card-deck' style='width:200px;margin:5px;float:left;'><div class='card mx-1' style='border-style:none;'>" +
                    " <img class='card-img-top' src='" + data.first[i].pic + "' alt='Card image cap'> <div class='card-body px-0 py-1'>" +
                    " <p class='card-text' style='font-size: 14px;font-weight: bold;'>" + data.first[i].h4 + "</h4>" +
                    "<p class='card-text'><small class='text-muted' style='color:#48a38e;'>" + data.first[i].p + "</small></p><input type='number'>　<button class='btn-primary'>購物車</button></div></div>");
                //       console.log(data.first.length);
            }
        },
        error: function () { //錯誤的時候執行
            alert("ERROR!!!");
        }
    });
    
    $.ajax({
        url: "../data/test2.json",  //要讀取的檔案路徑
        data: {},
        type: "GET", //讀取方式的類型，GET POST
        async: true,
        dataType: "json", //資料類型
        success: function (data) { //成功後執行
            for (var i = 0; i < data.first.length; i++) {
                $(".detail2").append("  <div class='card-deck' style='width:200px;margin:5px;float:left;'><div class='card mx-1' style='border-style:none;'>" +
                    " <img class='card-img-top' src='" + data.first[i].pic + "' alt='Card image cap'> <div class='card-body px-0 py-1'>" +
                    " <p class='card-text' style='font-size: 14px;font-weight: bold;'>" + data.first[i].h4 + "</h4>" +
                    "<p class='card-text'><small class='text-muted' style='color:#48a38e;'>" + data.first[i].p + "</small></p></div></div>");
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


});




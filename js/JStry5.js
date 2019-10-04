var isUpdate = false;
var list = [];
$(function () {

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
                    "<p class='card-text'><small class='text-muted' style='color:#48a38e;'>" + data.first[i].p + "</small></p><input type='number'>　<button class='btn-primary add'>加入購物車</button></div></div>");
            }
        },
        error: function () { //錯誤的時候執行
            //     alert("ERROR!!!");
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
                    "<p class='card-text'><small class='text-muted' style='color:#48a38e;'>" + data.first[i].p + "</small></p><input type='number'>　<button class='btn-primary add'>加入購物車</button></div></div>");
            }
            addcart();
        },
        error: function () { //錯誤的時候執行
            //  alert("ERROR!!!");
        }
    });

});

function addcart() {
    var num;
    var name;
    var price;

    $(".add").click(function () {
        num = $(this).prev("input").val();//數量
        name = $(this).parent(".card-body").children(".card-text:eq(0)").text();//名稱
        price = $(this).parent(".card-body").children(".card-text:eq(1)").text().substr(5);//價格

        var product = { name: name, price: price, num: num };
        listpush(product);
    })

}

function listpush(product) {
    list;
    isUpdate;
    var j = 0;
    var i = 0;
    var name = product.name;
    console.log("A");

    if (isUpdate == false) { list.push(product); isUpdate = true; }
    else {
        list.forEach(function (element) {
            if (name == element.name) { isUpdate = true; j++; list.splice(i, 1, product); }
            i++;
        });
        if (isUpdate == true && j == 0) { list.push(product); }
    };
    list.forEach(function (e) {
        console.log("A");
        // $("#cartlist").append( // 把每一行加進去
        //     "<tr>" +
        //     "<td class='index'>" + e.name + "</td>" + // 給class是為了修改可以抓到要的td
        //     "<td class='name'>" + e.price + "</td>" + // 同上 :")
        //     "<td class='price'>" + e.num + "</td>" + // :")
        //     "</tr>"
        // )
    });


}

// // 頁碼
// function pageCount() {
//     $("#form-page").empty();
//     var count = 5; // 一頁的筆數
//     var total = $("tr").length; // 總共的筆數
//     var page = Math.ceil(total / count); // 頁數
//     for (var i = 1; i <= page; i++) {
//         $("#form-page").append('<button>' + i + '</button>');
//     }
//     $("tr").hide();
//     $("tr").slice(0, 5).show();
// }

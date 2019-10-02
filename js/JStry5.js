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
                    " <p class='card-text' style='font-size: 14px;font-weight: bold;'>" + data.first[i].h4 + "</p>" +
                    "<p class='card-text'><small class='text-muted' style='color:#48a38e;'>" + data.first[i].p + "</small></p><input type='number'>　<button class='btn-primary Add'>加入購物車</button></div></div>");
                //       console.log(data.first.length);
            }
            addcart()
        },
        error: function () { //錯誤的時候執行
            alert("ERROR!!!");
        }
    });

});

function addcart() {
    var list = [];
    var num;
    var name;
    var price;
    var isUpdate = false;

    $(".add").click(function () {
        num = $(this).prev("input").val();//數量
        name = $(this).parent(".card-body").children(".card-text:eq(0)").text();//名稱
        price = $(this).parent(".card-body").children(".card-text:eq(1)").text().substr(5);//價格


        var product = { name: name, price: price, num: num };

        list.push(product);
      //  console.log(list);

        list.forEach(function(element) {
            console.log(element.name);
          });
    })

    //     listBody.querySelectorAll('tr td:first-child').forEach(item => {
    //         // 已經存在則直接更新數值
    //         if (item.innerText === name) {
    //             // 下一個同階層的元素
    //             const n = item.nextElementSibling;
    //             const p = n.nextElementSibling;
    //             n.innerHTML = Number(n.innerHTML) + 1;
    //             isUpdate = true;
    //         }
    //     });

    //     // 如果不是更新餐點, 則加入新餐點項目
    //     if (!isUpdate) {
    //         // 插入在最後一列
    //         const row = listBody.insertRow(listBody.rows.length);
    //         row.insertCell(0).innerHTML = name;
    //         row.insertCell(1).innerHTML = 1;
    //         row.insertCell(2).innerHTML = price;
    //         isUpdate = true;
    //     }

    //     UpdateCaculate();
    // })
}


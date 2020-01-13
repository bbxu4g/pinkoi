var isUpdate = false;
var itemList = [];
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
        price = $(this).parent(".card-body").children(".card-text:eq(1)").text().substr(3);//價格

        var product = { name: name, price: price, num: num };
        listpush(product);

    })
}

function listpush(product) {
    itemList;
    isUpdate;
    var j = 0;
    var i = 0;
    var name = product.name;
    console.log(name);
    if (getItem("itemList")) {
        itemList = getJsonItem("itemList");
        console.log(itemList);
    }
    if (itemList!=[]){isUpdate = true;}
    if (isUpdate == false) { itemList.push(product); isUpdate = true; console.log("A"); }//購物車是空的
    else {
        itemList.forEach(function (element) {
            console.log("B");//購物車有東西
            if (name == element.name) {//檢查是否名稱有重複
                isUpdate = true;
                j++;
                itemList.splice(i, 1, product);
                console.log("C");
            }
            i++;//過去重複指累加數量
        });
        if (isUpdate == true && j == 0) { itemList.push(product); console.log("D"); } //與購物車資料沒有重複
    };
    setJsonItem("itemList", itemList);
    // 把List存到LocalStorage(Json格式)







}

//LocalStorage Simpler
function setItem(key, param) {
    window.localStorage.setItem(key, param); //存檔
};
function setJsonItem(key, param) {
    window.localStorage.setItem(key, JSON.stringify(param)); // 存Json
};
function getItem(key) {
    return window.localStorage.getItem(key); //讀檔
};
function getJsonItem(key) {
    var data = window.localStorage.getItem(key) // 取json
    return JSON.parse(data);
};


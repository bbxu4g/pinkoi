var isUpdate = false;
var itemList = [];

$(function () {

    if (getItem("itemList")) {
        itemList = getJsonItem("itemList");
        //   console.log(itemList);
    }

    setJsonItem("itemList", itemList);
    // 把List存到LocalStorage(Json格式)
    // console.log(itemList);
    if (itemList.length == 0) {
        $("#cartlist").html(
            "<tr>" +
            "<td><p>你的購物車還是空的喔!!</p></td>" +
            "</tr >"
        );
    }
    else {
        itemList.forEach(e => {
            //  console.log(e);
            $("#cartlist").append(
                "<tr>" +
                
                "<td class='name'>" + e.name + "</td>" +
                "<td class='singleprice'>" + e.price + "</td>" +
                "<td><button class='butdec' >-</button><input class='num' value='" + e.num + "'><button class='butadd'>+</button></td>" +
                "<td><p class='pricetotal'>" + e.price * e.num + "</p></td>" +
                "<td><p class='del'  >刪除</p></td>" +
                "</tr >"
            );
        });

    }
   // console.log(itemList.length);


    //自動修改金額
    Calculation()

    //---刪除清單
    $(".del").click(function () {
        var index = $(this).parent().parent().index();//第幾個tr
        itemList.splice(index - 1, 1); //刪掉陣列裡面的東西
        console.log(itemList);
        $(this).closest("tr").remove();//刪到畫面的那一欄
        localStorage.removeItem("itemList");//清空local
        setJsonItem("itemList", itemList);//重新讀資料
        // 把List存到LocalStorage(Json格式)
        Calculation();
        if (itemList.length == 0) {
            $("#cartlist").html(
                "<tr>" +
                "<td><p>你的購物車還是空的喔!!</p></td>" +
                "</tr >"
            );
        }
    })

    //----計算數量
    $(".butadd").click(function () {
        var num = ($(this).prev()).val();
        num = num * 1 + 1;
        $(this).prev().val(num);
        var price = $(this).closest('tr').find(".singleprice").text();
        var totalprice = num * price;
        $(this).closest('tr').find(".pricetotal").text(totalprice);

        var index = $(this).parent().parent().index();//第幾個tr
        var name = $(this).closest('tr').find(".name").text();
        console.log(num, index, name);
        productnum(num, index, name, price)
        Calculation();
    })
    $(".butdec").click(function () {
        var num = ($(this).next()).val();
        var index = $(this).parent().parent().index();//第幾個tr
        if (num == 0) { num = 0; }
        else { num = num * 1 - 1; }
        $(this).next().val(num);
        var price = $(this).closest('tr').find(".singleprice").text();
        var totalprice = num * price;
        $(this).closest('tr').find(".pricetotal").text(totalprice);
        productnum(num, index, name, price)
        Calculation();

    })

});

function del() {


}
function productnum(num, index, name, price) {
    //num修改的新數量,index第幾個資料
    itemList.splice(index - 1, 1, { name: name, price: price, num: num });
    console.log(itemList);
    localStorage.removeItem("itemList");//清空local
    setJsonItem("itemList", itemList);//重新讀資料
    // 把List存到LocalStorage(Json格式)

    //if(num==0){var ans=confirm("數量歸 0 ，是否要刪除該筆訂單呢?");if(ans==ture){  console.log("A");}}
}

function Calculation() {
    var price = 0;
    var num = 0;
    var j = $("#cartlist tr").length - 1;
    for (i = 0; i < j; i++) {
        num = $(".pricetotal").eq(i).text() * 1;
        price = price + num;
    }
    $("#bill").text("NT$" + price);

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


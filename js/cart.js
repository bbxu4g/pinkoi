var isUpdate = false;
var itemList = [];
$(function () {
     
    if (getItem("itemList")) {
        itemList = getJsonItem("itemList");
        console.log(itemList);
    }
    if (isUpdate == false) { itemList.push(product); isUpdate = true; }
    else {
        itemList.forEach(function (element) {
            if (name == element.name) { isUpdate = true; j++; itemList.splice(i, 1, product); }
            i++;
        });
        if (isUpdate == true && j == 0) { itemList.push(product); }
    };
    setJsonItem("itemList", itemList);
    // 把List存到LocalStorage(Json格式)
    console.log(itemList);


    itemList.forEach(e => {
        //  console.log(e);

        $("#cartlist").append(
            "<div class='col-md-4 col-sm-6 col-xs-12 itemblock' >" +
            "<div class='item' >" +
            "<div class='info'>" +
            "<span class='name'> " + e.name + "</span>" +
            "<span class='price'>" + e.price + "</span>" +
            "</div>"
        );
    });


});



// function listpush(product) {
//     itemList;
//     isUpdate;
//     var j = 0;
//     var i = 0;
//     var name = product.name;
//     console.log("A");
   




// }

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


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


    itemList.forEach(e => {
        //  console.log(e);

        $("#cartlist").append(
            "<tr>" +
            "<td><input type='checkbox'></td>" +
            "<td>" + e.name + "</td>" +
            "<td>$" + e.price +"</td>"+
            "<td><button class='butdec'>-</button><input class'num' value='"+ e.num +"'><button class='butadd'>+</button></td>"+
            "<td><p class='pricetotal'>$" + e.price*1*e.num*1 +"</p></td>"+
            "<td><p class='del'>刪除</p></td>"+
            "</tr >"    
        );
        
    });

    console.log($(".pricetotal").html());
  
    //---刪除清單
    $(".del").click(function(){
        $(this).closest("tr").remove();
    })

    //----計算數量
    $(".butadd").click(function(){
        var num=($(this).prev()).val(); 
        num=num*1+1;
        $(this).prev().val(num);
        
    })
    $(".butdec").click(function(){
        var num=($(this).next()).val();
        if(num==0){num=0;}
        else {num=num*1-1;}
        $(this).next().val(num);
        console.log($(this).parents().parents().children(".pricetotal").text());
    })

    
});





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


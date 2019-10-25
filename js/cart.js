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
            "<td class='singleprice'>" + e.price +"</td>"+
            "<td><button class='butdec' onclick='Calculation()'>-</button><input class='num' value='"+ e.num +"'><button class='butadd' onclick='Calculation()'>+</button></td>"+
            "<td><p class='pricetotal'>" + e.price*e.num +"</p></td>"+
            "<td><p class='del'>刪除</p></td>"+
            "</tr >"    
        );        
    });

  //  console.log($(".pricetotal").html());
  
    //---刪除清單
    $(".del").click(function(){
        $(this).closest("tr").remove();
    })

    //----計算數量
    $(".butadd").click(function(){
        var num=($(this).prev()).val(); 
        num=num*1+1;
        $(this).prev().val(num);
        var price=$(this).closest('tr').find(".singleprice").text();
        price=num*price;
        $(this).closest('tr').find(".pricetotal").text(price);      
    })
    $(".butdec").click(function(){
        var num=($(this).next()).val();
        if(num==0){num=0;}
        else {num=num*1-1;}
        $(this).next().val(num);
        var price=$(this).closest('tr').find(".singleprice").text();
        price=num*price;
        console.log(num);
        $(this).closest('tr').find(".pricetotal").text(price);     
    })

    
});



function Calculation(){
    var price;
    var num;
    //console.log( $(this));
   
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


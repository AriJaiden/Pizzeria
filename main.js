var menu= ["Chicken Pizza", "Corn Pizza", "Veg Pizza", "Paneer Pizza", "Extra Cheese Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu.sort();
    for(var i=0;i<menu.length;i++){
        htmldata=htmldata+'<li>'+menu[i]+'</li>'
    }
    htmldata=htmldata+'</ol>'
    document.getElementById("menudiv").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
    htmldata="<section class='cards'>"
    for (var a=0;a<menu.length; a++){
        htmldata=htmldata+"<div class='card'>"+"<img src='images/topping.png'/>"+menu[a]+"</div>"
    }
    htmldata=htmldata+"</section>"
    document.getElementById("addedmenu").innerHTML=htmldata;
}
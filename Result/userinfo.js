let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let x = Math.floor((Math.random() * 99) + 1);
let user_code = datetime+ x+user_points+x

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.code").innerHTML = user_code;
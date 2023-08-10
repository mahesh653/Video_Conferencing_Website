$(document).ready(function(){
  $('button.mode-switch').click(function(){
    $('body').toggleClass('dark');
  });
  
  $(".btn-close-right").click(function () {
    $(".right-side").removeClass("show");
    $(".expand-btn").addClass("show");
  });
  
  $(".expand-btn").click(function () {
    $(".right-side").addClass("show");
    $(this).removeClass("show");
  });
});
var check;
function zoomin(){
        var myImg = document.getElementById("containerApp");
        var currWidth = myImg.clientWidth;
        var curr = myImg.clientHeight;
        if(currWidth == 2500) return false;
         else{
          myImg.style.width = (currWidth + 100) + "px";
          myImg.style.height = (curr + 100) + "px";

        } 
}
    
function exit() {
  var x = document.getElementById("me");
  x.style.display = "none";
  
}
function moon() {
  var x = document.getElementById("containerApp");
  var n1 = document.getElementById("nav1");
  var n = document.getElementById("nav");
  if (check == "Black") {
    check = "White";
    n.style.backgroundColor = "White";
    n1.style.backgroundColor = "White";
    x.style.backgroundColor = "White";
  } else {
    check = "Black";
    n.style.backgroundColor = "Black";
    n1.style.backgroundColor = "Black";
    x.style.backgroundColor = "Black";
  }
  
}
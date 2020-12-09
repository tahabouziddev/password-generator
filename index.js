
var array =[
    "a","b","c","A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N","d","e","f","g","h","j","k","l","m","n","o","p","q","r","t","s","u","v","w","x","y","z","i","1","2","3","4","5","6","7","8","9","0","-","_","@","#"
];

function myfunction() {



    var x = array[ Math.floor(Math.random() * 67)]
var c = array[ Math.floor(Math.random() * 67)]
var a = array[ Math.floor(Math.random() * 67)]
var z = array[ Math.floor(Math.random() * 67)]
var e = array[ Math.floor(Math.random() * 67)]
var r = array[ Math.floor(Math.random() * 67)]
var t = array[ Math.floor(Math.random() * 67)]
var y = array[ Math.floor(Math.random() * 67)]
var u = array[ Math.floor(Math.random() * 67)]
var i = array[ Math.floor(Math.random() * 67)]
var o = array[ Math.floor(Math.random() * 67)]
var p = array[ Math.floor(Math.random() * 67)]
var q = array[ Math.floor(Math.random() * 67)]
var s = array[ Math.floor(Math.random() * 67)]
var d = array[ Math.floor(Math.random() * 67)]
var f = array[ Math.floor(Math.random() * 67)]
var h = array[ Math.floor(Math.random() * 67)]
var j = array[ Math.floor(Math.random() * 67)]
var k = array[ Math.floor(Math.random() * 67)]
var l = array[ Math.floor(Math.random() * 67)]
var m = array[ Math.floor(Math.random() * 67)]
var w = array[ Math.floor(Math.random() * 67)]
var password = a+z+e+r+t+y+u+i+o+p+q+s+d+f+h+j+k+l+m+w+x+c

    document.getElementById("pwd").value = password;
    var webname = document.getElementById("webname").value ;
    var weburl = document.getElementById("weburl").value ;
    var username = document.getElementById("username").value ;


  $.ajax(
    {
        type:'POST',
        dataType:'json',
        contentType:'application/json;charset-utf-08',
        url:'http://127.0.0.1:5000/store?pwd='+ password+"&webname="+ webname+"&weburl="+weburl+"&username="+username,
        success:function (data) {
            var reply=data.reply;
            if (reply=="success")
            {
                console.log("st9wd");
            }
            else
                {
                alert("some error ocured in session agent")
                }

        }
    }
);} 

// function myFunction() {
//     var str = "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice"; 
//     var res = str.slice(8, 5590);
//      var n = res.search("/");
//      var reso = res.slice(0, n);
  
//     document.getElementById("demo").innerHTML = reso;
    
//   }
function extract(){
    var webname = document.getElementById("webname").value ;
    var weburl = document.getElementById("weburl").value ;


  $.ajax(
    {
        type:'POST',
        dataType:'json',
        contentType:'application/json;charset-utf-08',
        url:'http://127.0.0.1:5000/extract?&weburl='+weburl,
        success:function (data) {
            var reply=data.result;
            document.getElementById("pwd").value = reply[0];


        }
    }
);} 


function extract2(){
    var webname = document.getElementById("webname").value ;


  $.ajax(
    {
        type:'POST',
        dataType:'json',
        contentType:'application/json;charset-utf-08',
        url:'http://127.0.0.1:5000/extracto?webname='+ webname,
        success:function (data) {
            var reply=data.result;
            document.getElementById("pwd").value = reply[0];


        }
    }
);} 


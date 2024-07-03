var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var res = document.getElementById("wl");
var val1, val2, val3, val4, val5, val6, val7,val8,val9,va1,va2,va3,va4,va5,va6,va7,va8,va9,count = 0;
start.addEventListener("click", strt);
function strt() {
    box1.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box1.textContent = "X";
            val1 = "X";
            console.log(val1);
            box1.disabled = true;
            box1.style.backgroundColor = "white";
            result();
        }
       if(count% 2==0) {
            box1.textContent = "O";
            va1 = "O";
            box1.disabled = true;
            box1.style.backgroundColor = "white";
            result1();
        }
    });
    box2.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box2.textContent = "X";
            val2 = "X";
            box2.disabled = true;
            box2.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0) {
            box2.textContent = "O";
            va2 = "O";
            box2.disabled = true;
            box2.style.backgroundColor = "white";
            result1();
        }
    });
    box3.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box3.textContent = "X";
            val3 = "X";
            box3.disabled = true;
            box3.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0) {
            box3.textContent = "O";
            va3 = "O";
            box3.disabled = true;
            box3.style.backgroundColor = "white";
            result1();
        }
    });
    box4.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box4.textContent = "X";
            val4 = "X";
            box4.disabled = true;
            box4.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0) {
            box4.textContent = "O";
            va4 = "O";
            box4.disabled = true;
            box4.style.backgroundColor = "white";
            result1();
        }
    });
    box5.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box5.textContent = "X";
            val5 = "X";
            box5.disabled = true;
            box5.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0) {
            box5.textContent = "O";
            va5 = "O";
            box5.disabled = true;
            box5.style.backgroundColor = "white";
            result1();
        }
    });
    box6.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box6.textContent = "X";
            val6 = "X";
            box6.disabled = true;
            box6.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0){
            box6.textContent = "O";
            va6 = "O";
            box6.disabled = true;
            box6.style.backgroundColor = "white";
            result1();
        }
    });
    box7.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box7.textContent = "X";
            val7 = "X";
            box7.disabled = true;
            box7.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0){
            box7.textContent = "O";
            va7 = "O";
            box7.disabled = true;
            box7.style.backgroundColor = "white";
            result1();
        }
    });
    box8.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box8.textContent = "X";
            val8 = "X";
            box8.disabled = true;
            box8.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0) {
            box8.textContent = "O";
            va8= "O";
            box8.disabled = true;
            box8.style.backgroundColor = "white";
            result1();
        }
    });
    box9.addEventListener("click", function () {
        count += 1;
        if (count % 2 != 0) {
            box9.textContent = "X";
            val9 = "X";
            box9.disabled = true;
            box9.style.backgroundColor = "white";
            result();
        }
        if(count% 2==0){
            box9.textContent = "O";
            va9 = "O";
            box9.disabled = true;
            box9.style.backgroundColor = "white";
            result1();
        }
    });
    function result() {
        if (val1 == "X" && val2 == "X" && val3 == "X") {
            res.textContent = "X is won";
            box4.disabled = true;
            box5.disabled = true;
            box6.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box9.disabled = true;
        }
        if (val4 == "X" && val5 == "X" && val6 == "X") {
            res.textContent = "X is won";
            box1.disabled = true;
            box2.disabled = true;
            box3.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box9.disabled = true;
        }
        if (val7 == "X" && val8 == "X" && val9 == "X") {
            res.textContent = "X is won";
            box1.disabled = true;
            box2.disabled = true;
            box3.disabled = true;
            box4.disabled = true;
            box5.disabled = true;
            box6.disabled = true;
        }
        if (val1 == "X" && val5 == "X" && val9 == "X") {
            res.textContent = "X is won";
            box2.disabled = true;
            box3.disabled = true;
            box4.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
        }
        if (val3 == "X" && val5 == "X" && val7 == "X") {
            res.textContent = "X is won";
            box2.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (val1 == "X" && val4 == "X" && val7 == "X") {
            res.textContent = "x is won";
            box2.disabled = true;
            box3.disabled = true;
            box5.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (val2 == "X" && val5 == "X" && val8 == "X") {
            res.textContent = "x is won";
            box3.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box7.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (val3 == "X" && val6 == "X" && val9 == "X") {
            res.textContent = "X is won";
            box2.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box8.disabled = true;
            box5.disabled = true;
            box7.disabled = true;
        }
       if(va1=="O"&&val2=="X"&&va3=="O"&&val4=="X"&&va5=="O"&&val6=="X"&&val7=="X"&&val9=="X"&&va8=="O")
       {
            res.textContent = "Match Die";
       }
}
    function result1()
    {
        if (va1 == "O" && va2 == "O" && va3 == "O") {
            res.textContent = "O is won";
            box4.disabled = true;
            box5.disabled = true;
            box6.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box9.disabled = true;
        }
        if (va4 == "O" && va5 == "O" && va6 == "O") {
            res.textContent = "O is won";
            box1.disabled = true;
            box2.disabled = true;
            box3.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box9.disabled = true;
        }
        if (va7 == "O" && va8 == "O" && va9 == "O") {
            res.textContent = "O is won";
            box1.disabled = true;
            box2.disabled = true;
            box3.disabled = true;
            box4.disabled = true;
            box5.disabled = true;
            box6.disabled = true;
        }
        if (va1 == "O" && va5 == "O" && va9 == "O") {
            res.textContent = "O is won";
            box2.disabled = true;
            box3.disabled = true;
            box4.disabled = true;
            box7.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
        }
        if (va3 == "O" && va5 == "O" && va7 == "O") {
            res.textContent = "O is won";
            box2.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (va1 == "O" && va4 == "O" && va7 == "O") {
            res.textContent = "O is won";
            box2.disabled = true;
            box3.disabled = true;
            box5.disabled = true;
            box8.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (va2 == "O" && va5 == "O" && va8 == "O") {
            res.textContent = "O is won";
            box3.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box7.disabled = true;
            box6.disabled = true;
            box9.disabled = true;
        }
        if (va3 == "O" && va6 == "O" && va9 == "O") {
            res.textContent = "O is won";
            box2.disabled = true;
            box1.disabled = true;
            box4.disabled = true;
            box8.disabled = true;
            box5.disabled = true;
            box7.disabled = true;
        }
           if(va1=="O"&&val2=="X"&&va3=="O"&&val4=="X"&&va5=="O"&&val6=="X"&&val7=="X"&&val9=="X"&&va8=="O")
       {
            res.textContent = "Match Die";
       }
    }
}
reset.addEventListener("click",function(){
location.reload();
});

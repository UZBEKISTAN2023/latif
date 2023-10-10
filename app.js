var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")
var btn4=document.getElementById("btn4")

var row1=document.getElementById("row1")
var row2=document.getElementById("row2")
var row3=document.getElementById("row3")
var row4=document.getElementById("row4")
var body=document.querySelector("body")
function fun0(){
    row1.style.display="none"
    row2.style.display="none"
    row3.style.display="none"
    row4.style.display="none"
}
function fun1(){
    row1.style.display="blok"
    row2.style.display="none"
    row3.style.display="none"
    row4.style.display="none"
}
function fun2(){
    row1.style.display="none"
    row2.style.display="block"
    row3.style.display="none"
    row4.style.display="none"
}
function fun3(){
    row1.style.display="none"
    row2.style.display="none"
    row3.style.display="block"
    row4.style.display="none"
}
function fun4(){
    row1.style.display="none"
    row2.style.display="none"
    row3.style.display="none"
    row4.style.display="block"
}

btn1.addEventListener("mouseover",fun1)
btn2.addEventListener("mouseover",fun2)
btn3.addEventListener("mouseover",fun3)
btn4.addEventListener("mouseover",fun4)
body.addEventListener("mousemove",fun0)




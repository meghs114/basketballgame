let homeel=document.getElementById("number1")
let guestel=document.getElementById("number2")
let count=0
let countt=0

function count1(){
    count+=1
    homeel.textContent=count
    // guestel.textContent=count
}
function count2(){
    count+=2
    homeel.textContent=count
}
function count3(){
    count+=3
    homeel.textContent=count
}

function countt1(){
    countt+=1
    // homeel.textContent=count
    guestel.textContent=countt
}
function countt2(){
    countt+=2
    guestel.textContent=countt
}
function countt3(){
    countt+=3
    guestel.textContent=countt
}
function reset(){
    homeel.textContent=0
    guestel.textContent=0
    count=0
    countt=0
}
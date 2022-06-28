let x = 0;

function Increment() {
    x++;
    document.getElementById("counter").innerHTML = x;
}

function Decrement() {
    x--;
    document.getElementById("counter").innerHTML = x;
}

function Reset() {
    x = 0;
    document.getElementById("counter").innerHTML = x;
}

window.onload = function(){
    document.getElementById("counter").innerHTML = x;
    console.log('Page loaded');
} 
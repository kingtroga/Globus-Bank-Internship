let x = 0, y = 0;


function Increment() {
    x++;
    if (x == 60) {
        x = 0;
        y++;
    }
    document.getElementById("counter").innerHTML = `${y}:${x}`;
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
    setInterval(() => Increment(), 1000);
    console.log('Page loaded');
} 


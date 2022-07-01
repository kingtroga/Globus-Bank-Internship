let x = 0;
var operand1 = "";
var operand2 = "";
var operator = "";
let plug = 1;
var answer;

window.onload = function(){
    document.getElementById("display_text-2").innerHTML = x;
    console.log('Page loaded');
} 

/* window.onclick = e => {
        console.log(e.target.innerText);
}  */ 

function isNumeric(num){
    return !isNaN(num)
  }


function handleClick(e) {
    
    element = e.target.innerHTML

    if (isNumeric(element) && plug)  {
        operand1 += element;
        document.getElementById("display_text-2").innerHTML = operand1;
    }

    switch (element) {
        case "+":
            operator += e.target.innerHTML;
            document.getElementById("display_text-2").innerHTML = operand1 + " " + operator;
            plug = false;
            break;
        case "-":
            operator += e.target.innerHTML;
            document.getElementById("display_text-2").innerHTML = operand1 + " " + operator;
            plug = false;
            break;
        case "x":
            operator += e.target.innerHTML;
            document.getElementById("display_text-2").innerHTML = operand1 + " " + operator;
            plug = false;
            break;

        case "÷":
            operator += e.target.innerHTML;
            document.getElementById("display_text-2").innerHTML = operand1 + " " + operator;
            plug = false;
            break;

        case "%":
            operator += e.target.innerHTML;
            document.getElementById("display_text-2").innerHTML = operand1 + " " + operator;
            plug = false;
            break;

        case "=":
            switch (operator) {
                case "+":
                    answer = parseInt(operand1) + parseInt(operand2);
                    document.getElementById("display_text-2").innerHTML = answer;
                    break;
                case "-":
                    answer = parseInt(operand1) - parseInt(operand2);
                    document.getElementById("display_text-2").innerHTML = answer;
                    break;
                case "x":
                    answer = parseInt(operand1) * parseInt(operand2);
                    document.getElementById("display_text-2").innerHTML = answer;
                    break;;
                case "÷":
                    answer = parseInt(operand1) / parseInt(operand2);
                    document.getElementById("display_text-2").innerHTML = answer;
                    break;
                case "%":
                    answer = parseInt(operand1) % parseInt(operand2);
                    document.getElementById("display_text-2").innerHTML = answer;
                    break;
            }
            /* Reset.call(); */
            operand1 = "";
            operand2 = "";
            operator = "";
            plug = 1;
    } 

    if (isNumeric(element) && plug == false)  {
        operand2 += element;
        document.getElementById("display_text-2").innerHTML = operand1 + " " + operator + " " + operand2;
    } 
    console.log(operand1);
    console.log(operator);
    console.log(operand2);   
}

function Reset() {
    document.getElementById("display_text-2").innerHTML = x;
    operand1 = "";
    operand2 = "";
    operator = "";
    plug = 1;
}
/* function exit() {
    window.open('','_self').close()
} */
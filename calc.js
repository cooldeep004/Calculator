let button = document.getElementsByClassName("button");
let display = document.getElementById("text");
let pdisplay = document.getElementById("ptext");
let input1 = 0;
let op1 = 0;
let op2 = 0;
let operator;
let flag = true;
let t = '';
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('calc-value');

        if (value != 'Ac' && flag) {
            display.innerText = "PRESS AC";
            flag = false;
        }
        else {

            if (value == 'ac')
             {
                t = '';
                op1 = 0;
                op2 = 0;
                flag = false;
                display.innerText = '';
            }

            else if (value == '+') 
            {
                if (t != 'ac')
                    t = t + value;
                if (op1 == 0) {
                    op1 = parseFloat(display.innerText);
                }
                else {

                    op1 = eval(op1 + " " + operator + " " + parseFloat(display.innerText));
                }
                display.innerText="";
                operator = value;
            }
            else if (value == '-') 
            {
                if (t != 'ac')
                    t = t + value;
                if (op1 == 0) {
                    op1 = parseFloat(display.innerText);
                }
                else {

                    op1 = eval(op1 + " " + operator + " " + parseFloat(display.innerText));
                }
                display.innerText="";
                operator = value;
            }
            else if (value == '*') 
            {
                if (t != 'ac')
                    t = t + value;
                if (op1 == 0) {
                    op1 = parseFloat(display.innerText);
                }
                else {

                    op1 = eval(op1 + " " + operator + " " + parseFloat(display.innerText));
                }
                display.innerText="";
                operator = value;
            }
            else if (value == '/')
             {
                if (t != 'ac')
                    t = t + value;
                if (op1 == 0) {
                    op1 = parseFloat(display.innerText);
                }
                else {

                    op1 = eval(op1 + " " + operator + " " + parseFloat(display.innerText));
                }
                display.innerText="";
                operator = value;
            }
            else if (value == '=')
             {
                op2 = parseFloat(display.innerText);
                var result = eval(op1 + " " + operator + " " + op2);

                display.innerText = result;
                op1 = 0;
                op2 = 0;
                t = '';
                pdisplay.innerText = result;
                t = result;
            }

            else {
                if (t != 'ac')
                    t = t + value;
                display.innerText += value;
            }

        }
        if (t != 'ac') {
            pdisplay.innerText = t;
        }
    });


}
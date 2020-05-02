let buffer = 0;
let oldBuffer = 0;

let op = '';


function refresh() {
    document.getElementById('new-result').innerHTML = buffer;
    document.getElementById('old-result').innerHTML = oldBuffer;
    
}

function append(number) {
    buffer *= 10;
    buffer += number;
    refresh();
}

function clear(){
    buffer = 0;
    refresh();
}


function operate(operator){
    op = operator;
    oldBuffer = buffer;
    buffer = 0;
    refresh();
}
function calculate(){

    switch(op){
        case '+':
            buffer +=oldBuffer
            break;
        case '-':
            buffer = oldBuffer-buffer
            break;
        case '*':
            buffer *= oldBuffer
            break;
        case '/':
            buffer = oldBuffer/buffer;
            break;
        default:
            return;
    }
    refresh();
}


document.getElementById('1').addEventListener('click', () => {append(1)})
document.getElementById('2').addEventListener('click', () => {append(2)})
document.getElementById('3').addEventListener('click', () => {append(3)})
document.getElementById('4').addEventListener('click', () => {append(4)})
document.getElementById('5').addEventListener('click', () => {append(5)})
document.getElementById('6').addEventListener('click', () => {append(6)})
document.getElementById('7').addEventListener('click', () => {append(7)})
document.getElementById('8').addEventListener('click', () => {append(8)})
document.getElementById('9').addEventListener('click', () => {append(9)})
document.getElementById('0').addEventListener('click', () => {append(0)})

document.getElementById('+').addEventListener('click', () => {operate('+')})
document.getElementById('-').addEventListener('click', () => {operate('-')})
document.getElementById('*').addEventListener('click', () => {operate('*')})
document.getElementById('/').addEventListener('click', () => {operate('/')})
document.getElementById('C').addEventListener('click', () => {clear()})
document.getElementById('=').addEventListener('click', () => {calculate()})
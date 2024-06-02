
let display = document.querySelector('.display');
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');
let getTime = document.querySelector('.getTime');
let clearTime = document.querySelector('.clearTime');
let output = document.querySelector(".output");


let currTime = 0;

let intervalId = null;

const startTime = () => {

    if(intervalId){
        return;
    };
    intervalId = setInterval(() => {
        display.innerText = ++currTime;
        // console.log(currTime);
    },1000);
};

const stopTime = () => {
    clearInterval(intervalId);
    intervalId = null;
};

start.addEventListener('click', () => {
    startTime();
});

stopBtn.addEventListener('click', () => {
    stopTime();
});

reset.addEventListener('click', () => {
    currTime = 0;
    display.innerText = currTime;
    stopTime();
});

getTime.addEventListener('click', () => {
    let innerOutputDiv = document.createElement('div');
    // innerOutputDiv.classList.add('innerDiv');
    innerOutputDiv.innerHTML = `${currTime} seconds is elapsed.`;
    output.append(innerOutputDiv);

    output.scrollTop = output.scrollHeight;
});

clearTime.addEventListener('click', () => {
    output.innerHTML = '';
})

'use strict'
function func1(){
    console.log('func1() 함수 호출');
}

const Hello1 = function(){
    console.log('Hello1 함수 호출');
}

function func2(x){
    for(let i=1;i<=x;i++){
        console.log('func2() 함수 호출');
    }
}

const cal = function(num1=1, num2=2){
    console.log(`${num1} + ${num2} = ${num2 + num2}`);
    console.log(`${num1} - ${num2} = ${num2 - num2}`);
    console.log(`${num1} * ${num2} = ${num2 * num2}`);
    console.log(`${num1} / ${num2} = ${num2 / num2}`);
}

function func3(x1,x2,...x3){
    console.log(`x1의 값 : ${x1}`);
    console.log(`x2의 값 : ${x2}`);
    console.log(`x3의 값 : ${x3}`);
}

const jumsu = function(...jum){
    for(let i of jum){
        console.log(i);
    }
}

function func4(start, end){
    let sum = 0;
    for (let i = start; i <= end; i++) {
       sum += i;
    }
    return sum;
}

const Hello2 = () => console.log('안녕하세요. JavaScript'); 
const Hello3 = (x, y) => x + y;

const Hello4 = (x, y) => {
    let sum = 0;
    for(let i=x;i<=y;i++){
        sum += i;
    }
    return sum;
}
const Hello5 = (x, y) => { x + y }; //{}를 사용하면 return키워드를 반드시 사용해야 합니다.
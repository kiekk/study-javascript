function func1(){
    console.log('func1 함수가 호출되었습니다.');
}
function func2(x){
    console.log(`전달된 값 : ${x}`);
}
function func3(x){
    let sum = 0;
    for(let i=1; i<=x; i++){
        sum += i;
    }
    console.log(`1 부터 ${x}까지의 총합은 ${sum}입니다.`);
}
function func4(x, y){
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}
function func5(x=1, y=1){
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}
function func6(x, ...y){
    for(let i=0; i< y.length; i++){
        console.log(y[i]);
    }
}
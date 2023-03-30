let f1 = document.querySelector('.f-1');

function one() {
    console.log('work')
};

one(); // вызов функции 

// f1.onclick = one; // вызов функции по нажатию кнопки без скобок

f1. onclick = () => { // анонимная 
    console.log('Hello');
}

console.log(1 + one ()); // NaN
console.log(one ()); // undefined

function two () {
    console.log('work 2')
    return 54;
}

two ();

console.log(1 + two ());

let a = 8;
let b = 9;

function multi() {
    console.log( a * b)
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log (c1, c2)

function multi2 (x = 9, y = 8) { // присвоение параметров по дефолту
    return x * y;
    //не выполняется
}

console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(4, a));

document.querySelector('.f-2').onclick = () => {
    console.log ('+++++');
};

function f4 (a, b) {

}

(a,b) => {

}

function f5 (a) {
    console.log (a);
}

a => {

}

function f6 (b) {
    return 56*b;
}

(a) => 'hello'* a;
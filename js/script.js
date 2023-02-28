console.log('Hello!'); // stroki berem v kovichki
console.log("Hello world!");
console.log('333');
console.log(334);
console.log('Hello'+' '+'world!');
console.log("Liutsiia")
console.log('Добро '+'пожаловать '+' на курс')

// alert('hello')
// alert(2019-200)

document.getElementById('out').innerHTML = "Hello";
document.getElementById('out').innerHTML = 2022;
document.getElementById('out').innerHTML = '<b>2023</b>';
document.getElementById('one').innerHTML= "Hello World"
document.getElementById('two').innerHTML= 12*12

document.querySelector('.header').innerHTML =  15;
document.querySelector('.one').innerHTML =  "Hello World";

// Task 11
// Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
let f = document.querySelector('.four');
f.innerHTML = '<h4> lorem </h4>';
f.innerHTML += '<p> Voluptates libero, consectetur nulla enim, sunt similique autem, rerum ex iure sequi porro totam optio praesentium necessitatibus laudantium suscipit blanditiis et vitae!</p>'


// Task 12
// Создайте div с классом five. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let a = document.querySelector('.five');
a.innerHTML = 3.1415


// Task 13
// Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку:

// <img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
// Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками.

let div7 = document.querySelector(".seven");
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">'



// Task 14
// Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
let z1 = 6;
let z2 = 3;
document.querySelector('.multi').innerHTML = z1*z2;


// Task 15
// Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.

let y1 = 6, y2 =3;
document.querySelector('.division').innerHTML = y1/y2;

// Task 16
// Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.


let x1 ='Hello', x2 = 5;

document.querySelector('.sum').innerHTML = x1 + x2;

// Task 17
// Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.
let d1 = document.querySelector('.test-1');
console.log(d1);


// Task 18
// Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.

let d2 = document.querySelector('.test-2');
console.log(d2);
d2=5;
console.log(d2);

// Task 19
// Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.
 let divS3 = document.querySelector('.s3');
 console.log(divS3);
 divS3 = document.querySelector('.s4');
 
 console.log(divS3);

//  Task 20
// Получите c помощью querySelector тег body. С помощью innerHTML присвойте ему пустую строку (...innerHTML = ''). Изучите что произошло. Закомментируйте этот код.

// document.querySelector('body').innerHTML = '';

// document.getElementById('world').innerHTML = "world"
// let b;
// let a = document.querySelector('#one');
// let c;
// c = document.querySelector('.header');

// a.innerHTML = 9999;
// c.innerHTML = 6666;

const firstArray = [{ "id": 4, "name": "Tata" }, { "id": 11, "name": "Maruti" }, { "id": 14, "name": "Mahindra" } ], 
      secondArray = [{ "id": 4, "name": "Tata" }, { "id": 11, "name": "Maruti" }, { "id": 15, "name": "Hyundai" }, { "id": 21, "name": "Honda" } ],
      result = firstArray.filter(o => secondArray.some(({id,name}) => o.id === id && o.name === name)).length;
console.log(result);
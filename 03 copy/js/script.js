// Task 1.

// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

// Input i-1

const button = document.querySelector('.b-1')
const input = document.querySelector('.i-1');

button.onclick = () => {
    let num = +input.value
    if (num==4) {
        document.querySelector('.out-1').innerHTML = "true";
    } else {
        document.querySelector('.out-1').innerHTML = "false";
    }
}

// Task 2.

// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

const b2 = document.querySelector('.b-2');
const a21 = document.querySelector('.a21');
const a22 = document.querySelector('.a22');

b2.onclick =() => {
    let a1 = +a21.value;
    let a2 = +a22.value;
    if (a1>a2){
        document.querySelector('.out-2').innerHTML = a1;
    } else {
        document.querySelector('.out-2').innerHTML = a2;
        
    }
}

// Task 3.

// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.

// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

const b3 = document.querySelector('.b-3');
const i31 = document.querySelector('.i-31');
const i32 = document.querySelector('.i-32');

b3.onclick =() => {
    let i1 = +i31.value;
    let i2 = +i32.value;
    if (i1>i2){
        document.querySelector('.out-3').innerHTML = i1;
    } else {
        document.querySelector('.out-3').innerHTML = i2;
        
    }
}

// Task 4.

// Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

const b4 = document.querySelector('.b-4');
const i4 = document.querySelector('.i-4');

b4.onclick =() => {
    let n4 = 2023 - i4.value;
    if (n4>=18){
        document.querySelector('.out-4').innerHTML = 1;
    } else {
        document.querySelector('.out-4').innerHTML = 0;
        
    }
}


// Task 5.
// Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

const b5 = document.querySelector('.b-5');
const i5 = document.querySelector('.i-5');

b5.onclick =() => {
    let n5 =i5.value;
    if (n5< 0){
        document.querySelector('.out-5').innerHTML = "m";
    } else  if (n5 == 0){
        document.querySelector('.out-5').innerHTML = 0;
        
    } else {
        document.querySelector('.out-5').innerHTML = 1;

    }
}

// Task 6.

// Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.

const b6 = document.querySelector('.b-6');
const i6 = document.querySelector('.i-6');

b6.onclick =() => {
    let n6 =i6.value%2;
    if (n6 == 0){
        document.querySelector('.out-6').innerHTML = "even"; 
    } else {
        document.querySelector('.out-6').innerHTML = "odd";

    }
}

// Task 7.

// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.

const b7 = document.querySelector('.b-7');
const i71 = document.querySelector('.i-71');
const i72 = document.querySelector('.i-72');
b7.onclick = () => {
    let n71 = i71.value;
    let n72 = i72.value;
document.querySelector('.out-7').innerHTML = Math.pow(n71,n72)
}

// Task 8.

// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

const b8 = document.querySelector('.b-8');
const s8 = document.querySelector('.s-8');
b8.onclick = () => {
    let n8=+s8.value;
    switch(n8) {
        case 1: 
            document.querySelector('.out-8').innerHTML = "one";
            break;
        case 2: 
            document.querySelector('.out-8').innerHTML = "two";
            break;
        case 3: 
            document.querySelector('.out-8').innerHTML = "three"
            break;
    }
}


// Task 9.

// Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.

// если от 1 до 32 - то вывести цифру 1
// если от 33 до 43 - то вывести 2
// если от 44 до 64 - то 3.
// В противном случае, вывести 0.

const b9 = document.querySelector('.b-9');
const i9 = document.querySelector('.i-9');
b9.onclick = () => {
    let n9=+i9.value;
    if ( n9>=1 && n9<=32) {
        document.querySelector('.out-9').innerHTML = 1
    } else if (n9<=43){
        document.querySelector('.out-9').innerHTML = 2
    } else if (n9<=64) {
        document.querySelector('.out-9').innerHTML = 3
    } else {
        document.querySelector('.out-9').innerHTML = 0
    }
}
       
// Task 10.

// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

const b10 = document.querySelector('.b-10');
const s100 = document.querySelector('.s-100');
b10.onclick = () => {
    let n10 = s100.value;
    document.querySelector('.out-10').innerHTML = n10;
}

// Task 11.

// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

const s110 = document.querySelector('.s-110');
s110.onchange = () => {
    let n11 = s110.value;
    document.querySelector('.out-11').innerHTML = n11;
}


// Task 12.

// Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

const i120 = document.querySelector('.i-120');
const b12 = document.querySelector('.b-12');
b12.onclick = () => {
    n12 = i120.value;
    document.querySelector('.out-12').innerHTML = typeof n12
}

// Task 13.

// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

const i130 = document.querySelector('.i-130');
const b13 = document.querySelector('.b-13');
b13.onclick = () => {
    n13 = i130.value;
    document.querySelector('.out-13').innerHTML = typeof n13
}

// Task 14.

// Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14.

function f14 () {
    const i141 = +document.querySelector('.i-141').value;
    const i142= +document.querySelector('.i-142').value;
    const s143= document.querySelector('.s-143').value;
    let out14 = document.querySelector('.out-14');
    switch(s143) {
        case "+" :
            out14.innerHTML = i141+i142;
            break;
        case "-" :
            out14.innerHTML = i141-i142;
            break;
        case "*" :
            out14.innerHTML = i141*i142;
            break;
        case "/" :
            out14.innerHTML = i141/i142;
            break;
    }
}
document.querySelector('.b-14').onclick = f14;
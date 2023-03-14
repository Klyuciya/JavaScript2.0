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
    let x = 0;
    let n8=+s8.value;
    switch(n8) {
        case 1: 
            document.querySelector('.out-8').innerHTML = 1;
            break;
        case 2: 
            document.querySelector('.out-8').innerHTML = 2;
            break;
        case 3: 
            document.querySelector('.out-8').innerHTML = 3
            break;
    }
}


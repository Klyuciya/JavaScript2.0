// Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

function t1 () {
    let out1 = '';
    for (let i = 1; i <= 50; i++) {
        out1 += i + " ";
    }
    document.querySelector('.out-1').innerHTML = out1;
}

document.querySelector('.b-1').onclick = t1;

// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2 () {
    let out2 = '';
    for (let i = 2; i <= 122; i= i+2) {
        out2 += i + " ";
    }
    document.querySelector('.out-2').innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;
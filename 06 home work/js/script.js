// Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

let out1 = document.querySelector('.out-1');

for(let i = 0; i < 3; i++) {
    for ( let j = 0; j < 3; j++){
        out1.innerHTML += '*'
    }
    out1.innerHTML += '_'
}

// Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

let out2 = document.querySelector('.out-2');

for(let i = 1; i <= 3; i++) {
    out2.innerHTML += `${i}<br>`
    for ( let j = 0; j < 1; j++){
    out2.innerHTML += `*_*_*_<br>`
    }
}

// Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки, знак подчеркивания.

let out3 = document.querySelector('.out-3');

for(let i = 0; i <= 3; i++) {
    for ( let j = 0; j < 1; j++){
    out3.innerHTML += `*_*_*_`
    }
    out3.innerHTML += `<br>`
}

// Task 4
// С помощью вложенных циклов, нарисуйте строку:
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5

let out4 = document.querySelector('.out-4');

for(let i = 1; i <= 3; i++) {
    out4.innerHTML += `${i}_1 `
    for ( let j = 2; j < 6; j++){
    out4.innerHTML += `${j} `
    }
}

// Task 5
// С помощью вложенных циклов, нарисуйте строку:
// 101010
// 101010
// 101010
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.

let out5 = document.querySelector('.out-5');

for(let i = 1; i <= 3; i++) {
    for ( let j = 0; j < 6; j++){
        if ((j%2)== 0){
            out5.innerHTML += `1`
        } else {
            out5.innerHTML += `0`
        }
    }
    out5.innerHTML += `<br> `
}

// Task 6
// С помощью вложенных циклов, нарисуйте строку:
//  10x01x
//  10x01x
//  10x01x
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.

let out6 = document.querySelector('.out-6');

for(let i = 1; i <= 3; i++) {
    for ( let j = 0; j < 6; j++){
        if ((j == 0) || (j == 4)){
            out6.innerHTML += `1`
        } else if ((j == 1) || (j == 3)){
            out6.innerHTML += `0`
        } else {
            out6.innerHTML += `x`
        }
    }
    out6.innerHTML += `<br> `
}

// Task 7
// *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.

let out7 = document.querySelector('.out-7');

for(let i = 1; i <= 4; i++) {
    for ( let j = 0; j < i; j++){
        out7.innerHTML += `*`
    }
    out7.innerHTML += `<br> `
}
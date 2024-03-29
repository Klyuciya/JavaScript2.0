// Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

function f1 () {
    let str1 = ''; 
    let out1 = document.querySelector('.out-1');

    for(let i = 0; i < 3; i++) {
        for ( let j = 0; j < 3; j++){
            str1 += '*'
        }
        str1 += '_'
    }
    out1.innerHTML = str1;
        }

document.querySelector('.b-1').onclick = f1;

// Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

function f2 () {
    let str2 = ''; 
    let out2 = document.querySelector('.out-2');

    for(let i = 1; i <= 3; i++) {
        str2 += `${i}<br>`
        for ( let j = 0; j < 1; j++){
            str2 += `*_*_*_<br>`
        }
    }
    out2.innerHTML = str2;
    }

document.querySelector('.b-2').onclick = f2;

// Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки, знак подчеркивания.

function f3 () {
    let str3 = ''; 
    let out3 = document.querySelector('.out-3');

    for(let i = 0; i <= 3; i++) {
        for ( let j = 0; j < 1; j++){
            str3 += `*_*_*_`
        }
        str3 += `<br>`
    }
    out3.innerHTML = str3;
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// С помощью вложенных циклов, нарисуйте строку:
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5

function f4 () {
    let str4 = '';  
    let out4 = document.querySelector('.out-4');
    for(let i = 1; i <= 3; i++) {
        str4 += `${i}_1 `
        for ( let j = 2; j < 6; j++){
            str4 += `${j} `
        }
    }
    out4.innerHTML = str4;
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// С помощью вложенных циклов, нарисуйте строку:
// 101010
// 101010
// 101010
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.

function f5 () {
    let str5 = '';  
    let out5 = document.querySelector('.out-5');             
    for(let i = 1; i <= 3; i++) {
        for ( let j = 0; j < 6; j++){
            if ((j%2)== 0){
                str5 += `1`
            } else {
                str5 += `0`
            }
        }
        str5 += `<br> `
    }
    out5.innerHTML = str5;
    }

document.querySelector('.b-5').onclick = f5;
// Task 6
// С помощью вложенных циклов, нарисуйте строку:
//  10x01x
//  10x01x
//  10x01x
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.
function f6 () {
    let out6 = document.querySelector('.out-6');
    let str6 = '';               
    for(let i = 1; i <= 3; i++) {
        for ( let j = 0; j < 6; j++){
            if ((j == 0) || (j == 4)){
                str6 += `1`
            } else if ((j == 1) || (j == 3)){
                str6 += `0`
            } else {
                str6 += `x`
            }
        }
        str6 += `<br> `
    }
    out6.innerHTML = str6;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.

function f7 () {
    let out7 = document.querySelector('.out-7');
    let str7 = '';               
    for(let i = 1; i <= 4; i++) {
        for ( let j = 0; j < i; j++){
            str7 += `*`
        }
        str7 += `<br> `
    }
    out7.innerHTML = str7;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// С помощью вложенных циклов, нарисуйте строку:
// *****
// ****
// ***
// **
// *
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки.

function f8 () {
    let out8 = document.querySelector('.out-8');
    let str8 = '';               
    for(let i = 5; i >= 1; i--) {
        for ( let j = 0; j < i; j++){
            str8  += `*`
        }
        str8  += `<br> `
    }
    out8.innerHTML = str8;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// С помощью вложенных циклов, нарисуйте строку:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры

function f9 () {
    let out9 = document.querySelector('.out-9');
    let str9 = '';               
    for(let i = 1; i <= 5; i++) {
        for ( let j = 1; j <= i; j++){
            str9 += `${j} `
        }
        str9 += `<br> `
    }
    out9.innerHTML = str9;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// С помощью вложенных циклов, нарисуйте строку:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// Внешний цикл выводит перенос строки br и запускается от 0 до 6.
// Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.

function f10() {
    let out10 = document.querySelector('.out-10');
    let str10 = '';
    for ( let i = 0; i < 5; i++) {
        for ( let j = 1; j < 11; j++) {
            if (j !== 10) {
                str10 += `${i}${j} `
            } else {
                str10 += `${(i+1) * j} `
            }
        }
        str10 +=  `<br>`
    }
    out10.innerHTML = str10;
}

document.querySelector('.b-10').onclick = f10;

// 1	
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.


function f11 () {
    let out11 = document.querySelector('.out-11');
    let str11 = '';
    for (let i = 1; i < 10; i++ ) {
        for ( let j = 1; j < 10; j++) {
            str11 += `${i} * ${j} = ${i*j} <br>`
        }
        str11 += `<br>`
    }
    out11.innerHTML = str11;
}
document.querySelector('.b-11').onclick = f11;


// 2
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    *****
//    *****

function f12 () {
    let out12 = document.querySelector('.out-12');
    let str12 = '';
    for (let i = 0; i < 3; i++ ) {
        for ( let j = 0; j < 5; j++) {
            str12 += `*`
        }
        str12 += `<br>`
    }
    out12.innerHTML = str12;
}
document.querySelector('.b-12').onclick = f12;

// 3
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    ****
//    ***
//    **
//    *

function f13 () {
    let out13 = document.querySelector('.out-13');
    let str13 = '';
    for (let i = 5; i > 0; i-- ) {
        for ( let j = 0; j < i; j++) {
            str13 += `*`
        }
        str13 += `<br>`
    }
    out13.innerHTML = str13;
}
document.querySelector('.b-13').onclick = f13;

// 4
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *****
//    *****

function f14 () {
    let out14 = document.querySelector('.out-14');
    let str14 = '';
    for (let i = 0; i < 3; i++ ) {
        switch (i) {
            case 0: 
                str14 += `&nbsp&nbsp&nbsp&nbsp`;
                break;
            case 1:
                str14 += `&nbsp&nbsp`;
                break;
        }
        for ( let j = 0; j < 5; j++) {
        str14 += `*`
        }
        str14 += `<br>`
    }
    out14.innerHTML = str14;
}
document.querySelector('.b-14').onclick = f14;

// 5
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
//    **
//    *

function f15 () {
    let out15 = document.querySelector('.out-15');
    let str15 = '';
    for (let i = 1; i < 6; i++ ) {
        for ( let j = 0; j < i; j++) {
        if ((i == 5 && j > 0) || (i == 4 && j > 1)) break;
        str15 += `*`
        }
        str15 += `<br>`
    }
    out15.innerHTML = str15;
}
document.querySelector('.b-15').onclick = f15;

// 6
// С помощью вложенных циклов и символа * нарисуйте:
	// ******
	// *       *
	// *       *
	// *       *
    // ******

function f16 () {
    let out16 = document.querySelector('.out-16');
    let str16 = '';
    for (let i = 0; i < 5; i++ ) {
        str16 += `*`
        for ( let j = 0; j < 4; j++) {
            if ((i == 0) || (i == 4)) {
                str16 += `*`;
            } else
            str16 += `&nbsp&nbsp&nbsp`;
        }
        str16 += `*<br>`
    }
    out16.innerHTML = str16;
}
document.querySelector('.b-16').onclick = f16;
        
// 7
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

function f17 () {
    let out17 = document.querySelector('.out-17');
    let str17 = '';
    for (let i = 0; i < 5; i++ ) {
        for ( let j = 5; j > i; j--) {
            str17 += `${j-i} `;
        }
        str17 += `<br>`
    }
    out17.innerHTML = str17;
}
document.querySelector('.b-17').onclick = f17;
        
// 8
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

function f18 () {
    let out18 = document.querySelector('.out-18');
    const max = 5
    let str18 = "";
    for (let i = 1; i <= max; i++ ) {
        str18 += "  ".repeat(max-i)
        for ( let j = i; j >= 1 ; j--) {
            str18 += `${j} `;
        }
        str18 += "</br>"
    }
    out18.innerHTML = str18 ;
}
document.querySelector('.b-18').onclick = f18;

// 9
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

function f19 () {
    let out19 = document.querySelector('.out-19');
    const max = 5
    let str19 = "";
    for (let i = 1; i <= max; i++ ) {
        str19 += "X ".repeat(max-i)
        for ( let j = i; j >= 1 ; j--) {
            str19 += `${j} `;
        }
        str19 += "</br>"
    }
    out19.innerHTML = str19 ;
}
document.querySelector('.b-19').onclick = f19;

// 10
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5

function f20 () {
    let out20 = document.querySelector('.out-20');
    const max = 5
    let str20 = "";
    for (let i = 1; i <= max; i++ ) {
        for ( let j = i; j >= 1 ; j--) {
            str20 += `${i} `;
        }
        str20 += "</br>"
    }
    out20.innerHTML = str20 ;
}
document.querySelector('.b-20').onclick = f20;

// 11	
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1

function f21 () {
    let out21 = document.querySelector('.out-21');
    let str21 = "";
    for (let i = 5; i >= 1; i-- ) {
        for ( let j = i; j < 6 ; j++) {
            if (i%2 == 0) {
                str21 += `X `;
            } else {
                str21 += `${i} `;
            }
        }
        str21 += "</br>"
    }
    out21.innerHTML = str21 ;
}
document.querySelector('.b-21').onclick = f21;

// 12
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *******
//    *********

function f22 () {
    let out22 = document.querySelector('.out-22');
    let str22 = "";
    let max = 0;
    for (let i = 0; i < 3; i++ ) {
        switch (i) {
            case 0: 
                str22 += `&nbsp&nbsp`;
                max = 5;
                break;
            case 1:
                str22 += `&nbsp`;
                max = 7
                break;
            default:
                max = 9;
        }
        for ( let j = 0; j < max  ; j++) {
            str22 += `*`;
        }
        str22 += "</br>"
    }
    out22.innerHTML = str22 ;
}
document.querySelector('.b-22').onclick = f22;

// 13
// С помощью вложенных циклов и символа * нарисуйте:
//      **
//     ****
//    ******
//     ****
//      **

function f23 () {
    let out23 = document.querySelector('.out-23');
    let str23 = "";
    let max = 0;
    for (let i = 0; i < 5; i++ ) {
        switch (i) {
            case 0: 
            case 4: 
                str23 += `&nbsp&nbsp`;
                max = 2;
                break;
            case 1:
            case 3:
                str23 += `&nbsp`;
                max = 4
                break;
            default:
                max = 6;
        }
        for ( let j = 0; j < max  ; j++) {
            str23 += `*`;
        }
        str23 += "</br>"
    }
    out23.innerHTML = str23 ;
}
document.querySelector('.b-23').onclick = f23;
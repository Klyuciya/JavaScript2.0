// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

document.querySelector('.b-1').onclick =  () => {
    alert("Task 1");
}

// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

document.querySelector('.b-2').onclick =  () => {
    alert("Task 2");
}

// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

document.querySelector('.p-3').onclick =  () => {
    alert("Task 3");
}

// Task 4
// Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
document.querySelector('.b-4').onclick = () => {
    let i4 = document.querySelector('.i-4');
    if (i4.checked){
        document.querySelector('.out-4').innerHTML = true;
    } else {
        document.querySelector('.out-4').innerHTML = false;
    }
}

// Task 5
// Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.

document.querySelector('.b-5').onclick = () => {
    let i5 = document.querySelector('.i-5');
    if (i5.checked){
        document.querySelector('.out-5').innerHTML = i5.value;
    } else {
        document.querySelector('.out-5').innerHTML = false;
    }
}

// Task 6
// Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.
document.querySelector('.b-6').onclick = () => {
let i6 = document.querySelector('.i-6');
document.querySelector('.out-6').innerHTML = i6.value;
}

// Task 7
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
document.querySelector('.b-7').onclick = () => {
    let i7 = document.querySelector('.i-7').value;
    document.querySelector('.out-71').innerHTML = i7;
    if ( i7.length >= 6){
        document.querySelector('.out-72').innerHTML = 1;
    } else {
        document.querySelector('.out-72').innerHTML = 0;
    }
}

// Task 8
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.
function f81 () {
    let i81 = document.querySelector('.i-81').value;
    document.querySelector('.out-81').innerHTML = i81;

}

document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').innerHTML = 
    '<input type="text" class="i-81"> <button class="b-81">ok</button><div class="out-81"></div>'
    document.querySelector('.b-81').onclick = f81;
}


// Task 9
// Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.

document.querySelector('.b-9').onclick = () => {
    let r9 = document.querySelector('.r-9');
    if (r9.checked){
        document.querySelector('.out-9').innerHTML = r9.value;
    } else {
        document.querySelector('.out-9').innerHTML = 0;
    }
}

// Task 10
// Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

document.querySelector('.b-10').onclick = () => {
    let i10 = document.querySelector('.i-10').value;
    document.querySelector('.out-10').style.backgroundColor = i10;
}


// Task 11
// Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

document.querySelector('.b-11').onclick = () => {
    let i111 = document.querySelector('.i-111').value;
    document.querySelector('.i-112').value = i111;
}


// Task 12
// Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.

document.querySelector('.b-12').onclick = () => {
    let i12 = document.querySelector('.i-12').value;
    document.querySelector('.out-12').innerHTML= i12;
}

// Task 13
// Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

document.querySelector('.i-13').oninput = () => {
    document.querySelector('.out-13').innerHTML= document.querySelector('.i-13').value;
}

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

document.querySelector('.b-14').onclick = () => {
    let t14 = document.querySelector('.t-14').value;
    document.querySelector('.out-14').innerHTML= t14;
}

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

document.querySelector('.b-15').onclick = () => {
    let i15 = document.querySelector('.i-15').value;
    let t15 = document.querySelector('.t-15');
    t15.value = i15;
    document.querySelector('.out-15').innerHTML= i15;
}

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

document.querySelector('.b-16').onclick = () => {
    let s16 = document.querySelector('.s-16').value;
    document.querySelector('.out-16').innerHTML= s16;
}

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17 (){
    let s17 = document.querySelector('.s-17').value;
    document.querySelector('.out-17').innerHTML= s17;
}

document.querySelector('.s-17').onchange = f17;


// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

function f18 (){
    let s18 = document.querySelector('.s-18').value;
    document.querySelector('.i-18').value= s18;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

document.querySelector('.b-19').onclick = (event) => {
    event.preventDefault ();    // отключаем перегружение страницы
    let form = document.querySelector('form');
    let i191 = form.elements[0].value;
    let i192 = form.elements[1].value;
    document.querySelector('.out-19').innerHTML= i191 + " " + i192;
}

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

document.querySelector('.b-20').onclick = (event) => {
    event.preventDefault ();    // отключаем перегружение страницы
    let form = document.querySelector('.f-20').elements;
    let text = form[0].value;
    let password = form[1].value;
    document.querySelector('.out-20').innerHTML= text+ " " + password;
}
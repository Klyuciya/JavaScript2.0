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

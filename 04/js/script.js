// Pasword
document.querySelector('.b-1').onclick =  () => {
    console.log(document.querySelector('.one').value);
}

// Color

document.querySelector('.b-2').onclick =  () => {
    console.log(document.querySelector('.color').value);
    // style
    document.querySelector('.b-2').style.backgroundColor = 
    document.querySelector('.color').value;
}

// Date

document.querySelector('.b-3').onclick =  () => {
    console.log(document.querySelector('.date').value);
}

// Range

document.querySelector('.b-4').onclick =  () => {
    console.log(document.querySelector('.range').value);
}

document.querySelector('.range').oninput =  () => {
    console.log(document.querySelector('.range').value);
    document.querySelector('.out-4').innerHTML = document.querySelector('.range').value
}

// Checkbox

document.querySelector('.b-5').onclick =  () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked)
    if(myCheckBox.checked){
        console.log('Нажат')
    } else {
        console.log('Не нажат')
    }
}

// Textarea

document.querySelector('.b-6').onclick =  () => {
    let t6 = document.querySelector('#t-6');
    console.log(t6.value)
    t6.value = 'thanks'
}


// Form

document.querySelector('.b-7').onclick =  (event) => {  // передаем параметр
    event.preventDefault ();    // отключаем перегружение страницы
    let form = document.querySelector('form');
    console.log(form)
    console.log(form.elements.textarea.value);
    console.log(form.elements.input.value);


}

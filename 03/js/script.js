let a = 6;

// >= <= == !=
// if (a > 9){
//    // true
//    console.log("Yes");
// }
// else {
//     console.log("else")
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');


// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 39) {
        console.log ("Welcome!!!");
    }
    else if (num > 39) { 
        console.log(" Ты точно сюда? ");
    }
    else {
        console.log ("Ты не пройдешь!!!")
    }

    switch (num) {
        case 15:
            console.log("Еще год потерпи!");
            break;
        case 16:
            console.log("Уже можно!!!");
            break;
        default:
            console.log('oook');
    }
}

let b = 5;

console.log(b > 3 && b < 7); // && - и  || - или
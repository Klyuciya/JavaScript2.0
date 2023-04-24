let a  = 'John';
let b = '37';
let z = 'Aries'; 

let c = ['John', 37, 'Aries'];
let d = [];
console.log(c[0]);
console.log(c[1]);
console.log(c[5]);
console.log(c)
console.log(c.length)

c[0] = 'Sergio'
console.log(c)


let n = [1, 2, 3, 4];
console.log(n);

let t = n[0];
n[0] = n[ n.length - 1];
n[n.length - 1] = t;
console.log(n);

// for (let i = 0; i < n.length; i++) {
//     document.querySelector('.out-1'). innerHTML += n[i] + ' ';
// }


let out = '';
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        out += n[i] + ' ';
    }
}
document.querySelector('.out-1'). innerHTML = out;
// max
let q = [94, 2, 5, 23, 43, 1, 2, 6, 12];
let max = q[0];
for ( let i = 1; i < q.length; i++) { 
    if ( q[i] > max){
        max = q[i];
    }
}
console.log('max:' + max);
// min
let min= q[0];
for ( let i = 1; i < q.length; i++) { 
    if ( q[i] < min){
        min = q[i];
    }
}
console.log('min:' + min);
// sum

let sum = 0;
for ( let i = 0; i < q.length; i++) { 
        sum = sum + q[i];
}
console.log('sum:' + sum);

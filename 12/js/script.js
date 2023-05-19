let a = [4,5,6]
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log (b);
//  for ( let i = 0; i < b.length; i++) {
//     //  console.log(b[i]);
//      let c = b[i];
//      for ( let k = 0; k < c.length; k++) { 
//          console.log (c[k])
//      }
//  }
let out1 = '';
 for ( let i = 0;  i < b.length; i++) {
     for( let k = 0; k < b[i].length; k++) {
         console.log ( b[i][k]);
         out1 += b[i][k]+ " "
     }
     out1 += "<br>"
 }

 document.querySelector(".out-1").innerHTML = out1;


let out2 = ''
 for ( let i = 0;  i < b.length; i++) {
    for( let k = 0; k < b[i].length; k++) {
        if ( b[i][k] > 4){
        out2 += b[i][k]+ " "
        }
    }
    out2 += "<br>"
}

document.querySelector(".out-2").innerHTML = out2;


let d = [1,0,0,0,0];
let k = 0;
document.querySelector('button').onclick = () => {
    if (k+1 < 5){
d[k] = 0;
d[k+1] = 1
k++;}
document.querySelector('.out-3').innerHTML = d;
}
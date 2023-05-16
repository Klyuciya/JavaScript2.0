const a = [1, 2, 3, 4, 5, 6, 7 ,8, 9];
const b = ['a', 'b', 'c', 'd']

console.log(a.length)
console.log(a.push(10, 11, 12, 13));
console.log(a);

b.push('e', 'f');
console.log(b)

b.pop();
console.log(b)

// delete

delete a[3];
console.log(a)

a.splice(3,3, 'hi');
console.log(a)


//shift unshift
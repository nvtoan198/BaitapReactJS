// Bai 1:
var arr = [0, 5, 4, 2, 8];
var sum = 0;

for (let i = 0; i < 5; i++ ){
    sum = sum + arr[i];
}

console.log('Bai 1: Sum = ', sum);


// Bai 2:
const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 }
]

var personNew = person.map(function (n) {
    return n.name;
})

console.log('Bai 2:', personNew)


// Bai 3: 
var arr1 = ['John', 'Pete', 'Mary']
var arr2 = ['Mary', 'Henry', 'Harry']
var arr3 = arr1.concat(arr2);

console.log('Bai 3:',[...(new Set(arr3))]);
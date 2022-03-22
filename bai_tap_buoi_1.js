// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
// Input: [0, 5, 4, 2, 8]
// Output: 19

// bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
// Input: const person = [
// 	{ name: 'John', age: 24 },
// 	{ name: Pete, age: 25 },
// 	{ name: Mary', age: 28 }
// ]

// Output: ['John', 'Pete', 'Mary'].

// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
// Input:	arr1 = ['John', 'Pete', 'Mary']
// 	arr2 = ['Mary', 'Henry', 'Harry']

// Output: ['John', 'Pete', 'Mary', 'Henry']

// Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.
// Bai 1:
var arr = [0, 5, 4, 2, 8];
var sum = 0;

for (let i = 0; i < 5; i++ ){
    sum = sum + arr[i];
}
console.log('Tong mang: ', sum);

// Bai 2:
const person = [
    { name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 },
];
let result = [];
let i = 0;
do {
    i++;
    result = result.concat(person.[i.name]);
} while (i < 3);
console.log('Tong mang: ', result);

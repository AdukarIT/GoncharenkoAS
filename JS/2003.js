// function sayHello() {
// 	console.log('Hello world!')
// }
// // sayHello();
// // sayHello();     // вызов функции

// function sayHello(name) {
// 	console.log('Hello' + name + '!')
// }
// // sayHello(' world');      // sayHello(''); -- undefind

// let a = ' world';
// sayHello(a);
// console.log(a);


// function square(x) {
// 	return x * x;
// 	console.log('blablalba');  // не работает после  return 
// }

// let result = square(8);
// console.log(result);

// console.log(square(7));

// let cube = function(x = 1) {
// 	return x*x*x ;
// }

// console.log(cube(7));
// console.log(cube());


// function sumThreeNumbers(a,b,c) {
// 	return a + b + c;
// }

// console.log(sumThreeNumbers(1,2,3));

// function sum(arr) {
// 	return arr.reduce(function(rex, curr) {
// 		return res+curr;
// 	});
// }

// function range(start, end) {
// 	let arr = [];
// 	for (; start <= end; start++) {
// 		arr.push(start);
// 	}
// 	return arr;
// }

// console.log(sum(range(1,10)));


// function sumOneToX(x) {
// 	let sum = 0;
// 	for (let i = 1; i <= x; i++)
// 		sum += i;
// 	return sum
// }


// console.log(sumOneToX(10));


function sumD(num) {
	let sum = 0;
	let current;
	while (num > 0) {
		current = num % 10; 
		num = (num - current) / 10;
		sum += current;
	}
	return sum;
}

console.log(sumD(2431));







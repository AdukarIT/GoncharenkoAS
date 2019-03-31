// let arr = [];
// let numberSArray = [1,2,3,4,5];

// let a = new Array(2,3,4);	// значение масива
// let b = new Array(10);     //  кол масивов

// console.log(numberSArray[0]);
// console.log(numberSArray[3]);

// numberSArray[3] = 10;

// console.log(numberSArray[3]);
// console.log(numberSArray);

// numberSArray[5] = 99;

// console.log(numberSArray);

// console.log(numberSArray.length);  // длинна масива

// numberSArray[6] = 42;

// console.log(numberSArray.length);

// numberSArray.[numberSArray.lenght] = 22;
// numberSArray.[4] = 22;

// numberSArray.push(55);
// console.log(numberSArray);

// let lastElement = numberSArray.pop();
// console.log(lastElement);
// console.log(numberSArray);

// let firstElement = numberSArray.shift();
// console.log(firstElement);
// console.log(numberSArray);


// for (let i = 0; i < numberSArray.length; i++)
// 	console.log(numberSArray[i]);

// let powersOfTwo = [];

// for (let i = 0; i <= 9; i++)
	// powersOfTwo[i] = 2 ** i;
	// powersOfTwo.push(2 ** i);

// console.log(powersOfTwo);

// for (let i = 1; i <= 10; i++)
	// powersOfTwo[i-1] = 2 ** i;
	// powersOfTwo.push(2 ** i);

	// let twoDimArray = [[1,2,3],[1,2,3],[1,2,3]];
	// console.log(twoDimArray);
	// console.log(twoDimArray[1][1]);



// let numbers = [];

// for (let x = 1; x <=20; x++) {
// 	if (!(x % 2)) {
// 		numbers.push(x);
// 	}
// }

// console.log(numbers);





// let arr = new arr[10];
// for (let i = 0; i < arr.length; i++)
// 	arr[i] = i * 5;

// console.log(arr);


// console.log(arr.join('/'));

// let str = ['dawdawd,dawdadawd,dawdawdawd,dawdawdawd,dawdad'];

// let cities = str.split(', ',2);
// console.log(cities);


let a = +prompt('a');
let b = +prompt('b');
let c = +prompt('c');

let arr = [a,b,c];

let more;

if (a >= b && a >= c) {
	console.log(a);
	more = a;
} else if (b >= c) {
	console.log(b);
	more = b;
} else {
	console.log(c);
	more = c;
}

for (let x = 1; x < arr.length; x++) {
	console.log(x / more)
}






















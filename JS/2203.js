// function some(a,b) {
// 	let c = a + b;
// 	let d = 34;
// 	console.log(d);
// 	return c / a;
// }


// for (let y = 0; y < 3; y++) {
// 	console.log(y);
// }

// console.log(y);
// let x = some(3,2);
// let d = 3;
// console.log(d);

// console.log(x);
// console.log(c);


// var x = 1;

// function joke() {
// 	console.logsome(2,3);
// }
// joke();





// function parent(param) {
// 	param++;
// 	child();

// 	function child() {
// 		console.log(param);
// 		param++;
// 	}
// 	console.log(param);
// }
// parent(1);



// function recursivePower(base, exp) {
// 	if (exp > 1)
// 		return base * recursivePower(base, exp-1);
// 	return base;
// }

// console.log(recursivePower(2, 4));


// function isItTriangle(a, b, c) {
// 	if (a <= 0 || b <= 0 || c <= 0) {
// 		return false;
// 	}
// 	return (a*a + b*b == c*c);
// }

// let x = prompt('Введите число');
// let y = prompt('Введите число');
// let z = prompt('Введите число');

// if (isItTriangle(x, y, z)) {
// 	console.log('треугольник прямоугольный');
// } else {
// 	console.log('треугольник не очень');
// }

// function repeat(input, count) {
// 	let result = '';
// 	for (let i = 0; i < count; i++)
// 		result += input;
// 	return result;
// }

// console.log(repeat('ба', 3));

let studs = +prompt("Studs");
let desks = +prompt("Desks");

function checkDesk(studs, desks) {
	let result = studs % desks;
	if (result == 0) {
		console.log('Well done');
	} else if (result == 1){
		console.log('не хватает 1 парты');
	} else {
		console.log('Не хватает парт');
	}
}
checkDesk(studs, desks);










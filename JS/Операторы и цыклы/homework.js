

// Вывод большего числа из двух


// let first = +prompt('Введите первое число');     // Number(prompt('Введите первое число'));
// let second = +prompt('Введите второе число');

// if (first > second) {
// 	console.log(first);
// } else {
// 	console.log(second);
// }



// Получить два числа, вывести в консоль знак их произведения.



// let first = +prompt('Введите первое число');
// let second = +prompt('Введите второе число');

// if (first * second >= 0) {
// 	console.log("+");
// } else {
// 	console.log("-");
// }



// Получить три числа, вывести их в консоль в порядке возрастания.

// let a = +prompt('Введите первое число');     
// let b = +prompt('Введите первое число'); 
// let c = +prompt('Введите первое число'); 

// let first;
// let second;
// let therd;

// if (a >= b && a >= c) {
// 	console.log(a);
// } else if (b >= c) {
// 	console.log(b);
// } else {
// 	console.log(c);
// }



// Переписать задачу 1, заменив if на тернарный оператор.


// let first = +prompt('Введите первое число');     
// let second = +prompt('Введите второе число');
// (first > second) ? console.log(first) : console.log(second);


// Получить число. Используя switch, вывести в консоль сообщение: для чисел от 1 до 5 – разные, для остальных – одинаковое.



// let input = +prompt("Введите число от 1 до 5");
// 	switch (input) {
// 		case '1':
// 			console.log("Вы ввели 1");
// 			break;
// 		case '2':
// 			console.log("Вы ввели 2");
// 			break;
// 		case '3':
// 			console.log("Вы ввели 3");
// 			break;
// 		case '4':
// 			console.log("Вы ввели 4");
// 			break;
// 		case '5':
// 			console.log("Вы ввели 5");
// 			break;
// 		default:
// 		console.log('Вы ввели что-то не то');
// }


// Вывести в консоль все простые числа от 2 до x.

// let x = prompt('x');

// for (let i =2; i <= x; i++) {
// 	let j;
// 	for (j = 2; j < i; j++) {
// 		if (!(i % j)) {
// 			break;
// 		}
// 	}								// алгоритм нахождения простых чисел
// 	if (j == i) {
// 		console.log(j);
// 	}
// }



// Вывести в консоль все чётные числа от x до 0 (в порядке убывания).


// let x = +prompt('x');

// for (; x >= 0; x--) {
// 	if (!(x % 2)) {
// 		console.log(x);
// 	}
// }

// let x = +prompt('x');

// while (x > 0) {
// 	x--; 
// 	if (!(x % 2)) {
// 		console.log(x);
// 	}
// }




















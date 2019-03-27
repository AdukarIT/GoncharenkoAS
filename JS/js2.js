// let x = 1;
// let y = 0;

// if (x > 1 || y > 1) {
// 	console.log("больше");
// 	console.log("уруру");
// } else {
// 	console.log("обы не больше");
// }

// let z = "1";
// if (!isNaN(z)) {
// 	console.log("это не число");
// }

// let age = 16;
// if (age < 17) {
// 	console.log("Привет молодеж!")
// }

// let password = "123456";
// let input = prompt('Введите пароль...', "23");

// if (password == input)
// console.log("совпало");
// else
// 	console.log("not");

// (password == input) ? console.log("совпало") : console.log("не совпало");

// let string = (password == input) ? "совпало" : "не совпало";
// console.log(string);


// let input = prompt('vvedite chislo ot 1 do 4');

// switch(input) {
// 	case '1':
// 		console.log('vi vveli 1');
// 		break;
// 	case '2':
// 		console.log('vi vveli 2');
// 		break;
// 	case '3':
// 	case '4':
// 		console.log('vi vveli 3');
// 		break;
// 	default:
// 		console.log('vi vveli ne to');
// }


// let first = +prompt('Введите первое число');  Number(prompt('Введите первое число'));
// let second = +prompt('Введите второе число');

// if (first > second) {
// 	console.log(first);
// } else {
// 	console.log(second);
// }

// let first = +prompt('Введите первое число');
// let second = +prompt('Введите второе число');

// if (first * second >= 0) {
// 	console.log("+");
// } else {
// 	console.log("-");
// }


// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 0; i < 10; i++)
// 	console.log(i);

// let i = 28;

// while (i < 10) {
// 	console.log(i);
// 	i++;
// }
	

// do {
// 	console.log(i);
// 	i++;
// } while (i < 10);

// console.log('finished')

// for (let i = 0; i < 10; i++) {
// 	if (i == 7)
// 		continue;

// 	console.log(i);
// }

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


// let x = +prompt('x');

// for (; x > 0; x--) {
// 	if (!(x % 2)) {
// 		console.log(x);
// 	}
// }

let x = +prompt('x');

while (x > 0) {
	x--; 
	if (!(x % 2)) {
		console.log(x);
	}
}












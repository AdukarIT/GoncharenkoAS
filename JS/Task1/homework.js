
// Ноера квартир

// let flat = +prompt('Введите номер квартиры');

// if (flat > 100) {
// 	console.log('такой квартиры нет в этом доме');
// } else if (flat < 1) {
// 	console.log('такой квартиры нет в этом доме');
// } else if (flat <= 20) {
// 	console.log('это первый подьезд');
// } else if (flat <= 40 ) {
// 	console.log('это второй подьезд');
// } else if (flat <= 60) {
// 	console.log('это трейтий подьезд');
// } else if (flat <= 80) {
// 	console.log('это четвертый подьезд');
// } else if (flat <=100) {
// 	console.log('это пятый подьезд');
// }




//  Страны производители Авто




// let x = String(prompt('Введите марку авто'));

// switch (x) {
// 	case 'BMW':
// 		console.log(x + ' – страна происхождения Германия');
// 		break;
// 	case 'Mersedes':
// 		console.log(x + ' – страна происхождения Германия');
// 		break;
// 	case 'Ford':
// 		console.log(x + ' – страна происхождения США');
// 		break;
// 	case 'Peugeot':
// 		console.log(x + ' – страна происхождения Франция');
// 		break;
// 	case 'Reno':
// 		console.log(x + ' – страна происхождения Франция');
// 		break;
// 	case 'Audi':
// 		console.log(x + ' – страна происхождения Германия');
// 		break;
// 	case 'Lada':
// 		console.log(x + ' – страна происхождения Россия');
// 		break;
// 	default:
// 		console.log(x + ' – страна происхождения неизвестна');
// }




// Высокосный год



// let x = Number(prompt('Введите любой год'));

// if (x %= 4) {
// 	console.log('Этот год не высокосный');       // Не совсем понимаю как работает остаток, 
// } else {										 // просто поменял местами и теперь все хорошо :)
// 	console.log('Этот год высокосный');
// }




// Таблица умножения 



// let x = prompt("Введите число от 1 до 20");
// if (x < 1 || x > 20) {
// 	console.log("Введите число от 1 до 20");
// } else {
// 	let i; 
// 	console.log("Таблица умножения для числа", x);
// 		for (i = 1; i <= 10; i++) {
// 			console.log(x + "*" + i + "=" + x * i);
// 	}
// }



// Сумма нечетных чисел до 50


// let sum = 0;
// for (let x = 1; x < 50; x += 2) {
//     sum += x;
//     continue;
// }
// console.log(sum);



//  Числа Фибаначе


// let a = 0, b = 1;
// let c = a + b;

// for ( ;;){
// 		console.log(a);
// 		console.log(b);
// 		console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// a = b, b = c;
// c = a + b;
// 	console.log(c);
// 	break;
// }
	
//Решение по проще)

// let x = 0;
// let y = 1;
// let f;

// console.log(x);
// console.log(y);

// for (i = 2; i < 15; i++) {
// 	f = x + y;
// 	console.log(f);
// 	x = y;
// 	y = f;
// }

//Шахматная доска


// let x = " # # # #";
// let y = "# # # #";
// 	for (let i = 1; i <= 8; i++) {
// 		if (i % 2 == 0) { 
//     		console.log(x);
//   		} else if (i % 2 != 0) {
//     		console.log(y);
//   		}
// }










































































































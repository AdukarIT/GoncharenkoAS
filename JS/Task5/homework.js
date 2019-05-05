//Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый. 
//Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. 
//initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения. 
//Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, то floor = true, 
//а ceil = false. Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19, 
//тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.

//Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых.

// function random(len, max) {
//     let array = [];
//     for (let i = 0; i < len; i++) {
//         array[i] = Math.round(Math.random() * max);  
//     } return array;
// }
// console.log(random(4, 6));
// function newArr(arr) {
// 	for (let i = 0; i < arr.length; i++) {
//     arr[i] = {
//       initial: arr[i],
//       floor: Math.round(arr[i]) == Math.floor(arr[i]),
//       ceil: Math.round(arr[i]) == Math.ceil(arr[i]),
//       sqrt1: Math.sqrt(arr[i]),
//       sqrt2: Math.round(Math.sqrt(arr[i]) * 100) / 100
//       // sqrt2: Math.round(Math.sqrt(arr[i])).toFixed(2)
//     }
//   }
//   return arr;
// }
// console.log(newArr(random(3, 10)));

//Напишите функцию, которая определяет, является ли строка палиндромом.

// function Palindrom(smt) {
//     let result = '';
//     for (let i = 0; i < smt.length; i++) {
//       if (smt[i] === smt[smt.length - 1 - i]) {
//         result = 'yes';
//       } else {
//         result = 'no';
//         return result;
//       }
//     }
//     return result;
//   }

//   console.log(Palindrom('aba'));
//   console.log(Palindrom('abc'));


//Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. 
//Если таких символов несколько, функция должна возвращать строку из этих символов.


// function repeatLetters(str) {
// let letters = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])) {
//       letters += str[i];
//     }
//   } return letters;
// }
// console.log(repeatLetters("dkjrghj"));

//Напишите функцию, которая получает в аргументы три строки – str, search, replace. 
//Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.

// function myName (str, search, replace) {
// 	if ( str.indexOf(search) > -1) {
// 		str = str.replace(search, replace);
// 	}
// 	return str;
// }
// console.log(myName("Меня завут Андрей", "Меня завут", "Мое имя"));


//Напишите функцию, которая заменяет первую букву каждого слова в строке на такую же большую.


// function ucFirst(str){
// 	let first = "";
// 	for (let i = 0; i < str.length; i++) {
// 		if (i == 0 || str.charAt(i) !== " " && str.charAt(i - 1) == " ") {
// 			first += str[i].toUpperCase();
// 		} else {
// 			first += str.charAt(i);
// 		}
//  }
//  return first;
// }
// console.log(ucFirst("все начинается с большой буквы"));


//Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. 
//Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

// function insertingStars(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] == str[j] && str[j] != " ") {
// 				str = str.slice(0, j) + "*" + str.slice(j + 1, str.length);
// 			}
// 		}
// 	}
// 	return str;
// }
// console.log(insertingStars("eExeeE11аапп, я учусь программированию"));



//Напишите функцию, которая возвращает текущий день недели на русском языке.


// function weekDay() {

// 	let day = new Date();

// 	switch (day.getDay()) {
// 		case 0: 
// 			console.log('Воскресенье');
// 			break;
// 		case 1: 
// 			console.log('Понедельник');
// 			break;
// 		case 2: 
// 			console.log('Вторник');
// 			break;
// 		case 3: 
// 			console.log('Среда');
// 			break;
// 		case 4: 
// 			console.log('Четверг');
// 			break;
// 		case 5: 
// 			console.log('Пятница');
// 			break;
// 		case 6:
// 			console.log('Суббота');
// 			break;
// 	}
// }
// weekDay();



//Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, 
//используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.


// function weekDay() {

// 	let userDate = prompt("Введите дату dd-mm-yyyy");
// 	let day = new Date(userDate);

// 	switch (day.getDay()) {
// 		case 0: 
// 			console.log('Воскресенье');
// 			break;
// 		case 1: 
// 			console.log('Понедельник');
// 			break;
// 		case 2: 
// 			console.log('Вторник');
// 			break;
// 		case 3: 
// 			console.log('Среда');
// 			break;
// 		case 4: 
// 			console.log('Четверг');
// 			break;
// 		case 5: 
// 			console.log('Пятница');
// 			break;
// 		case 6:
// 			console.log('Суббота');
// 			break;
// 	}
// }
// weekDay();




// Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения.
//Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).


// function theDaysQuantity() {

// 	let nowDay = new Date();
// 	let userDate = prompt("Введите день рождения dd-mm-yyyy");

// 	let birthDay = new Date(userDate);																				// пока не понимаю как работает, чет сложнА
	
// 	let birthDayInThisYear = new Date(nowDay.getFullYear(), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
// 	let closeBirthDay = Math.round((birthDayInThisYear - nowDay) / 1000 / 60 / 60 / 24);
// 	console.log(closeBirthDay + " дней осталось до ближайшего дня рождения");
// 	let years = Math.round((nowDay - birthDay) / 1000 / 3600 / 24 / 365);
// 	let anniversary = Math.round(100 - years);
// 	console.log(anniversary + " лет осталось до 100-летнего юбилея");

// }
// theDaysQuantity();



//Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так, 
//функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку.
//Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, 
//отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах.
//Массив должен быть пройден до конца, несмотря на ошибки!


// function sqrt(n) {
// 	try {
// 		if (Math.sqrt(n) == Math.round(Math.sqrt(n))) {
// 			console.log(Math.sqrt(n));
// 		} else {
// 			throw new Error("Из "+ n + " нет корней");
// 		}
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// }
// sqrt();

// function random(len, max) {
//     let array = [];
//     for (let i = 0; i < len; i++) {
//         array[i] = Math.round(Math.random() * max);  
//     } console.log(array);
// 		for (let i = 0; i < array.length; i++) {
//     	array[i] = sqrt(array[i]);
//     }
// }
// console.log(random(4, 6));












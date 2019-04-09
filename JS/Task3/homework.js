
// Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), которая возвращает массив случайных чисел длиной len.


// let getRandomArray = new Array(10); 

// function getRandomIntInclusive(min, max, Array) {
// 	for (i = 0; i < Array.length; i++) {
// 		Array[i] = Math.floor((Math.random() * (max - min + 1)) + min);     // РАНДОМ ДЛЯ ЦЕЛЫХ ЧИСЕЛ
// 	}
// 	console.log(Array); 
// }

// getRandomIntInclusive(1, 10, getRandomArray);


// function getRandomIntInclusive(min, max, Array) {
// 	for (i = 0; i < Array.length; i++) {
// 		Array[i] = (Math.random() * (max - min + 1)) + min;          // РАНДОМ ДЛЯ ЧИСЕЛ С ТОЧКОЙ
// 	}
// 	console.log(Array); 
// }
// getRandomIntInclusive(0, 1, getRandomArray);


// Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.


// function summ() {
// 	let sum = 0;
// 	for (let i = 0; i < getRandomArray.length; i++) {
// 		sum += getRandomArray[i];
// 	}
// 	console.log(sum);
// 	let result = sum / getRandomArray.length;
// 	console.log(result);

// 	for (let i = 0; i < getRandomArray.length; i++) {
// 		if (result > getRandomArray[i]) {
// 			console.log(getRandomArray[i] + '');
// 		}
// 	}
// }
// summ();


//Найдите два наименьших элемента массива.


// let minArray = Math.min(...getRandomArray);
// let maxArray = Math.max(...getRandomArray);

// console.log(minArray);
// console.log(maxArray);


//Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.

// function minNumber() {
// 	for (let i = 0; i < getRandomArray.length; i++) {
// 		if (getRandomArray[i] < 0.3) {
// 			delete getRandomArray[i];
// 			getRandomArray.push(0);
// 		}
// 	}
// }

// console.log(minNumber());


//Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2, второй массива 1 с предпоследним массива 2 и так далее. 
//Верните массив с результатами сложения.


let firstArray = [3,5,4,2];
let secondArray = [6,1,2,4];
let thirdArray = [];

function sumArray() {
	for (let i = 0; i < firstArray.length; i++) {       // Работает не совсем правильно
		secondArray.reverse();
		thirdArray.push(firstArray[i] + secondArray[i]);
	}
}
sumArray();
console.log(thirdArray);
secondArray.reverse();
console.log(secondArray[1]);
















// 1 . Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.// function moreNumber(first, second, therd) {// 	if (first >= second && first >= therd) {// 		return(first);// 	} else if (second >=therd) {// 		return(second);// 	} else {// 		return(therd);// 	}// }//  console.log(moreNumber(5, 9, 2));// 2. Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.// function time(hour, min) {// 	return hour * 60 ** 2 + min * 60;// }// console.log(time(1,2));// 3. Напишите рекурсивную функцию для подсчёта факториала числа.// function rek(x, n) {//   if (n != 1) {                  //     return x * rek(x, n - 1);//   } else {//     return x;//   }// }// console.log(rek(2,3));// 4. Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. Например, если на вход функция получает 1234, вернуть она должна 4321.// Рекурсия// function reverseString(str) {//   if (str === "")//     return "";//   else//     return reverseString(str.substr(1)) + str.charAt(0);    // }// console.log(reverseString("4321"));// Цикл// function reverseString(str) {//     let newString = "";//     for (let i = str.length - 1; i >= 0; i--) {         //         newString += str[i];//     }//     return newString;// }// console.log(reverseString('4321'));// 5. Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль. // Примечание 1. Ищем только решения в действительных числах, комплексные не нужны! // Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().// function obj(a,b,c) {//     let d = ((b*b) + 4*(a * c));// 	    if (d > 0) {// 	            let k = Math.sqrt(d);// 	            let x1;// 	            let x2;// 	            console.log(x1 = (-b - k)/(2 * a));// 	            console.log(x2 = (-b + k)/(2 * a));// 	     	   	return('Два корня');// 	    }// 	    if (d == 0) {// 	    	let s;// 	    	console.log(s = (-b)/(2 * a));// 	            return('Олин корень');// 	    } // 	    if (d < 0) {// 	    	return('Нет корней');// 	    } // }// console.log(obj(2, 2, -5)); 
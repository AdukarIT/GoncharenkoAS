// (function() {

// let elem = document.createElement("div"),
// 	content = document.createTextNode("блаблабла"),
// 	pDiv = document.querySelector("p");

// elem.appendChild(content);
// elem.setAttribute('class', 'www');

// pDiv.parentNode.appendChild(elem);

// }) ();

// 1 Дан элемент #elem. Добавьте ему класс "www".

// (function() {

// 	let el = document.getElementById("elem");
// 	// console.log(el);
// 	el.classList.add("www");
// 	// el.setAttribute('class', 'www');
// }) ();

// 2 Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

// (function() {

// 	let el = document.getElementById("elem");
	
// 	if (el.classList.contains('www') == true) {
// 		el.classList.remove('www');
// 	}

// }) ();


// 3 Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

// (function() {

// 	let elem = document.getElementsByTagName("body");
// 	let el = elem[0].getElementsByTagName("*");

// 	// console.log(el);

// }) ();

// 4 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
// Сделайте так, чтобы четные позиции имели красный фон.
 

// (function() {

// 	let arr = [5,3,10],
		
// 		 el = document.querySelector("ul");

// 		for (let i = 0; i < arr.length; i++) {
// 			elem = document.createElement("li");
// 			elem.innerHTML = arr[i];
// 			el.appendChild(elem);						// Работает для li которые добавил, не знаю как сделать на все li

// 			if (i % 2) {
// 				elem.setAttribute("class", "red");
// 			};
// 		};

// console.log(el);

// }) ();


// 5 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'


// (function() {

// 	let el = document.getElementById("elem");
// 	el.previousSibling.previousSibling.innerHTML = "!";
// 	console.log(el);

// }) ();


// 6 Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) 
//внутри элемента div и оборачивает текст в параграф

function wrapInParagraph() {
	let el = document.getElementById("elem");
	console.log(el);
	let el1 = el.childNodes;
	console.log(el1);
	let el2 = el1[0];
	console.log(el2);
	el2.createElement('p');

	for (i = 0; i < el1.length;i++) {
		if (el1.nodeType == 3)
		textNode.push(el1(i));
		console.log();
	}

}

wrapInParagraph();








// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://reqres.in/api/users", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
//     let pars = JSON.parse(xhr.responseText);

//    for (let i = 0; i < pars.data.length; i++) {
// 		let arr = pars.data[i].id;
//     	let second = new XMLHttpRequest(); 

// 		second.open("GET", "https://reqres.in/api/users/" + arr, true);
// 		second.onload = function(){
// 		    let pars1 = JSON.parse(second.responseText);
// 		    console.log(pars1);
// 		}
//     second.send();
// 	};
// };
// xhr.send();

// document.body.appendChild(second);





















// (function() {

// let elem = document.createElement("div"),
// 	content = document.createTextNode("блаблабла"),
// 	pDiv = document.querySelector("p");

// elem.appendChild(content);
// elem.setAttribute('class', 'www');

// pDiv.parentNode.appendChild(elem);

// }) ();

// 1 Дан элемент #elem. Добавьте ему класс "www".

(function() {

	let el = document.getElementById("elem");
	// console.log(el);
	el.classList.add("www");
	// el.setAttribute('class', 'www');
}) ();

// 2 Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

(function() {

	let el = document.getElementById("elem");
	
	if (el.classList.contains('www') == true) {
		el.classList.remove('www');
	}

}) ();


// 3 Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

(function() {

	let elem = document.getElementsByTagName("body");
	let el = elem[0].getElementsByTagName("*");

	// console.log(el);

}) ();




let xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/users", true);
xhr.onload = function(){
    console.log(xhr.responseText);
    let pars = JSON.parse(xhr.responseText);

   for (let i = 0; i < pars.data.length; i++) {
		let arr = pars.data[i].id;
    	let second = new XMLHttpRequest(); 

		second.open("GET", "https://reqres.in/api/users/" + arr, true);
		second.onload = function(){
		    let pars1 = JSON.parse(second.responseText);
		    console.log(pars1);
		}
    second.send();
	};
};
xhr.send();

document.body.appendChild(second);





















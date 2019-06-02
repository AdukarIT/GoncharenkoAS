

/////   ЗАПОЛНЕНИЕ ТАБЛИЦЫ

function addItem() {
	localStorage.setItem(
		"INFO", 
		JSON.stringify(DATA)
	)
}

let get = JSON.parse(localStorage.getItem("INFO"));



// ДОБАВЛЯЕМ СТРОКУ


let tr = document.createElement('tr');
	tr.id = "infophone"

let namePhones = document.createElement('td');
	namePhones.className = 'name-phones';

		

function addPhone() {
	var parentElem = document.querySelector("tbody");
		parentElem.insertBefore(tr, parentElem.children[1]);
}	

  var td = document.querySelectorAll('tr'[1]);
 		 td.appendChild("td");

addPhone();
console.log(td);





////// ИЗМЕНЕНИЕ ДАННЫХ 

function editItem() {


} 



function deleteItem() {
	localStorage.clear();
}


// let imagePhones = document.getElementsByClassName('img-phones');

// for (let i = 0; i < imagePhones.length; i++) {
// 	imagePhones[i].style.background = get[i].link;    
// }

// let namePhones = document.getElementsByClassName('name-phones');

// for (let i = 0; i < namePhones.length; i++) {
// 	namePhones[i].innerHTML = get[i].name;    
// }



// let countryPhone = document.getElementsByClassName('country-phones');

// for (let i = 0; i < countryPhone.length; i++) {
// 	countryPhone[i].innerHTML = get[i].country;
// }

// let madeDate = document.getElementsByClassName('made-date');

// for (let i = 0; i < madeDate.length; i++) {
// 	madeDate[i].innerHTML = get[i].year;
// }


// let memoryPhone = document.getElementsByClassName('memory-phone');

// for (let i = 0; i < memoryPhone.length; i++) {
// 	memoryPhone[i].innerHTML = get[i].memory;
// }

// let cameraPhone = document.getElementsByClassName('camera-phone');

// for (let i = 0; i < cameraPhone.length; i++) {
// 	cameraPhone[i].innerHTML = get[i].camera;
// }

// let pricePhone = document.getElementsByClassName('price-phone');

// for (let i = 0; i < pricePhone.length; i++) {
// 	pricePhone[i].innerHTML = get[i].price;
// }








 //запишем его в хранилище по ключу "myKey"

// var returnObj = JSON.parse(localStorage.getItem("myKey"));




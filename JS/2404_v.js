addEventListener('DOMContentLoaded', function() {
	console.dir(document.forms.exampleForm.elements.lang);

	console.log(document.getElementById('country').form);

	console.log(document.getElementById('country').value)

	let form = document.forms.exampleForm;

	let newOption = new Option('Латвия', 'lv', false, true);
	document.getElementById('country').appendChild(newOption);

	form.elements.submit.addEventListener('click', function(e) {
		e.preventDefault();
		console.log(this.form.elements.lang.value);
		[].slice.apply(document.getElementById('country').children).forEach(function(opt) {
			console.log(opt.innerText + ': ' + opt.selected);
		});
	});

	form.addEventListener('change', function(e) {
		console.log(e.target);
		console.dir(e);
	});

// 	form.elements.name.addEventListener('input', function(e) {
// 		/*console.log(e.target);
// 		console.dir(e.data);*/
// 		if (!(/\w/.test(e.data))) {
// 			this.value = this.value.slice(0, -1);
// 		}
// 	});

// 	let re = /^\w$/gi;
// 	let reFancy = new RegExp('^\w$','gi');
// 	console.clear();
// 	//let newRegExp = /^.{0,2}\d{3,}[^а-яё]{2}$/g;
// 	/*\d+ \d{1,}
// 	\d? \d{0,1}
// 	\w* \w{0,}*/
// 	let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
// 	lorem = lorem.replace(/[,.]/g, '').split(' ');
// 	//console.log(lorem);

// 	let letterM = /[aouiye]$/g;
// 	lorem.forEach(function(str) {
// 		if (str.search(letterM) != -1)
// 			console.log(str);
// 	});

// 	let points = /\w{2}(\w)/;
// 	console.clear();

// 	let ex = /(['"])(.*?)\1/g;
// 	let testString = 'осозн"анность\' преж"де\'все\'г\'о.....';
// 	//console.log(testString.match(points));
// 	console.log(testString.match(ex));

// 	let strWithNumbers = 'какая-то 3 строка 0 -3.22 с числами 93.11 внутри';

// 	let numRE = /^([1-9]+\d*|\d+\.\d+)$/;

// 	strWithNumbers.split(' ').forEach(function(subst) {
// 		if (subst.search(numRE) != -1)
// 			console.log(subst);
// 	});
// });
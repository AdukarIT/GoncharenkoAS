// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// };

// console.log(obj.c);
// console.log(obj['c']);

// for (let prop in obj) {
// 	console.log(obj[prop]);
// };


// let city = {
// 	name: 'Minsk',
// 	population: 1992685
// };

// // console.log(city);



let citys = [
	{
		name: 'Minsk',
		population: 1992685,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	},
	{
		name: 'Gomel',
		population: 536938,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	},
	{
		name: 'Mogilev',
		population: 383313,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	},
	{
		name: 'Vitebsk',
		population: 378459,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	},
	{
		name: 'Grodno',
		population: 373547,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	},
	{
		name: 'Brest',
		population: 350616,
		getInfo: function() {
			console.log('В городе ' + this.name + ', ' + 'население - ' + this.population)
		}
	}
];


function piples(citys) {
	for (let i = 0; i < citys.length; i++) {
		// console.log(citys[i]);
		// console.log('В городе ' +  citys[i].name + ' живет ' +  citys[i].population)
		citys[i].getInfo();
	}
}


piples(citys);


let me = {
	name: 'Andrei',
	surname: 'Goncharenko',
	hobbies: 'bicycle',
	myInfo: function() {
		console.log('Меня зовут ' + this.name + ' ' + this.surname + ', я катаюсь на ' + this.hobbies )
	}
}

me.myInfo();











/*let man = {};

man.name = 'Vasily';
man.age = 46;
man.hobbies = ['cinema', 'bikes'];*/
/*let arr = {};
arr['0'] = 5;
arr['1'] = 8;
arr[1] = 6;
console.log(arr);*/

let man = {
	name: 'Vasily',
	age: 46,
	hobbies: ['cinema', 'bikes'],
	work: function() {
		console.log('я работаю');
	},
	favColor: 'yellow'
};

console.log(man.age);
console.log(man.hobbies);

man.age = 78;

console.log('age' in man);
console.log('birthday' in man);
console.log(man.birthday);

console.log(man.age);
console.log(man['age']);
man['surname'] = 'Udarnik';
console.log(man.surname);

//man['place of birth'] = 'Hrodna';
//console.log(man['place of birth']);


console.log(man);
let prop = 'surname';
console.log(man[prop]);
console.log(man.prop);

delete man['age'];

console.log(man);

for (let propertyName in man) {
	console.log(propertyName);
	console.log(man[propertyName]);
}

let man2 = man;

man2.name = 'Vitaly';
console.log(man);

/*let sameMan = {
	hobbies: ["cinema", "bikes"],
	name: "Vitaly",
	surname: "Udarnik"
};

console.log(man == sameMan);*/

console.log({} == {});

console.log(man == man2);

let sameMan = {};

for (let prop in man)
	sameMan[prop] = man[prop];

console.log(sameMan);

/*
{
	name: 'Минск',
	population: 2000000
}
В городе Минск живёт 2000000 человек.*/
/*
man.work = function() {
	console.log('я работаю');
}
*/
man.work();

console.clear();

/*let arr = ['a', 'b', 'c'];
console.log(typeof arr);

console.log(arr['1']);

let arr2 = arr;

arr2[1] = 'd';
console.log(arr[1]);

function something() {
	console.log('something out');
}

console.log(typeof something);*/


function sayHello() {
	console.log('привет! я ' + this.name + ' ' + this.surname);
};

man.sayHello = sayHello;

let student = {
	name: 'Anna',
	surname: 'Karamzina',
	address: {
		city: 'Malaryta',
		street: 'Lenina'
	},
	sayHi: function() {
		console.log('привет! я ' + this.name + ' ' + this.surname);
	}
};

//student.sayHi = sayHello;

man.sayHello();
student.sayHi();

let student2 = student;
student = null;

student2.sayHi();
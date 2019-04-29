//Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, 
//есть ли в этом объекте свойство с именем, равным этой строке.


// let car = {
// 	name: "reno",
// 	model: "clio",
// 	age: 10
// };
	
// function check(object, string) {
// 	if (string in object) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(check(car, "model"));


//Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта),
//а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.

// let favoriteRecipe = {
// 	name: "Dumplings",
// 	ingredients: {
// 		Flour: 8, 
// 		Milk: 200, 
// 		Water: 200,
// 		Egg: 2,
// 		Meat: 800,
// 		Onion: 6
// 	},
// 	Servings: 2
// };

// let onePortion = {};

// function ingredientsForPortion(favoriteRecipe) {
// 	for(let set in favoriteRecipe.ingredients) {
// 		onePortion[set] = favoriteRecipe.ingredients[set] / favoriteRecipe.Servings;
// 	}
// 	return onePortion;
// }

// console.log(ingredientsForPortion(favoriteRecipe));


//Task 3 Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

// let cylinder = {
// 	radius: 2,
// 	height: 5,
// 	Volume: function () {
// 		return 3.14 * (this.radius ** 2) * this.height
// 		}
// 	}
// console.log(cylinder.Volume());


//Task 4 Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник).
//Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина,
//и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.

// let penguin = {
//   name: "Chilly Willy",
//   autor: "Пол Джей Смит",
//   studio: "Walter Benjamin Lantz",
//   sourse: "cartoon",
//   canFly: false,	
//   sayHello: function() {
//     return console.log("Привет, я " + this.name);
//   },
//   fly: function() { 
//     if (this.canFly == true) {
//       return console.log("Я умею летать");
//     } else {
//       return console.log("Я не умею летать");
//     }
//   }
// };
// penguin.sayHello();
// penguin.fly();





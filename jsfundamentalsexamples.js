// // this gives us undefined
// console.log(jay);
// var jay = "hello";

// what the computer reads:
// var jay;
// console.log(jay);
// jay = "hello";

// // the fine and correct way
// var jay = "hello";
// console.log(jay);

// function hoisting example
// eat();
// function eat() {
// 	console.log("YUM");
// }

// what the computer reads:
// function eat() {
// 	console.log("YUM");
// }
// eat();

// variable function example
// var eat = function() {
// 	console.log("YUM");
// }
// eat();

// what the computer reads
// var eat;
// eat();
// eat = function() {
// 	console.log("YUM")
// }


// var dinner = {
// 	eat: function() {
// 		console.log("YUM");
// 	}
// };
// dinner.eat();

// var dinner;
// dinner.eat();
// dinner = {
// 	eat: function() {
// 		console.log("YUM");
// 	}
// };

// var main = "Turkey";
// var side = "Stuffing";
// console.log("I like", main, "and", side); // runs fine
// eat();
// console.log("Now give me the", side)
// var eat = function() {
// 	console.log("Just ate", side);
// 	side = "Cranberry Sauce";
// }

// What I want to see:
// I like Turkey and Stuffing
// Just ate Stuffing
// Now give me the Cranberry Sauce


// var jay = "awesome";
// var trey = "away";
// var michael = "driving";
// function hello() {
// 	console.log(michael);
// 	michael = "hi";
// }
// hello();
// console.log(michael);

// I want to create people objects for trey, michael, and jay how? (name, age, occupation)

// var jay = {name: "jay", age: 22, occupation: "TA"}
// var michael = {name: "michael", age: 34, occupation: "CTO"}
// var trey = {name: "trey", age: 24, occupation: "Instructor"}

// jay.hello = function() {
// 	console.log("hello");
// }
// jay.hello();

// function person(name, age, occupation) {
// 	var self = {
// 		name: name,
// 		age: age,
// 		occupation: occupation
// 	}
// 	return self;
// }


function Person(name, age, occupation) {
	var self;
	self.name = name;
	self.age = age;
	self.occupation = occupation;
	return self;
}
// var jay = new Person("jay", 22, "TA")

// var jay = person("jay", 22, "TA");
// console.log(jay);









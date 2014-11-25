// takes in an array and a callback
// function arrayChanger(array, callback) {
// 	// makes an array to return 
// 	var resultArray = [];
// 	// loops through the array
// 	for (var i = 0; i < array.length; i++) {
// 		// runs the callback on each value in the array
// 		resultArray[i] = callback(array[i]);
// 	}
// 	return resultArray;
// }

// var array = [1, 2, 3];
// var new_array = arrayChanger(array, function(num) {
// 	return num * -1;
// })
// console.log(new_array);

function wait(ms, message) { // runs
	var start = new Date().getTime();
	while(true) {
		if((new Date().getTime() - start) > ms) {
			console.log(message);
			break;
		}
	}
}

// wait(1000, "hello");
// console.log("hi");


// use event-driven js to make it asynchronous:
// setTimeout and setInterval
// console.log("a"); // runs
// setTimeout(function() { // sets an event to get triggered in 50 milliseconds
// 	console.log("c");
// 	wait(1000, "done");
// }, 1);
// console.log("b"); // runs

// setInterval
function print(callbackmid, callbackend) {
	var counter = 0;
	var running = setInterval(function() {
		console.log("fading in")
		counter += 1;
		if(counter == 5) {
			callbackmid();
		}
		if(counter > 10) {
			clearInterval(running);
			callbackend();
		}
	}, 100);
}
print(function() {
	console.log("callback to run in the middle");
}, function() {
	console.log("callback to run after the function is done")
})



// waits about ms milliseconds

// wait(1000,"hello");
// console.log("hi");






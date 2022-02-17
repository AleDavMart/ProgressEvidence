//practicing to Timers in node.js 
//timers allow for delay or re-execution of code

//setTimeout - an API for this functions that match the browsers functions.
// Used to delay or repeat the execution of other functions used. 

//example of inline function
setTimeout ( () => {
    console.log("hello after 4 seconds");
}, 4000);

//Another example of how to call in a function
const func = () =>{
    console.log("Hello after 3 seconds");
};

setTimeout(func, 3000);

//example
const rocks = who =>{
    console.log(who + "rocks");
};

setTimeout(rocks, 2000, "Pluralsight");

//Challenge 
//define one fuction to print out hello after 8 and 4 seconds with one function
const message = delay =>{
    console.log("Hello with different setTimeouts" + delay + "seconds"  );
};

setTimeout(message, 6000, 6);

setTimeout(message, 7000, 7);

// the set interval will allow you put a loop of time
//until you kill the process with control c
//you can cancel them with code. 

//example 
//an alternative for 0 timeout you can use  setImmediate without having to state a time 
const timerID = setTimeout(
    () => console.log ( "You will not see this one!"), 0

);

clearTimeout(timerID); //will kill the code 
//capturing the timerID and kill it without printing 

//challenge 
// Print "hello world " five times every second when its done print "done"
//and exit. You can't use setTimeout

let counter = 0; //initiating the counter variable

const intervalsId = setInterval( ()=> {
    console.log( "hello world");
    counter += 1;

    if (counter === 5){ //once counter reaches 5 it will execute this code
        console.log("Done");
        clearInterval(intervalsId)
    }
}, 1000);


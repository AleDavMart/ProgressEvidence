//REGULAR EXPRESSIONS 

//USING THE TEST METHOD:
//Regular expression are used in programming languages to match parts of strings. You can create patterns 
//to help ypi do that matching. 

//Javascript has multiple ways to use regexes. One way to test a regex is using the '.test()' method.
//The method takes the regex, applies it to a string( whihc is placed inside the paranthesis), and returns 
//'true' or 'false' if your pattern finds something or not. 

//EXAMPLE: 
let testStr = "KittiesFly";
let testRegex = /Kitties/;
testRegex.test(testStr); // should return 'true'

//Exercise:
let MyString = "Hello, World!";
let myRegex = /Hello/;
let result2 = myRegex.test(MyString);
console.log(result2);

//the regex has to match exactly what you would like to find or else it will return false. 

//Exercise: 
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result3 = waldoRegex.test(waldoIsHiding);
console.log(result3);

//You can search for multiple patterns using the 'alternation' or 'OR' operator : | 
//This operator matches patterns either before or after it. 
//You can also search for more than two patterns. Do this by adding more patterns with more 'OR' operators.

//Exercise: 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // 
let result4 = petRegex.test(petString);
console.log(result4);

//You can match case differences. Case( or sometimes letter case) is the difference btwn uppercase letters and 
//lowercase letters. You can match both cases using what is called a flag. The 'i' flag ignores the case. You 
//can use it by appending it to the regex

//EXERCISE:
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result5 = fccRegex.test(myString);
console.log(result5);

//You can also extract the actual matches you found with the '.match' method
//Apply the method on a string and pass in the regex inside the paratheses. 

//Example: 
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log(ourStr.match(ourRegex));

//.match syntax is the "opposite" of the .test method 

//Exercise: 
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // 
let result6 = extractStr.match(codingRegex); //
console.log(result6);

//To search or extract a pattern more than once, you can use 'g' flag. 

//Example: 
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //match returns ["Repeat","Repeat","Repeat"]

//Exercise: 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); 

//MATCH ANYTHING W? WILDCARD PERIOD
//The wildcard character '.' will match any one character. ( its also called dot and period)

//EXAMPLE:
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//EXERCISE
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

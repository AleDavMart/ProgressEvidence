//Match Single Character with Multiple Possibilities

//You can search a literal pattern with some flexibility with charater classes.
//Character classes allow you to define a group of characters you wish to match by placing them inside [] brakets.

//Example: You want to match bag,big,bug -> you can create /b[aiu]g/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//Exercise: 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;  
let result = quoteSample.match(vowelRegex);

//Match letters of the Alphabet

//Inside a character set, you can define a range of characters to match using a hyphen character: -. 

//Example of matching lowercase letters a through e> 
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

//Exercise
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex);

//the hyphen can be used to match a range of numbers. You can also combine a range of letters and numbers
//in a single character set. 

//Example: ,atching any numbers 0-9 and a-z
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

//Exercise
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex);

//Match single characters not specified
//negated character sets: a set of characters that you do not want to match.
//this can be done by placing a caret character(^) after the opening bracket and before the characters you do not want to match.
//Example: /[^aeiou]/gi matches all characters that are not a vowel .

//Exercise: Matching all characters that are not vowels or a number. 
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex);

//You can use the + character to check if it appears one or more times in a row.The pattern has to be present consecutively.
//Exercise: Find matches when the letter s occurs one or more times in Mississippi. 
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

//Matching characters that occur zero or more times. The character use to do this is *.
//Example: to exclude any words that start with "go"
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);//the result would be null 

//A greedy match finds the longest possible part of a string that fits the regex pattern and returns its match.
//The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. 
//Note: parsing HTML with regular expressions should be avoided, but pattern matching and HTML string with regular expressions is 
//completely fine. 

//Exercise: Fid the regex /<.*>/ to return the HTML tag <h1> only.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);


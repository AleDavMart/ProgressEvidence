//Match Beginning String Patterns
//Regular exchanges are used to search for patterns in specific positions in strings. 
//[^] the caret used outside of a character set is used to search for patterns at the beginning of strings. 

//Examples: 
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

//Exercise: find CAL only in the beginning of the string rickyAndCal
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

//Matching Ending String patterns
//You can search the end of strings using the dollar sign character '$' at the end of the regex.

//Example: 
let theEnding = " This a never ending story";
let storyRegex = /story$/;
storyRegex.test.name(theEnding);
let noEnding = 'Sometimes a story will have to end';
storyRegex.test.name(noEnding); 

//Exercise:
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

//Match all letters and Numbers: 
//The closest charater class in Javascript to match the alphabet is '\w'. This shortcut is equeal
//to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note,
//this character class also includes the underscore character(_).

//Example: 
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames); 
shortHand.test(varNames);
//Known as shorthand character classes

//Exercise: count the number of alphanumeric characters in various quotes and strings
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

//Match everything but letters and Numbers 
//You can use a shortcut to match alphanumerics using \w. 
//A natural pattern you might want to search for is the opposite of alphanumerics.
//You can search for the opposite with \W this is the same as [^A-Za-z0-9_]

//example: first match would return % and second match would return !
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

//Exercise: 
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;
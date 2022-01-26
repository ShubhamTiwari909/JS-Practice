const str = "Hello ES6 you are the best"
console.log(str.length);//character counts
console.log(str.split(" ").length);//word counts

//startwith method
const startWith = str.startsWith("Hello")//true
console.log(startWith);

//endswith method
const endWith = str.endsWith("best")//true
console.log(endWith)

//includes
const include = str.includes("ES6");
console.log(include);//return true

//repeat
const Repeat = str.repeat(2)
console.log(Repeat);//repeat eh string two times;

//charAt
const CharAt = str.charAt(10);
console.log(CharAt);//prints "y" - 10th index

//concat 
const str2 = "ES6 Provided extra features to Javascript";
console.log(str.concat(str2));//concates both the strings

//match
const Match = str.match("you");
console.log(Match);


//replace
const Replace = str.replace("ES6","ES7");
console.log(Replace);//replace the given string with new provided string

//search 
const Search = str.search("are");
console.log(Search);//print 14 - the starting index of you

//value Of
const ValueOf = str.valueOf();
console.log(ValueOf);//prints the string value

//slice
const Slice = str.slice(6,10);
console.log(Slice);//print value from index 6 to index 9 

//split
console.log(str.split(" ").length);//split the string on "white_spaces" and make it an array and return the array length - word counts

//Lower and Upper case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

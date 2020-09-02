// Q1. Program to search for a particular character in a string
let exampleString = "LetsupgradeJavascript";
let searchCharacter = "m";
if(exampleString.indexOf(searchCharacter) == -1) {
    console.log(`Character '${searchCharacter}' in string '${exampleString}' is not found`);
} else {
    console.log(`Character '${searchCharacter}' in string '${exampleString}' is found`)
}

// Q2. Program to convert minutes to seconds
let minutes = 1;
let seconds = minutes * 60;
console.log(`${minutes} Minutes into seconds is ${seconds}`);

// Q3. Program to search for a element in a array of strings
let stringsArray = ["html","js","css","react","bootstrap","angular","node","python","sql","jquery"];
let searchString = "javascript";
stringsArray.find(function(ele) {
    if(ele != searchString) {
       console.log(`${searchString} is not found`);
    } else {
        console.log(`${searchString} is found`);
    }
});


//Q4. Program to display only elements containing 'a' in them from a array
let stringsArrayForCharacter = ["html","js","css","react","bootstrap","angular","node","python","sql","jquery"];
let searchCharacterInArray = "a";
let foundArray = [];
stringsArrayForCharacter.forEach(function(ele) {
    if(ele.indexOf(searchCharacterInArray) !== -1) {
        foundArray.push(ele);
    } 
});
console.log(`Character '${searchCharacterInArray}' in [${stringsArrayForCharacter}] is found in [${foundArray}]`);

// Q5. Print an array in reverse order
let strArray = ["html","js","css","react","bootstrap"];
let numArray = [3,6,9,12,15,18,21,24,27,30];
console.log(`Actual String is: [${strArray}] and Reversed String is [${strArray.reverse()}]`);
console.log(`Actual String is: [${numArray}] and Reversed String is [${numArray.reverse()}]`);
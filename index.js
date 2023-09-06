// Iteration 1: Names and Input
const hacker1 = "sanjana"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Jhanvi"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length > hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newDriver=" "

for(let i= 0;i<hacker1.length;i++){
  newDriver += hacker1[i];
  if (i < newDriver.length - 1) {
    newDriver += " "; 
  }
}

console.log(newDriver.toUpperCase())


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let newNavigatorsName = " ";
for(let i=hacker2.length-1;i<0;i++){
    newNavigatorsName += hacker2[i];
}

console.log(hacker2.split('').reverse().join(''));

//3.3 Depending on the lexicographic order of the strings, print:

let driverName = "Alice";
let navigatorName = "Bob";

if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (navigatorName < driverName) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
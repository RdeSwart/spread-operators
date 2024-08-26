/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1 //to copy the array
arr2.push(4); //to add 4 to the array..
        //, this is a problem though as it also changes
        // the first array.This is because the second array is  not actually a copy of the first,  
        // it's a new variable which points to the same  object as the other variable. Because of this,  
        // anything we do to the second array will  be done to the first and vice versa. 
console.log("second array", arr2);
console.log("first array", arr1);

// Copying an array using spread operator ES6
let arr3 = [4,5,6];
let arr4 = [...arr3]; //This operator  “spreads” the values of the third array  into the fourth, giving you a simple way  
                                            // to create an entirely new object.
arr4.push(7);
console.log("third array", arr3);
console.log("fourth array", arr4);

// Copying an object
let obj1 = {a:1,b:2,c:3};
let obj2 = {...obj1,d:4};
let obj3 = {...obj1, b:5}; //overwrites original object value
console.log("First Object", obj1);
console.log("Second Object", obj2);
console.log("Third Object", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x','y','z'];
console.log("fifth array", arr5);
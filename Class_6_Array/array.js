/**@Title : Array Method */
/**
 * =====  General Method  ======
 * forEach() - return undefined value
 * key() - create an array iterator object
 * valueOf()
 *
 *
 * ===== Find Array Element =====
 * at() //fruits.at(index) or fruits[index]
 * find() - return first Element
 * findIndex() - return first Element index number
 * indexOf() - returns first index position
 * lastIndexOf() - return last index positon
 * length
 *
 *
 *
 * ====== Return Boolean ======
 * includes()
 * Array.isArray()
 * some()
 *
 *
 *
 * ===== Array to String ======
 * join()
 * toString()
 *
 *
 * ===== String to Array =====
 * slice()
 *
 *
 * ===== Return an new Array ======
 * Array.from()
 * concat()
 * entries()
 * filter()
 * flat()
 * flatmap()
 * map()
 * reduce()
 * slice()
 *
 * ===== Overwrites the existing Array =====
 * copyWithin(target, start, end)
 * fill(value, start, end)
 * push()
 * unshift()
 * pop()
 * shift()
 * reverse()
 * sort()
 * splice()
 *
 */
const fruits = ["Banana", "Orange", "Mango", "Kiwi", "Apple", "lechee"];
//=========================================================================
// ============              General Method                    ============
//=========================================================================

//forEach() method calls a function for each element in an array.
//array.forEach(function(currentValue, index, arr), thisValue)
//=================================================================
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction1);
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

function myFunction1(item, index, arr) {
  arr[index] = item * 10;
}

// console.log(sum)
// console.log(numbers)

//The keys() method returns an Array Iterator object with the keys of an array
//array.keys() or Object.keys(array)
//=========================================================================
const keys = fruits.keys();
// const keys = Object.keys(fruits);

let text1 = "";
for (let x of keys) {
  text1 += x + " ";
}
// console.log(text1);

//valueOf() method returns the array itself.
//array.valueOf()
//=========================================================================

const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits12.valueOf();

//=========================================================================
// ============            Find Array Element                  ============
//=========================================================================

//The length property sets or returns the number of elements in an array.
//array.length;
//=====================================================
let len = fruits.length;
// console.log(len)

//at(index) === the at() Method return the same as []
//======================================================
let index = 2;
let fruit = fruits.at(index);
// console.log(`at() Method = ${fruit}`)

//find() method return the value of the first Element that passes a test
//array.find(function(currentValue, index, arr),thisValue)
//====================================================================
const ages = [3, 10, 18, 20];
let find = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}
// console.log(find)

//findIndex() method return the index position of the first Element
//array.findIndex(function(currentValue, index, arr), thisValue)
//===============================================================
const ages2 = [3, 10, 18, 20];

let position = ages2.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
// console.log(position);

//indexOf() method returns the first index (position) of a specified value.
// array.indexOf(item, start);
//=============================================================
let index1 = fruits.indexOf("lechee", -1);
// console.log(index1);

//lastIndexOf() method returns the last index (position) of a specified value.
//array.lastIndexOf(item, start) //Start default value is (array.length-1)
//========================================================================
let index2 = fruits.lastIndexOf("Apple");
// console.log(index2);

//=========================================================================
// ============                Return Boolean                  ============
//=========================================================================

//includes() method returns true or false and its case sensitive
//array.includes(element, start)
//=============================================
let bool = fruits.includes("Mango");
// console.log(bool);

//isArray() method returns true if an object is an array, otherwise false.
//Array.isArray(obj)
//=============================================
let result1 = Array.isArray(fruits);
// console.log(result1);

//The some() method checks if any array elements pass a test (provided as a callback function). return true or false.
//array.some(function(value, index, arr), this)
const ages3 = [3, 10, 18, 20];

let boolSome = ages3.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
// console.log(boolSome)

//=========================================================================
// ============               Array to String                  ============
//=========================================================================

//The join() method returns an array as a string.
//array.join(separator)
//=============================================================
let text = fruits.join(" and ");
// console.log(text)

//toString() method returns a string with array values separated by commas.
//array.toString()
//========================================================================
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruits10.toString();
// console.log(text2)

//=========================================================================
// ============ Return new Array without change existing Array ============
//=========================================================================

//Array.from() method returns an array from any object with a length property.
//The Array.from() method returns an array from any iterable object.
//Array.from(object, mapFunction, thisValue)
//==============================================================
const person = {
  name: "Sujon",
  age: 33,
};
const newArr3 = Array.from(person.name);
// console.log(newArr3)
let str = "Sujon";
const newArr4 = Array.from(str);
// console.log(newArr4)
const newArr5 = Array.from(fruits);
// console.log(newArr5)

//The concat() method concatenates (joins) two or more arrays.
//concat() Method example
//====================================================
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
// console.log(children)

//The entries() method returns an Array Iterator object with key/value pairs and does not change the original array.
//==============================================================
const entries = fruits.entries();
// console.log(entries);

//filter() method return an new array and not change the original array
//array.filter(function(currentValue, index, arr), thisValue)
//===========================================================
const ages1 = [32, 33, 16, 40];
const result = ages1.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// console.log(result);

//flat() - The flat() method concatenates sub-array elements.
//array.flat(depth
//===========================================================
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);
// console.log(newArr);

//flatMap() method maps all array elements and creates a new flat array.
//array.flatMap(function(currentValue, index, arr), thisValue)
//========================================================================
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr.flatMap((x) => x * 2);
// console.log(newArr2);

//map() creates a new array from calling a function for every array element.
//array.map(function(currentValue, index, arr), thisValue)
//=========================================================================
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
let fullName = persons.map(getFullName);
// console.log(fullName)

//reduce() method executes a reducer function for array element.
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//==========================================================================
const numbers1 = [15.5, 2.3, 1.1, 4.7];
let reduce = numbers1.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num);
}

// console.log(reduce)

//slice() method returns selected elements in an array, as a new array
//array.slice(start, end)
//=========================================================================
const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits6.slice(1, 3);
// console.log(citrus)

//=======================================================================
// ===============       Overwrites the existing Array       ============
//=======================================================================

//The copyWithin() method copies array elements to another position in the array.
//array.copyWithin(target, start, end)
//=====================================================================
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.copyWithin(2, 0, 2);
// console.log(`copyWithin() Method = ${fruits}`)

//The fill() method fills specified elements in an array with a value.
//array.fill(value, start, end)
//=====================================================================
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi", 2, 4);
// console.log(fruits2)

//push() method adds new items to the end, change original array and return new length
//array.push(item1, item2, ..., itemX)
//===========================================================================
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let newfruits = fruits3.push("Kiwi", "Lemon", "Pineapple");
// console.log(fruits3)
// console.log(newfruits)

//unshift() method adds new elements to the beginning and change original array.
//array.unshift(item1, item2, ..., itemX)
//============================================================================
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.unshift("Lemon", "Pineapple");
// console.log(fruits11)

//The pop() method removes the last element, change original array and return removes element
//array.pop()
//===========================================================================
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits4.pop();
// console.log(removed);

//shift() method removes the first item and change original array.
//array.shift()
//===========================================================================
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
// console.log (fruits5)

//reverse() method reverses the order and change original array
//array.reverse()
//===========================================================================
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.reverse();
// console.log(fruits7)

//sort() sorts the elements, change original array
//array.sort(compareFunction)
//==========================================================================
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.sort();
// console.log(fruits8)

//The splice() method adds and/or removes array elements and change original array
//array.splice(index, howmany, item1, ....., itemX)
//==========================================================================
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits9);

const food = ["Pizza", "Burger", "French Fry", "almond", "BBQ", "broccoli", "chicken"];

//specific value call from array
console.log(food[3]) // almond

//to find array element number 
console.log (food.length)

//use for loop
// for(let i = 0; i < food.length; i++){
//     console.log(food[i])
// }

//use while loop
// let i = 0;
// while (i < food.length) {
//     console.log(food[i])
//     i++
// }

//use dowhile loop
// let j = 0;
// do {
//     console.log(food[j])
//     j++
// } while (j < food.length);

//use forEach loop syntax: forEach(callback, thisArg)
// case-1 regular function
// food.forEach(function (v) {
//     console.log(v)
// })

//case-2 arrow function
// food.forEach((v)=>console.log(v))

//use map loop syntax : map(callback, thisArg)
//case-1 regular function
// food.map(function (v){console.log(v)})
//use case-2 arrow function
// food.map((v) => console.log(v));

//nested array or multidimentional array
// const vegetable = [
//     ['alu', 'potol', 'lao', 'kumra', 'derosh'],
//     ['golap', 'togor', 'beli', 'hasna'],
//     ['poti', 'pangsh', 'rui', 'taki', 'ilish']
// ]

// for(let i = 0; i < vegetable.length; i++ ) {
//     console.log(vegetable[i])
// }

// const devs = [
//     ['Jobayer Khan', 20, 'PHP', 'Mirpur'],
//     ['Sahdat Hossain', 40, 'PHP', 'Uttara'],
//     ['Robiul Sorkar', 30, 'Python', 'Mirpur'],
//     ['Mizanur Rahman', 42, 'Java', 'Banani'],
//     ['Rezoyan Khan', 34, 'C++', 'Uttara'],
//     ['Golam Mostofa', 60, 'JavaScript', 'mirpur'],
//     ['Abu Saydi', 35, 'Python', 'Uttara'],
//     ['Akas', 68, 'Rubi', 'Jatrabari'],
//     ['Saown', 30, 'Java', 'Banani'],
//     ['Wadud Ali', 45, 'JavaScript', 'Jatrabari']
// ]

// for (let i = 0; i < devs.length; i++) {

//     if(devs[i][2]=='PHP'){
//         console.log("=========================================");
//         devs[i].map((v) => console.log(v))
//         console.log("=========================================")
//     }
    
// }


//array to string 
//toStrng (), join()

//string to array method \
//split()

//add item to array
//push() at end
//shift() at first

//Remove item to array
//pop() at end
//unshift() at first

//all can do
//splice() 

//make new array
//slice()

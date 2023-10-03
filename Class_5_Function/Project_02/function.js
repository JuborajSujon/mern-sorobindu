//# Create a function that will return children, teenagers, young people, old people from the age

//Create a function that will return the area if a rectangle (w*l), square(w*w), tringle

//Create a currency converter function from taka to USD, CAD, POUND, EURO etc
function Utility () {
    this.ageCal = function (name, year) {
		let age = (new Date().getFullYear()) - year;
		let categories = "";
		if (age >= 0 && age < 12) {
			categories = "children";
		} else if (age >= 12 && age < 18) {
			categories = "teenagers";
		} else if (age >= 18 && age < 30) {
			categories = "younger";
		} else if (age >= 30 && age < 65) {
			categories = "adults";
		} else if (age >= 65) {
			categories = "older";
		}
        return `Hi ${name} , you are ${age} years old and your categories is ${categories}`;
    }

    this.currency = function (type, amount) {
        if(type == "d"){
            return console.log(`Your USD converted to ${amount * 108} taka`)
        } else if(type == 'c'){
            return console.log(`Your CAD converted to ${amount * 82} taka`)
        }else if(type == 'p'){
            return console.log(`Your USD converted to ${amount * 138} taka`)
        }else {
			return console.log("You are put worng key, Please ensue for doller(d), canadian doller(c) and pound(p)")
		}v                                              
    }

    this.areaCal = function (type, width, length) {
        if(type == "s"){
            return console.log(`You are square area is ${width * width}`);
        } else if(type == "r"){
			return console.log(`You are rectangle area is ${width * length}`);
		} else if(type == "t"){
			return console.log(`You are tringle area is ${(width * length) / 2}`);
		} else {
			return console.log("You are put worng key, Please ensue for square(s), rectangle(r) and tringle(t)")
		}
    }
}

const func = new Utility();
let sujon = func.ageCal("Md. Sujon Miah", 1990)
console.log(sujon)

let area = func.areaCal('t', 3, 4)
console.log(area)

let taka = func.currency('p', 100)
console.log(taka)

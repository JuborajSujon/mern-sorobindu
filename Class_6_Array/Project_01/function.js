const dev = [
    ['James', 33, 'Findland', 'Google', 'JavaScript', 1500],
    ['Robert', 25, 'India', 'Microsoft', 'Java', 1600],
    ['John', 28, 'Bhutan', 'Facebook', 'PHP', 1200],
    ['Michael', 43, 'Greenland', 'Airbnb', 'PHP', 450],
    ['David', 29, 'South Sudan', 'Godady', 'Java', 800],
    ['William', 36, 'Austria', 'Datasoft', 'JavaScript', 1000],
    ['Richard', 30, 'Palau', 'Brain Station', 'Python', 900],
    ['Joseph', 31, 'Mongolia', 'Nano IT', 'Python', 700],
    ['Thomas', 40, 'Syria', 'TigerIT', 'Laravel', 500],
    ['Christopher', 35, 'Bangladesh', 'LeadSoft', 'JavaScript', 300]

]

function devName (array) {
    const devlist = [];
    for (let i = 0; i < array.length; i++) {
        devlist.push(array[i][0]); 
    }
    return devlist;
}

function DevInfo () {
    this.devDetails = function (array, name){
        const person = [];
        
         array.map((item) =>{
            let personName = item.includes(name);
            if(personName){
                for (let i = 0; i < item.length; i++) {
                    person.push(item[i]);  
                };
            };
         });
        return person;
    };

    this.devSalary = function (array, name) {
        const person = [];
        array.map((item) => {
            let personName = item.includes(name);
            if (personName) {
                    person.push(item[0], item[5]);
                    // console.log(`${item[0]} salary is ${item[5]}`)
            };
        });

        return person;
    };
    this.devTotalSalary = function (array) {
			let salary = 0;
			array.map((item) => {
				for (let i = 0; i < item.length; i++) {
                    salary += item[5];
                };
			});
            console.log(`Developr Total salary comes ${salary}`);
			return salary;
		};
    
    this.devGroupAge = function ( array, start, end ) {
        const person = [];
        array.map( (item) => {
            if(start < item[1] && end > item[1]){
                person.push(item);
            } else {
                console.log('Your age rang is not correct');
            };
        });
        return person;
    };

    this.devGroupLang = function (array, lang) {
			const person = [];
			array.map((item) => {
				let checkLang = item.includes(lang);
				if (checkLang) {
					person.push(item);
				};
			});
			return person;
		};
}

const devInfo = new DevInfo()

//Find the all developer name
// const devlist = devName(dev)
// console.log(devlist)




// =============  Find specific developer information ==========
// 'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher'

// let james = devInfo.devDetails(dev, "James");
// console.log(james)




//=============     Income as specific developer     ===============

// let jamesSalary = devInfo.devSalary(dev, "John");
// console.log(jamesSalary)




//============      Developr total income sheet       ================  

// let totalSalary = devInfo.devTotalSalary(dev);
// console.log(totalSalary);



// ====   Make developer group by age dynamic range (min age range 20)   ======

// let devGroupByAge = devInfo.devGroupAge(dev, 25, 36);
// console.log(devGroupByAge)




// ========    Make developer group by language     =============

// let devGroupByLang = devInfo.devGroupLang(dev, "JavaScript");
// console.log(devGroupByLang)
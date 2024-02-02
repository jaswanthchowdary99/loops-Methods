const got = require("../loops-methods/data");

// Counting all the people in the given data.

function countAllPeople(got) {
    let totalCount = 0;

    for (let i = 0; i < got.houses.length; i++) {
        let house = got.houses[i];

        if (house.people) {
            for (let j = 0; j < house.people.length; j++) {
                totalCount++;
            }
        }
    }

    return totalCount;
}

const result = countAllPeople(got);
console.log(result);




//Number of people in different houses.

function peopleByHouses(got) {
    let housesCount = {};

    for (let i = 0; i < got.houses.length; i++) {
        let house = got.houses[i];
        if (Array.isArray(house.people)) {
            housesCount[house.name] = house.people.length;
        }
    }

    return housesCount;
}

const resultPeopleByHouses = peopleByHouses(got);
console.log(resultPeopleByHouses);



// Name of everyperson from the given data.

function everyone(got) {
    let peoplecount = [];
    for (let index = 0; index < got.houses.length; index++) {
        let house = got.houses[index];
        for (let index1 = 0; index1 < house.people.length; index1++) {
            let person = house.people[index1];
            peoplecount.push(person.name);
        }
    }
    return peoplecount;
}

const resultEveryone = everyone(got);
console.log(resultEveryone);




//  People names with 'S' or 's' in it
function nameWithS(got) {
    let peopleStartsWithS = [];

    for (let i = 0; i < got.houses.length; i++) {
        let house = got.houses[i];

        for (let j = 0; j < house.people.length; j++) {
            let person = house.people[j];

            if (person.name.toLowerCase().includes('s')||person.name.toUpperCase().includes('S')) {
                peopleStartsWithS.push(person.name);
            }
        }
    }

    return peopleStartsWithS;
}

const resultNameWithS = nameWithS(got);
console.log(resultNameWithS);





//  People names with 'A' or 'a' in it

function nameWithA(got) {
    let peopleStartsWithA = [];

    for (let i = 0; i < got.houses.length; i++) {
        let house = got.houses[i];

        for (let j = 0; j < house.people.length; j++) {
            let person = house.people[j];

            if (person.name.toLowerCase().includes('a')||person.name.toUpperCase().includes('A')) {
                peopleStartsWithA.push(person.name);
            }
        }
    }

    return peopleStartsWithA;
}

const resultNameWithA = nameWithA(got);
console.log(resultNameWithA);





//  People surnames starting with 'S'.
function surNameWithS(got) {
    let peopleSurNameStartsWithS = [];
    for (let index = 0; index < got.houses.length; index++) {
        let house = got.houses[index];
        for (let index1 = 0; index1 < house.people.length; index1++) {
            let person = house.people[index1];
            let nameParts = person.name.split(' ');
            let lastName = nameParts[nameParts.length - 1];
            if (lastName.charAt(0).toUpperCase() === 'S') {
                peopleSurNameStartsWithS.push(person.name);
            }
        }
    }
    return peopleSurNameStartsWithS;
}

const resultSurNameWithS = surNameWithS(got);
console.log(resultSurNameWithS);



//  People surnames starting with 'A'.

function surNameWithA(got) {
    let peopleSurNameStartsWithA = [];
    for (let index = 0; index < got.houses.length; index++) {
        let house = got.houses[index];
        for (let index1 = 0; index1 < house.people.length; index1++) {
            let person = house.people[index1];
            let nameParts = person.name.split(' ');
            let lastName = nameParts[nameParts.length - 1];
            if (lastName.charAt(0).toUpperCase() === 'A') {
                peopleSurNameStartsWithA.push(person.name);
            }
        }
    }
    return peopleSurNameStartsWithA;
}

const resultSurNameWithA = surNameWithA(got);
console.log(resultSurNameWithA);



// Names of houses with values from the given data.
function peopleNameOfAllHouses(got) {
    let peopleByHouse = {};

    for (let index = 0; index < got.houses.length; index++) {
        let house = got.houses[index];
        let houseName = house.name;
        let peopleInHouse = [];

        for (let index1 = 0; index1 < house.people.length; index1++) {
            let person = house.people[index1];
            peopleInHouse.push(person.name);
        }

        peopleByHouse[houseName] = peopleInHouse;
    }

    return peopleByHouse;
}

const resultPeopleNameOfAllHouses = peopleNameOfAllHouses(got);
console.log(resultPeopleNameOfAllHouses);

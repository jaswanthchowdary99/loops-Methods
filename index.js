const got = require("../loops-methods/data");

// Counting all the people in the given data.

function countAllPeople(got) {
    const totalCount = got.houses.reduce((count, house) => {
        if (house.hasOwnProperty('people')) {
            return count + house.people.length;
        }
        return count;
    }, 0);

    return totalCount;
}

const result = countAllPeople(got);
console.log(result);




//Number of people in different houses.

function peopleByHouses(got) {
    return got.houses.reduce((housesCount, house) => {
        housesCount[house.name] = house.people.length;
        return housesCount;
    }, {});
}

const resultPeopleByHouses = peopleByHouses(got);
console.log(resultPeopleByHouses);


// Name of everyperson from the given data.

function everyone(got) {
    const peoplecount = got.houses.reduce((acc, house) => {
        const names = house.people.map(person => person.name);
        return acc.concat(names);
    }, []);
    return peoplecount;
}

const resultEveryone = everyone(got);
console.log(resultEveryone);



//  People names with 'S' or 's' in it

function nameWithS(got) {
    const peopleStartsWithS = [];

    got.houses.forEach(house => {
        house.people.forEach(person => {
            if (person.name.toLowerCase().includes('s')||person.name.toLowerCase().includes('S')) {
                peopleStartsWithS.push(person.name);
            }
        });
    });

    return peopleStartsWithS;
}

const resultNameWithS = nameWithS(got);
console.log(resultNameWithS);




//  People names with 'A' or 'a' in it

function nameWithA(got) {
    const peopleStartsWithA = [];

    got.houses.forEach(house => {
        house.people.forEach(person => {
            if (person.name.toLowerCase().includes('a')||person.name.toLowerCase().includes('A')) {
                peopleStartsWithA.push(person.name);
            }
        });
    });

    return peopleStartsWithA;
}

const resultNameWithA = nameWithA(got);
console.log(resultNameWithA);




//  People surnames starting with 'S'.

function surNameWithS(got) {
    return got.houses.flatMap(house =>
        house.people.filter(person => {
            const nameParts = person.name.split(' ');
            const lastName = nameParts[nameParts.length - 1];
            return lastName.charAt(0).toUpperCase() === 'S';
        }).map(person => person.name)
    );
}

const resultSurNameWithS = surNameWithS(got);
console.log(resultSurNameWithS);


//  People surnames starting with 'A'.

function surNameWithA(got) {
    return got.houses.flatMap(house =>
        house.people.filter(person => {
            const nameParts = person.name.split(' ');
            const lastName = nameParts[nameParts.length - 1];
            return lastName.charAt(0).toUpperCase() === 'A';
        }).map(person => person.name)
    );
}

const resultSurNameWithA = surNameWithA(got);
console.log(resultSurNameWithA);


// Names of houses with values from the given data.
function peopleNameOfAllHouses(got) {
    return got.houses.reduce((result, house) => {
        let houseName = house.name;
        let peopleNames = house.people.map(person => person.name);
        result[houseName] = peopleNames;
        return result;
    }, {});
}

const resultPeopleNameOfAllHouses = peopleNameOfAllHouses(got);
console.log(resultPeopleNameOfAllHouses);


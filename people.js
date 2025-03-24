const createName = require('./names.js');
const createHobbies = require('./hobbies.js');

function person() {
    const name = createName('Gianfranco', 'Mendoza');
    const hobbies = createHobbies('Videogiochi', 'Scacchi', 'Programmazione');


    return {
        fullName: `${name.firstName} ${name.lastName}`,
        hobbies,
    };
}

console.log(person());

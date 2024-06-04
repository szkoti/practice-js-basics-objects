const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '04',
        month: '06',
        year: '1985'
    }
}

console.log(parseInt(user.born.day), Number(user.born.month));

const currentDate = new Date();
const currDay = currentDate.getDate();
const currMth = currentDate.getMonth() + 1;

console.log( currDay, currMth);


if (parseInt(user.born.day) === currDay && Number(user.born.month) === currMth) {
    console.log(`Happy birthday ${user.firstName}!`)
    };


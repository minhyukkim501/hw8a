const moment = require('moment');


console.log(moment().format('dddd, MMMM Do YYYY'));

const targetDate = moment('1976-11-26');
const yearsAgo = moment().diff(targetDate, 'years');
console.log(`${yearsAgo} years ago`);
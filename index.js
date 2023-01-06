const {deterministicPartitionKey} = require("./dpk");
const { getShiftsByFacility, generateReports } = require('./ticket-breakdown');

// Refactoring
const partitionKey = '7e30d7794325966fb061dc3e21ceeb563004';
console.log(deterministicPartitionKey({ partitionKey }));


// Ticket breakdown
console.log(getShiftsByFacility(Facililties[0].id));
console.log(generateReports());
const {deterministicPartitionKey} = require("./dpk");
const { getShiftsByFacility, generateReports } = require('./ticket-breakdown');

// Refactoring
const partitionKey = '7e30d7794325966fb061dc3e21ceeb56300480eb92e8da8eadaacc1b8d9a547c877d121a53def132982300b35d0e5320796a0ad60a294df81bb18a56ce3945d4';
console.log(deterministicPartitionKey({ partitionKey }));


// Ticket breakdown
console.log(getShiftsByFacility(Facililties[0].id));
console.log(generateReports());
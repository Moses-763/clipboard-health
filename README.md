

## [Ticket Breakdown](Ticket_Breakdown.md) Solution
1. Ticket breakdown file was created (ticket-breakdown.js);
2. getShiftByFacility function was created to fetch shifts by facilityId
3. generateReports function was also created for generating reports;
4. Json data was generated for representing Shifts, Agents and Facility database
5. Unit testing was written (ticket-breakdown.test.js) for testing getShiftsByFacilityId and generateReports.
6. Run yarn test to run test
7. Run yarn start to getShiftsByFacilityId and generateReports
8. The report generated file is report.pdf
9. [Generated Reports PDF Samples](https://github.com/Moses-763/clipboard-health/blob/main/report.pdf)


## [Refactoring](Refactoring.md) Solution
1. Two functions are created for possible two use cases
2. processEventPartitionKey function: should run if event partition key is provided
3. processPartitionByLength function: should process by default if event partition key is not provided
4. Run `yarn test` to run the automated tests
5. Run `yarn start` to launch `index.js` for any manual testing

const { getShiftsByFacility } = require('./ticket-breakdown');
const { Facililties, Agents, Shifts } = require('./data');
describe('Unit test', () => {
  test('should fetch shifts data by facility id', () => {
    const shiftsByFacility = getShiftsByFacility(Facililties[0].id);
    expect(shiftsByFacility[0]).toHaveProperty('id');
    expect(shiftsByFacility[0]).toHaveProperty('agent.id');
    expect(shiftsByFacility.length).toBeGreaterThan(1);
  });

  test('should test a generated report', )
  
})

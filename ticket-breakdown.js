const { Facililties, Agents, Shifts } = require('./data');
const { ejsToHtml, htmlToPdf,} = require('./utils');
const crypto = require('crypto');


//1.  find shifts by facility id and populate the agent meta data;
const getShiftsByFacility = (facilityId) => {
  const shifts = Shifts.map((shift) => {
    if (shift.facilityId === facilityId) {
      return {
        id: shift.id,
        agent: Agents.find((agent) => agent.id === shift.agentId),
        facilityId: shift.facilityId,
        createdAt: shift.createdAt,
      }
    }
  })
  return shifts;
}

//2. Generate shifts reports
const generateReports = async () => {
  // get shifts data for the reports
  const shiftDataToPdf = getAllShifts();
  
  // Parameters to generate pdf reports
  const reportHeaders = ['Agent', 'Facility', 'Facility Type', 'Date'];
  const pdfHtml = await ejsToHtml('./pdf-reports.template.ejs', {
    title: 'Facility Management',
    description: 'Facility shifts reports',
    headers: reportHeaders,
    body: shiftDataToPdf
  });
  return await htmlToPdf(pdfHtml);
}

// Find all shifts
const getAllShifts = () => {
  return Shifts.map((shift) => {
    const agent = Agents.find((agent) => agent.id === shift.agentId);
    const facility = Facililties.find((facility) => facility.id === shift.facilityId);
    return {
      agent: agent.name,
      facility: facility.name,
      facilityType: facility.type,
      createdAt: shift.createdAt,
    }
  });
}

module.exports = {
  getShiftsByFacility,
  generateReports,
  getAllShifts,
}


const Facililties = [
  {
    id: 'adbae70e-da9b-4a52-938f-d2c390c99064',
    name: 'Alex Quarter',
    type: 'Office Appartment',
  },
  {
    id: '0d3b416d-7c29-490e-8fd3-56bc51e21b42',
    name: 'James Villa',
    type: 'Office Appartment',
  },
  {
    id: '735a63f3-0658-4eb8-a1ac-1b7f64eb657e',
    name: 'Frank Quarter',
    type: 'Office Appartment',
  },
];
  
  const Agents = [
  {
    id: '6d4e6c7e-f281-42bd-8faa-0c47914b1300',
    name: "Moses Idowu",
  },
  {
    id: '33944cbb-ceb8-48ee-98ff-a5772c282015',
    name: "James Smith",
  },
];
  
const Shifts = [
  {
    id: '621e9a2a-5fe8-478f-b6f8-dc505929ffac',
    agentId: '6d4e6c7e-f281-42bd-8faa-0c47914b1300',
    facilityId: 'adbae70e-da9b-4a52-938f-d2c390c99064',
    createdAt: Date.now(),
  },
  {
    id: 'b0c822d7-8493-4460-9677-f7b715006233',
    agentId: '6d4e6c7e-f281-42bd-8faa-0c47914b1300',
    facilityId: '0d3b416d-7c29-490e-8fd3-56bc51e21b42',
    createdAt: Date.now(),
  },
  {
    id: '15cb20f2-55c3-4022-b315-943a854db30d',
    agentId: '6d4e6c7e-f281-42bd-8faa-0c47914b1300',
    facilityId: 'adbae70e-da9b-4a52-938f-d2c390c99064',
    createdAt: Date.now(),
  },
  {
    id: '7dc38e4a-7c7c-434f-a40c-710d5770af8b',
    agentId: '6d4e6c7e-f281-42bd-8faa-0c47914b1300',
    facilityId: 'adbae70e-da9b-4a52-938f-d2c390c99064',
    createdAt: Date.now(),
  },
  {
    id: '10401bee-7d91-4015-ae8a-1b2ec571a5d2',
    agentId: '33944cbb-ceb8-48ee-98ff-a5772c282015',
    facilityId: '735a63f3-0658-4eb8-a1ac-1b7f64eb657e',
    createdAt: Date.now(),
  }
]

module.exports = {
  Facililties,
  Agents,
  Shifts,
}



const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const arr = [
      {name: 'Satti', role: 'Developer'},
      {name: 'Jenny', role: 'Sales Associate'},
      {name: 'Javid', role: 'HR'}
    ];

    expect(getEmployerRole('Satti', arr)).toEqual('Developer');
    expect(getEmployerRole('Jenny', arr)).toEqual('Sales Associate');
    expect(getEmployerRole('Javid', arr)).toEqual('HR');
  });
});

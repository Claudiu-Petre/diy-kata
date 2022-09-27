const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(50, 10)).toBe("I should be there in 5 hours.")
  });
});

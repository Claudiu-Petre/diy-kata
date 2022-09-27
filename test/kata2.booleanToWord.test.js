const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns Yes if passed true', () => {
    expect(booleanToWord(true)).toEqual('Yes')
  })
  it('returns No if passed false', () => {
    expect(booleanToWord(false)).toEqual('No')
  })
});

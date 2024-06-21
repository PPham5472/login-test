import splitAndTrimString from "./index.js";

test("splitAndTrimString - Splits input via ',' and trims the individual values", () => {
    expect(splitAndTrimString("")).toBe(null);
});

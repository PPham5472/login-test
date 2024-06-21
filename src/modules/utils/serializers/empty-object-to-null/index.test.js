import emptyObjectToNull from "./index.js";

test("emptyObjectToNull - Return null if object is empty", () => {
    expect(emptyObjectToNull({})).toBe(null);
    expect(emptyObjectToNull([])).toBe(null);
    const test1 = {};
    expect(emptyObjectToNull(test1)).toBe(null);
    const test2 = [];
    expect(emptyObjectToNull(test2)).toBe(null);
});

test("emptyObjectToNull - Return Object if object is not empty", () => {
    const test1 = { test: "test" };
    expect(emptyObjectToNull(test1)).toBe(test1);
    const test2 = [1, 2, 3];
    expect(emptyObjectToNull(test2)).toBe(test2);
    const test3 = [{ hand: "man" }, "test"];
    expect(emptyObjectToNull(test3)).toBe(test3);
});

test("emptyObjectToNull - Returns null if an Object or Array is not passed in", () => {
    expect(emptyObjectToNull(undefined)).toBe(null);
    expect(emptyObjectToNull(null)).toBe(null);
    expect(emptyObjectToNull("")).toBe(null);
    expect(emptyObjectToNull([])).toBe(null);
    expect(emptyObjectToNull({})).toBe(null);
    expect(emptyObjectToNull(new Promise((resolve, reject) => {}))).toBe(null);
    expect(emptyObjectToNull(() => {})).toBe(null);
    expect(emptyObjectToNull(NaN)).toBe(null);
    const pattern = /[a-z]+/;
    expect(emptyObjectToNull(pattern)).toBe(null);
    const mySymbol = Symbol("description");
    expect(emptyObjectToNull(mySymbol)).toBe(null);
    expect(emptyObjectToNull(new Date("2000-01-01"))).toBe(null);

    expect(emptyObjectToNull("String")).toBe(null);
    expect(emptyObjectToNull(0)).toBe(null);
    expect(emptyObjectToNull(15)).toBe(null);
    expect(emptyObjectToNull(true)).toBe(null);
    expect(emptyObjectToNull(false)).toBe(null);
    expect(emptyObjectToNull(10n)).toBe(null);
    expect(emptyObjectToNull(Infinity)).toBe(null);
    expect(emptyObjectToNull(-Infinity)).toBe(null);
    expect(emptyObjectToNull(2e3)).toBe(null);
    expect(emptyObjectToNull(3.14e2)).toBe(null);
    expect(emptyObjectToNull(0xff)).toBe(null);
    expect(emptyObjectToNull(0x10)).toBe(null);
});

test("emptyObjectToNull - Returns default value over null", () => {
    expect(emptyObjectToNull(undefined, "")).toBe("");
    expect(emptyObjectToNull(null, true)).toBe(true);
    expect(emptyObjectToNull("", "55")).toBe("55");
    expect(emptyObjectToNull([], false)).toBe(false);
    expect(emptyObjectToNull({}, 5)).toBe(5);
    expect(emptyObjectToNull(new Promise((resolve, reject) => {}), Infinity)).toBe(Infinity);
    expect(emptyObjectToNull(() => {}, 10n)).toBe(10n);
    expect(emptyObjectToNull(NaN, NaN)).toBe(NaN);
    const pattern = /[a-z]+/;
    expect(emptyObjectToNull(pattern, 0)).toBe(0);
    const mySymbol = Symbol("description");
    const test1 = {};
    expect(emptyObjectToNull(mySymbol, test1)).toBe(test1);
    const test2 = [];
    expect(emptyObjectToNull(new Date("2000-01-01"), test2)).toBe(test2);
});

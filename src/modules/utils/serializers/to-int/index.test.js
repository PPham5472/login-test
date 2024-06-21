import toInt from "./index.js";

test("toInt - Different variable types are converted to a number", () => {
    //Numbers
    expect(toInt(0)).toBe(0);
    expect(toInt(1)).toBe(1);
    expect(toInt(1000)).toBe(1000);
    expect(toInt(-5)).toBe(-5);
    expect(toInt(Infinity)).toBe(Infinity);
    expect(toInt(-Infinity)).toBe(-Infinity);

    //Strings
    expect(toInt("3.14")).toBe(3.14);
    expect(toInt("1005")).toBe(1005);
    const onethousand = 1000;
    expect(toInt(`${onethousand}`)).toBe(1000);

    //Special cases
    expect(toInt("2e3")).toBe(2000);
    expect(toInt("3.14e2")).toBe(314);
    expect(toInt("0xFF")).toBe(255);
    expect(toInt("0x10")).toBe(16);
});

test("toInt - Returns null if it's a invalid variable to convert to a number", () => {
    //Data Types
    expect(toInt(undefined)).toBe(null);
    expect(toInt(null)).toBe(null);
    expect(toInt("")).toBe(null);
    expect(toInt([])).toBe(null);
    expect(toInt({})).toBe(null);
    expect(toInt({})).toBe(null);
    expect(toInt(new Promise((resolve, reject) => {}))).toBe(null);
    expect(toInt(() => {})).toBe(null);
    expect(toInt(false)).toBe(null);
    expect(toInt(true)).toBe(null);
    expect(toInt(NaN)).toBe(null);
    expect(toInt(10n)).toBe(null);
    expect(toInt(new Date("2000-01-01"))).toBe(null);
    const pattern = /[a-z]+/;
    expect(toInt(pattern)).toBe(null);
    const mySymbol = Symbol("description");
    expect(toInt(mySymbol)).toBe(null);

    //Misc.
    expect(
        toInt({
            anything: function () {
                return 42;
            },
        })
    ).toBe(null);
    expect(
        toInt({
            valueOf: function () {
                return 42;
            },
        })
    ).toBe(null);
    expect(toInt({ test: "test" })).toBe(null);
    expect(toInt(["123", "456"])).toBe(null);
    expect(toInt([1, 2, 3])).toBe(null);
    expect(toInt("ABC123")).toBe(null);
    expect(toInt("123ABC")).toBe(null);
    expect(toInt("123 ABC")).toBe(null);
    expect(toInt("(3 + 4) * 2")).toBe(null);
    expect(toInt("10 * 2")).toBe(null);
});

test("toInt - Returns the default val instead of null, esp. when passing in 0. Does not work when default val is undefined", () => {
    //When toInt would normally return null, return the default value instead = 0
    expect(toInt(undefined, 0)).toBe(0);
    expect(toInt(null, 0)).toBe(0);
    expect(toInt("", 0)).toBe(0);
    expect(toInt([], 0)).toBe(0);
    expect(toInt({}, 0)).toBe(0);
    expect(toInt({}, 0)).toBe(0);
    expect(toInt(new Promise((resolve, reject) => {}), 0)).toBe(0);
    expect(toInt(() => {}, 0)).toBe(0);
    expect(toInt(false, 0)).toBe(0);
    expect(toInt(true, 0)).toBe(0);
    expect(toInt(NaN, 0)).toBe(0);
    expect(toInt(10n, 0)).toBe(0);
    expect(toInt(new Date("2000-01-01"), 0)).toBe(0);
    const pattern = /[a-z]+/;
    expect(toInt(pattern, 0)).toBe(0);
    const mySymbol = Symbol("description");
    expect(toInt(mySymbol, 0)).toBe(0);

    expect(
        toInt(
            {
                valueOf: function () {
                    return 42;
                },
            },
            0
        )
    ).toBe(0);
    expect(toInt({ test: "test" }, 0)).toBe(0);
    expect(toInt(["123", "456"], 0)).toBe(0);
    expect(toInt([1, 2, 3], 0)).toBe(0);
    expect(toInt("ABC123", 0)).toBe(0);
    expect(toInt("123ABC", 0)).toBe(0);
    expect(toInt("123 ABC", 0)).toBe(0);
    expect(toInt("(3 + 4) * 2", 0)).toBe(0);
    expect(toInt("10 * 2", 0)).toBe(0);

    //When toInt would normally return null, return the default value instead = other values
    expect(toInt(undefined, 1)).toBe(1);
    expect(toInt(null, "5")).toBe("5");
    expect(toInt("", -100)).toBe(-100);
    expect(toInt([], true)).toBe(true);
    expect(toInt({}, "ABC")).toBe("ABC");
    expect(toInt({}, NaN)).toBe(NaN);
    expect(toInt(new Promise((resolve, reject) => {}), false)).toBe(false);
    expect(toInt(() => {}, 10n)).toBe(10n);

    //Passing in undefined as the default value returns null
    expect(toInt(undefined, undefined)).toBe(null);
    expect(toInt(null, undefined)).toBe(null);
    expect(toInt("Abc", undefined)).toBe(null);
});

import toTrimStr from "./index.js";

test("toTrimStr - Convert value to a string and auto-trim the edges", () => {
    //Expect conversion to string
    expect(toTrimStr(0)).toBe("0");
    expect(toTrimStr(15)).toBe("15");
    expect(toTrimStr(true)).toBe("true");
    expect(toTrimStr(false)).toBe("false");
    expect(toTrimStr(10n)).toBe("10");
    expect(toTrimStr(Infinity)).toBe("Infinity");
    expect(toTrimStr(-Infinity)).toBe("-Infinity");
    expect(toTrimStr(2e3)).toBe("2000");
    expect(toTrimStr(3.14e2)).toBe("314");
    expect(toTrimStr(0xff)).toBe("255");
    expect(toTrimStr(0x10)).toBe("16");

    //Expect to stay the same
    expect(toTrimStr("ABC123")).toBe("ABC123");
    expect(toTrimStr("123ABC")).toBe("123ABC");
    expect(toTrimStr("123 ABC")).toBe("123 ABC");
    expect(toTrimStr("(3 + 4) * 2")).toBe("(3 + 4) * 2");
    expect(toTrimStr("10 * 2")).toBe("10 * 2");
    const onethousand = 1000;
    expect(toTrimStr(`${onethousand}`)).toBe("1000");
    expect(toTrimStr("2e3")).toBe("2e3");
    expect(toTrimStr("3.14e2")).toBe("3.14e2");
    expect(toTrimStr("0xFF")).toBe("0xFF");
    expect(toTrimStr("0x10")).toBe("0x10");
});

test("toTrimStr - Auto Trim", () => {
    expect(toTrimStr("   ABC    ")).toBe("ABC");
    expect(toTrimStr(" <div> test </div> ")).toBe("<div> test </div>");
    expect(toTrimStr("       peter@applausehq.com       ")).toBe("peter@applausehq.com");
    expect(toTrimStr("      . test  .     ")).toBe(". test  .");
});

test("toTrimStr - Expect Null", () => {
    //Data Types
    expect(toTrimStr(undefined)).toBe(null);
    expect(toTrimStr(null)).toBe(null);
    expect(toTrimStr("")).toBe(null);
    expect(toTrimStr([])).toBe(null);
    expect(toTrimStr({})).toBe(null);
    expect(toTrimStr(new Promise((resolve, reject) => {}))).toBe(null);
    expect(toTrimStr(() => {})).toBe(null);
    expect(toTrimStr(NaN)).toBe(null);
    const pattern = /[a-z]+/;
    expect(toTrimStr(pattern)).toBe(null);
    const mySymbol = Symbol("description");
    expect(toTrimStr(mySymbol)).toBe(null);
    expect(toTrimStr(new Date("2000-01-01"))).toBe(null);

    //Objects and Arrays with internal values
    expect(
        toTrimStr({
            anything: function () {
                return 42;
            },
        })
    ).toBe(null);
    expect(
        toTrimStr({
            valueOf: function () {
                return 42;
            },
        })
    ).toBe(null);
    expect(toTrimStr({ test: "test" })).toBe(null);
    expect(toTrimStr(["123", "456"])).toBe(null);
    expect(toTrimStr([1, 2, 3])).toBe(null);

    //Misc.
});

test("toTrimStr - Return default value instead of null", () => {
    expect(toTrimStr(undefined, "default")).toBe("default");
    expect(toTrimStr(null, "")).toBe("");
    expect(toTrimStr("", 1)).toBe(1);
    expect(toTrimStr([], "")).toBe("");
    expect(toTrimStr({}, false)).toBe(false);
});

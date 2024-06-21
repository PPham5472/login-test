const toTrimString = (value, defaultValue) => {
    const defaultVal = defaultValue === undefined ? null : defaultValue;

    if (!value && value !== 0 && typeof value !== "boolean") return defaultVal;
    if (value instanceof Array) return defaultVal;
    if (value instanceof Object) return defaultVal;
    if (typeof value === "symbol") return defaultVal;

    const string = `${value}`.trim();
    if (string.length < 1) return defaultVal;

    return string;
};

export default (value, splitParam) => {
    const trimValue = toTrimString(value);
    if (trimValue === null) return null;

    return trimValue?.split(",")?.map((item) => toTrimString(item));
};

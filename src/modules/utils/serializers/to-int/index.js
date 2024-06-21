export default (value, defaultValue) => {
    const defaultVal = defaultValue === undefined ? null : defaultValue;

    if (!value && value !== 0) return defaultVal;
    if (value instanceof Array) return defaultVal;
    if (value instanceof Object) return defaultVal;
    if (typeof value === "boolean") return defaultVal;
    if (typeof value === "bigint") return defaultVal;
    if (typeof value === "symbol") return defaultVal;

    const int = +value;
    if (Number.isNaN(int)) {
        return defaultVal;
    }

    return int;
};

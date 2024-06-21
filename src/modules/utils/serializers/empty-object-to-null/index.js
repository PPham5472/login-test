export default (value, defaultValue) => {
    const defaultVal = defaultValue === undefined ? null : defaultValue;

    if (!(value instanceof Object) && !(value instanceof Array)) return defaultVal;

    if (value instanceof Array) return value.length === 0 ? defaultVal : value;
    if (value instanceof Object) return Object.keys(value).length === 0 ? defaultVal : value;

    return "ERROR WITH emptyObjectToNull SERIALIZER";
};

export default (formStore) => Object.keys(formStore).map((key) => formStore[key].value);

/* eslint-disable import/prefer-default-export */
export const strictEquals = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return false;
    }

    if (isNaN(a / b)) {
        return true;
    }

    let result = Object.is(a, b);

    let table = [a, b, result];
    return table;
};

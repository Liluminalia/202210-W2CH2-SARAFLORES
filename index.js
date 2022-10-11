import { strictEquals } from './modulo.js';

const valores1 = strictEquals(1, 1);
const valores2 = strictEquals(NaN, NaN);
const valores3 = strictEquals(0, -0);
const valores4 = strictEquals(-0, 0);
const valores5 = strictEquals(1, '1');
const valores6 = strictEquals(true, false);
const valores7 = strictEquals(false, false);
const valores8 = strictEquals('Water', 'oil');

console.table(
    [valores1],
    [valores2],
    [valores3],
    [valores4],
    [valores5],
    [valores6],
    [valores7],
    [valores8]
);

import { asyncScheduler, of, range } from 'rxjs'

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(0,12);
const srcAsync$ = range(0,12, asyncScheduler);

console.log('inicio sincrono');
src$.subscribe(console.log);
console.log('fin sincrono');


console.log('inicio async');

srcAsync$.subscribe(console.log)

console.log('fin async');


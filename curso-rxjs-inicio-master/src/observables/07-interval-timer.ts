import { interval, timer } from "rxjs";


const myObserver = {
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')

}

const delay = new Date()
delay.setSeconds(delay.getSeconds() + 5)

const interval$ = interval(1000)
// const timer$ = timer (2000,10000)
const timer$ = timer(delay)
console.log('Inicio');


//interval$.subscribe(myObserver)
 timer$.subscribe(myObserver)
console.log('fin');

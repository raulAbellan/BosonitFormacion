import { Observable, Observer, Subject } from "rxjs"

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('error:', err),
    complete: () => console.info('completado')
};

const intervalos$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => subs.next(Math.random()), 1000);
    return () => {
        clearInterval(intervalID);
        console.log('intervalo destruido');
    }

});

/*  
*const subscription1 = intervalos$.subscribe(rnd => console.log('subscription1', *rnd)) //?Different rnd
*const subscription2 = intervalos$.subscribe(rnd => console.log('subscription2', *rnd))//?Different rnd
*/

/**SUBJET
* 1- Castero múltiple
  2- también es un observer 
* 3- se puede manejar el next. error y complete
*/

const subjet$ = new Subject();
const subscription = intervalos$.subscribe(subjet$);
//*Subjet - ambos se están subscribiendo al mismo ya que el subjet permite casteo múltiple
const subjet1 = subjet$.subscribe(rnd => console.log('subj1', rnd)) //**Same rnd */
const subjet2 = subjet$.subscribe(rnd => console.log('subj2', rnd))//**Same rnd */
//?Subscription - cada una de las dos subscription se están subscribiendo por separado



setTimeout(() => {
    subjet$.next(10);
    subjet$.complete();
    subscription.unsubscribe();
}, 3500);
import { Observable,Observer } from "rxjs"

const observer: Observer<any> = {
    next : value => console.log('Siguiente [next]:', value),
    error: err => console.warn('error [obs]:',err),
    complete: ()=> console.info('completado [obs]') 
}; 

//const obs$ = Observable.create()
const obs$ = new Observable<string>(subs => {
    subs.next('Hola')
    subs.next('Mundo')

    //forzar error
    // const a = undefined;
    //  a.nombre = 'Raúl'
    subs.complete();
    subs.next('ah?')
    subs.next()

});
obs$.subscribe(observer)


// obs$.subscribe(valor => console.log('text: ', valor ),
// error => console.warn('Error: ', error ),
// ()=> console.info('Completado'));


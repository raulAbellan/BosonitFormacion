import { Observable,Observer } from "rxjs"

const observer: Observer<any> = {
    next : value => console.log('[next]:', value),
    error: err => console.warn('error:',err),
    complete: ()=> console.info('completado') 
}; 

const intervalo$ = new Observable(subscriber => {

    //crear un contador,1,2,3,4,5,.....
    let counter = 0;

    setInterval(()=>{  
        counter++;
        subscriber.next(counter)
        if(counter >3 ) subscriber.unsubscribe()

    },3000);

});


const subscription = intervalo$.subscribe(num => console.log('num:', num));

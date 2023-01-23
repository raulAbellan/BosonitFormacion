import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click')
const src2$ = fromEvent<KeyboardEvent>( document , 'keyup')

const observer = {
    next: val => console.log('next' , val)
    
};

src1$.subscribe(eve =>{
    console.log(eve.x);
    console.log(eve.y);
    
    
});


src2$.subscribe(evento => {
    console.log(evento.key);
    
});
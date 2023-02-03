import { first, fromEvent, take, tap, map } from 'rxjs';

const clickFirst$ = fromEvent<MouseEvent>(document, "click");
clickFirst$.pipe(
  //take(1) = first()
  tap(e => console.log('tap:',e.clientY,'NO EMITE SUBSCRIBE')
  
  ),
first<MouseEvent>(event => event.clientY >= 290)

).
subscribe({
  next: v => console.log('FIRST emision del subscribe: ' , v.clientY),
  complete: ()=> console.log('ClientY larger than 290')
  
  
});

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe( 
 map(({clientX,clientY})=> ({clientX,clientY}))).subscribe({
  next: v => console.log('next ' , v),
  complete: ()=> console.log('ClientY larger than 290')
  
  
})

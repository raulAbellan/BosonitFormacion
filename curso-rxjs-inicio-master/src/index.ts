import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
;


range(1, 5).pipe(map<number, string>(m => (m * 10).toString()))
    .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')


const keyupcode$ = keyup$.pipe(map(event => event.code)
)


keyupcode$.subscribe(code =>console.log('map:',code))

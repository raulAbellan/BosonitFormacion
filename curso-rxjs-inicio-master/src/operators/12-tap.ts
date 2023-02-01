import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => {
      console.log("before", x);
    }),
    map((val) => val * 10),
    tap({
        next: value => console.log('after',value),
        complete: ()=> console.log('finish')
        
    }
    )
  )
  .subscribe((v) => console.log("subs", v));

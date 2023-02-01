import { filter, range, from, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(20, 10).pipe(
  filter((val, i) => {
    console.log("index", i);

    return val % 2 === 1;
  })
);
//.subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: "hero",
    name: "Spider-Man",
  },
  {
    type: "hero",
    name: "Ironman",
  },
  {
    type: "villain",
    name: "Thanos",
  },
];

from(characters)
  .pipe(filter((p) => p.type === "hero"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event_) => event_.code),
  filter(key_ => key_==='Enter')
);
keyup$.subscribe(console.log);

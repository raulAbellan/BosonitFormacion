import { Component, OnDestroy } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { map, takeUntil, startWith, switchMap, takeWhile, first, tap } from 'rxjs/operators';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnDestroy {
  counter: number = 0;
  countUp: boolean = true;
  setTo: number = 5;
  speed: number = 1000;
  step: number = 2;
  start: boolean = true;
  stopCounter:boolean = true

  countSubscription: any;

  private start$ = new Subject<boolean>();
  private stop$ = new Subject();
  private reset$ = new Subject();
  private counter$ = this.start$.pipe(
    switchMap(() =>
      interval(this.speed).pipe(
        tap(console.log
        ),
        map(() =>(this.countUp ? (this.counter ===0 ? this.setTo + this.counter : this.counter + this.step):(this.counter ===0 ? this.setTo + this.counter : this.counter - this.step) ),
        // tap(console.log)
       ), takeUntil(this.reset$)
        
      )
  ), takeUntil(this.stop$));
    
  constructor() {
    this.counter$.subscribe((e) => {
      console.log(e);
      
      if (e !== null) {
        
        this.counter = e;
      } else {
        return;
      }
    });

  }
  countUpButton(){
    this.countUp = true;
  }
  countDown(){
    this.countUp = false;
  }



  startCounter() {
    console.log('start')
    this.start$.next(true);
  }

  pauseCounter() {
    this.reset$.next(true);
  }

  reset() {
    console.log('reset')
    this.reset$.next(true);
    this.counter = 0;
    this.start$.next(true);
  }

  ngOnDestroy() {
    this.stop$.next(true)
    this.stop$.unsubscribe();
    console.log('destroy');
    
  }
}

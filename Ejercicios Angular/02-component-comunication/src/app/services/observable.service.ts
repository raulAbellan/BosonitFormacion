import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {


  obsFromParent = new Subject<string>();

  sendFromParent( obsMsg: string ){
    return this.obsFromParent.next(obsMsg);
  }

  getFromParent(){
    return this.obsFromParent.asObservable();
  }


  childObs = new Subject<string>();

  fromChild( msgObs: string ){
    return this.childObs.next(msgObs);
  }

  getFromChild(){
    return this.childObs.asObservable();
  }

  constructor() { }
}

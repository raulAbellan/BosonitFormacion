import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationObservableService {

  //* Declaramos el subject 
  private _obsFromParent = new Subject<string>();

  //?Creamos el metodo en el que emitimos el mensaje a traves del observable
  // get obsFromParentObservable$(): Observable<string> {
  //   return this._obsFromParent.asObservable();
  // }

  // set obsFromParent$(message: string) {
  //   this._obsFromParent.next(message);
  // }

  sendFromParent(obsMsg:string){
    return this._obsFromParent.next(obsMsg)
  }
  //?Declaramos el get para poder subscribirnos desde el elemento hijo
  getFromParent(){
    return this._obsFromParent.asObservable();
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

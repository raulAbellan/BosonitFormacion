import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationObservableService {

  //* Declaramos el subject 
  obsFromParent = new Subject<string>();

  //?Creamos el metodo en el que emitimos el mensaje a traves del observable
  sendFromParent(obsMsg:string){
    return this.obsFromParent.next(obsMsg)
  }
  //?Declaramos el get para poder subscribirnos desde el elemento hijo
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

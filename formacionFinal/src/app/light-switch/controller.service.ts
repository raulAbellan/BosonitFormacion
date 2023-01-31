import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  color$ = new EventEmitter<string>() 
  checked$ = new EventEmitter<boolean>()
 
 constructor(){
 
 }
}

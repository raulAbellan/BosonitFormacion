import { Injectable } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public childClass!: ChildComponent;
  public parentClass!: AppComponent

  constructor() { }
}

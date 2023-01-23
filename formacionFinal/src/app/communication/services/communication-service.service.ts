import { Injectable } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  //** Llamamos al componente desde el servicio /PARENT USING SERVICE
  public childClass!: ChildComponent;
  public parentClass!: ParentComponent;
  // public childMessage!: string;
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../services/communication-service.service';
import { ChildComponent } from '../child/child.component';
import { Observable } from 'rxjs';
import { CommunicationObservableService } from '../services/communication-observable.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //*PARENT USING INPUT PROPERTY
  parentMessage: String = new String('');
  //**CHILD USING OUTPUT PROPERTY
  childMessage: string = '';




  constructor(
    //*Injectamos en el constructor el CommService /PARENT USING SERVICE
    private _communicationService: CommunicationServiceService,
    //*Injectamos en el constructor el ObsService
    private _observableService: CommunicationObservableService) { }

  ngOnInit() {
    //*compartimos el componente para acceder a el desde el servicio /PARENT USING SERVICE
    this._communicationService.parentClass = this;
     //*Nos subscribimos al observable mediante el metodo get que hemos creado
    this._observableService.getFromChild().subscribe((txtObs) => (this.childMessage = txtObs));

    


  }
  //*Con el metodo siguiente damos valor a "msg" que sería lo que queremos que aparezca en pantalla /PARENT USING SERVICE
  parentServiceMsg() {
    this._communicationService.childClass.msg = "PARENT USING SERVICE";
  }

  //*Damos valor al parentMessage// PARENT USING INPUT PROPERTY
  inputMsg() {
    this.parentMessage = new String('PARENT USING INPUT PROPERTY');

  }

  //?? obtenemos el childMessage y le damos el valor de msgChild  No tengo claro de donde viene el valor de msgChild
  getChildMsg( msgChild: string ){
    this.childMessage = msgChild;
  }
  //*A través del metodo observableMsg damos valor al observable //PARENT USING OBSERVABLE
  observableMsg() {
    this._observableService.sendFromParent('PARENT USING OBSERVABLE');
  }

}

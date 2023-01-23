import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationObservableService } from '../services/communication-observable.service';
import { CommunicationServiceService } from '../services/communication-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  //* con el input traemos el mensaje("msg") del padre al hijo/PARENT USING SERVICE
  @Input() msg!: string;

  //*  aqui declaramos el childMsg .con el output mandamos un mensaje al elemento padre. //CHILD USING OUTPUT PROPERTY
  @Output() childMsg = new EventEmitter<string>();

  //**PARENT USING SERVICE
  constructor(private _communicationService: CommunicationServiceService,
    private _observableService: CommunicationObservableService) { 
    }
    
    
    ngOnInit(): void {
      //**PARENT USING SERVICE
      this._communicationService.childClass = this;
      //*Nos subscribimos al observable mediante el metodo get que hemos creado
      this._observableService.getFromParent().subscribe((txtObs) => (this.msg = txtObs));


  }
  //* Con el metodo siguiente damos valor a "childMessage" que sería lo que queremos que aparezca en pantalla 
  childServiceMsg(){
    this._communicationService.parentClass.childMessage = 'CHILD USING SERVICE'
    // this._communicationService.childMessage = 'CHILD USING SERVICE'

  }
  //*Emitimos el mensaje deseado como el output childMsg
  ouputMsg(){
    this.childMsg.emit('CHILD USING OUTPUT PROPERTY');
  }

  obsChildMsg(){
    this._observableService.fromChild('CHILD USING OBSERVABLE');


  }


}

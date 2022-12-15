import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../services/comunication.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() msg = new String(''); 
  @Output() childMsg = new EventEmitter<string>(); 


  constructor( private _communicationService:CommunicationService,
                private _observableService: ObservableService) { }

  ngOnInit() {

    this._communicationService.childClass = this;

    this._observableService.getFromParent().subscribe((txtObs) => (this.msg = txtObs));
  }



  childServiceMsg(){
    this._communicationService.parentClass.childMessage = 'CHILD USING SERVICE'
    
  }

  ouputMsg(){
    this.childMsg.emit('CHILD USING OUTPUT PROPERTY');
  }


  obsChildMsg(){
    this._observableService.fromChild('CHILD USING OBSERVABLE');
  }

}

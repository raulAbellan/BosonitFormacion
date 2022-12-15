import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './services/comunication.service';
import { ObservableService } from './services/observable.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  parentMessage: String = new String(''); 
  childMessage: string = '';


  constructor( private _communicationService:CommunicationService,
              private _observableService: ObservableService) { }

  ngOnInit() {

    this._communicationService.parentClass = this;


    this._observableService.getFromChild().subscribe((txtObs) => (this.childMessage = txtObs));
  }



  parentServiceMsg(){
    this._communicationService.childClass.msg = "PARENT USING SERVICE";
  }

  inputMsg(){
    
   this.parentMessage = new String('PARENT USING INPUT PROPERTY');
  }


  getChildMsg( msgChild: string ){
    this.childMessage = msgChild;
  }

  observableMsg(){
    this._observableService.sendFromParent('PARENT USING OBSERVABLE');
  }

}

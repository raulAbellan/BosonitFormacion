import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';
@Component({
  selector: 'app-controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css'],
})
export class ControllerComponentComponent {
  colors: string[];
  color: string = 'Red';

  constructor(private _controllerService: ControllerService) {
    this.colors = ['Red', 'Yellow', 'Green'];
  }

  isChecked($event: any) {
    this._controllerService.checked$.emit($event.target.checked);
    
    
  }
  colorSelected($event: any) {
    this._controllerService.color$.emit($event.target.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-trafic-light-component',
  templateUrl: './trafic-light-component.component.html',
  styleUrls: ['./trafic-light-component.component.css'],
})
export class TraficLightComponentComponent implements OnInit {
  colorSelected: string = 'Red';
  checked: boolean = false;

  constructor(private _controllerService: ControllerService) {}
  ngOnInit(): void {
    this._controllerService.color$.subscribe((color) => {
      this.colorSelected = color;
      console.log(this.colorSelected);
    });

    this._controllerService.checked$.subscribe((check) => {
      this.checked = check;
      console.log(this.checked);
    });
  }
}

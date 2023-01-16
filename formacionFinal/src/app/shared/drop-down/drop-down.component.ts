import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
  title = 'formacionFinal';
  items: MenuItem[] = [];
  constructor() {
  }
ngOnInit(): void  {
  this.items = [
    {
      label: 'Tareas',
      items: [
        {
          label: 'Hide',
          routerLink:'hide'
        },
        {
          label: 'Communication',
          routerLink:'communication'
        }
        ,
        {
          label: 'Crud',
          routerLink:'crud'
        }]
    }
  ]

}




}

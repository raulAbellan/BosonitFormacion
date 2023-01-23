import { Component } from '@angular/core';

@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css'],
})
export class HideComponent {
  button = true;
  buttonBoolean() {
   this.button= !this.button
    // if (this.boton === true) {
    //   this.boton = false;
    // } else {
    //   this.boton = true;
    // }

  }
}
import { Component } from '@angular/core';


@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css']
})

export class HideComponent {
  boton = true;
  buttonBoolean() {
   this.boton= !this.boton
    // if (this.boton === true) {
    //   this.boton = false;
    // } else {
    //   this.boton = true;
    // }

  }
}



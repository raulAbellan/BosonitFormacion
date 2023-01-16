import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  Country } from 'src/app/Interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  countries: Country[];


  

  constructor(private userService: UserService) {
    this.form = new FormGroup(
      {
        name: new FormControl(),
        pass: new FormControl(),
        passConfirm: new FormControl(),
        email: new FormControl(),
        check: new FormControl(),
        country: new FormControl(),
        city: new FormControl() 

      }
    );

    this.countries = [
      { name: 'Australia', code: 'AU'},
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'España', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
   
  }

  onSubmit(){
    this.userService.addUser(this.form.value);
    this.form.reset();    
    
  }

}

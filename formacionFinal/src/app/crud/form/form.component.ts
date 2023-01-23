import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/Interfaces';
import { UserService } from '../services/user.service';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  countries: Country[];

  formUsers: FormGroup = this.fb.group({
    id: [, []],
    name: ['', [Validators.required, Validators.pattern('a-zA-Z')]],
    pass: [, [Validators.required, Validators.minLength(6)]],
    passConfirm: [, [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')]],
    check: [, []],
    country: [, []],
    city: [, []]}, {
      validators: [this.validation.validatePass('password', 'repeatPassword')]
    });

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private validation: ValidatorsService) {
   

    this.countries = [
      { name: 'Australia', code: 'AU' },
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
  


  onSubmit() {
    
    this.userService.addUser(this.formUsers.value);
    
    this.formUsers.reset();    

  }

  

}

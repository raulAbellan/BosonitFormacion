import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  

  validatePass( pass: string, passConfirm: string){

    return ( formGroup: AbstractControl): ValidationErrors | null => {

      const x = formGroup.get(pass)?.value;
      const y = formGroup.get(passConfirm)?.value;

      if(x !== y){
        formGroup.get(y)?.setErrors({ different: true });
        return { different: true};
      }

      return null;
    }
  }
}
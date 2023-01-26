import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country, User } from 'src/app/Interfaces';
import { UserService } from '../services/user.service';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  user!: User;
  users: User[] = [];
  countries: Country[];

  formUsers: FormGroup = this.fb.group(
    {
      name: [
        ,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z]+[a-zA-Z-_0-9]*$'),
        ],
      ],
      pass: [, [Validators.required, Validators.minLength(6)]],
      passConfirm: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      check: [, []],
      country: [, []],
      city: [, []],
      id: [],
    },
    {
      validators: [this.validation.validatePass('pass', 'passConfirm')],
    }
  );

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private validation: ValidatorsService
  ) {
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
      { name: 'United States', code: 'US' },
    ];
  }

  ngOnInit(): void {
    console.log(this.formUsers);
    this.userService.getUsers$().subscribe((users) => {
      this.users = users;
    });
  }

  // passMatchCheck() {
  //   if (
  //     this.formUsers.controls['pass'] === this.formUsers.controls['passConfirm']
  //   ) {
  //     this.passMatch = true;
  //   } else {
  //     this.passMatch = false;
  //   }
  // }

  invalidField(field: string) {
    return (
      this.formUsers.get(field)?.errors && this.formUsers.get(field)?.touched
    );
  }

  onSubmit() {
    console.log(this.formUsers.get('id')?.value);

    if (this.formUsers.invalid) {
      this.formUsers.markAllAsTouched();
      return;
    } else if (this.formUsers.get('id')?.value === null) {
      this.userService.addUser(this.formUsers.value).subscribe((resp) => {
        console.log(resp), this.ngOnInit();
      });
      this.formUsers.reset();
    } else {
      this.user = this.formUsers!.value;
      this.userService.editUser$(this.formUsers.value).subscribe((resp) => {
        this.user = resp;
        this.ngOnInit();
      });
      this.formUsers.reset();
      console.log('entrando en el edit');
    }
  }

  editUser(user: User) {
    this.formUsers.patchValue(user);
  }
}

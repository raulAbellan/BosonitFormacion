import { Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/Interfaces';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() users!: User[];
  @Output() user: EventEmitter<User> = new EventEmitter();

  ngOnInit(): void {
    this.userService.getUsers$().subscribe((users) => {
      this.users = users;
    });
  }

  edit(user: User) {
    this.userService.getUser$(user).subscribe((resp) => {
      this.user.emit(resp);
    });
  }

  delete(user: User) {
    console.log(user);
    this.userService.deleteUser(user).subscribe((resp) => {
      this.ngOnInit();
    });
  }
}

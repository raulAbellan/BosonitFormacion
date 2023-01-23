import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/Interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userArr: User[] = []

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers$().subscribe(users => {
      this.userArr = users;  console.log(users);    })
  }
  deleteUser(id:number):User[]{
    return this.userArr = this.userService.deleteU(id)


  }

}

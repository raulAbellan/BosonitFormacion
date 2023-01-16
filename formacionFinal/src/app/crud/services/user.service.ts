import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User [];
  private users$: Subject<User[]>

  constructor() {
    this.users = [];
    this.users$ = new Subject;
   }

 addUser(uUser: User){
  this.users.push(uUser);
  this.users$.next(this.users);
 }  

 getUsers$(): Observable<User[]> {
  return this.users$.asObservable();
 }

    

 
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User [];
  private users$: Subject<User[]>
  private id: number = 0;
  constructor() {
    this.users = [];
    this.users$ = new Subject;
   }

 addUser(uUser: User){
  uUser.id = this.id;
  this.users.push(uUser);
  this.id ++;
  this.users$.next(this.users);
 }  

 getUsers$(): Observable<User[]> {
  return this.users$.asObservable();
 }

 deleteU(id:number): User[]{
 return this.users = this.users.filter(user => user.id !== id)
 }
}

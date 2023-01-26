import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }


 addUser(uUser: User):Observable<User>{
  return this.http.post<User>(`http://localhost:3000/users`,uUser);

 }  

 getUsers$(): Observable<User[]> {
  return this.http.get<User[]>(`http://localhost:3000/users`);
}

getUser$(user:User):Observable<User>{
  return this.http.get<User>(`http://localhost:3000/users/${user.id}`);
}

 editUser$(uUser:User):Observable<User>{
  return this.http.put<User>(`http://localhost:3000/users/${uUser.id}`,uUser);


 }

 deleteUser(uUser:User):Observable<User[]>{
  return this.http.delete<User[]>(`http://localhost:3000/users/${uUser.id}`);
}
}

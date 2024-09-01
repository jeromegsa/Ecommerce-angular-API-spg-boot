import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = "http://localhost:8080";
  readonly path = "/api/users"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.API_URL + this.path);
  }




  addUser(newUser: any) {
    return this.http.post(this.API_URL + this.path, newUser)
  }

  deleteUser(id: number) {

   return this.http.delete(this.API_URL + this.path+"/"+id)

  }

  updateUser(id:number,data:Object){
      return this.http.put(this.API_URL+this.path+"/"+id,data)
  }



}



import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL="http://localhost:8080";
  readonly path="/api/users"

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.API_URL+this.path);
  }



  addObject(newObject: any): Observable<any> {
    return this.http.post<any>(this.API_URL+this.path, newObject);
  }

}

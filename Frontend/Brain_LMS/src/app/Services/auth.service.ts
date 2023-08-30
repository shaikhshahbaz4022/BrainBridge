import { LoginUser, User } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = `http://localhost:8000/user`;
  constructor(private http: HttpClient) {}
  registerfun(user: User): Observable<any> {
    return this.http.post<User>(`${this.url}/register`, user);
  }
  loginfun(user: LoginUser): Observable<any> {
    return this.http.post<LoginUser>(`${this.url}/login`, user);
  }
}

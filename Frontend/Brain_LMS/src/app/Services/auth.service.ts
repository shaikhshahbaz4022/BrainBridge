import { LoginUser, User } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `http://localhost:8000/user`;
  constructor(private http: HttpClient) {}
  private urlhereChat: string = `https://chatbot-with-openai.onrender.com`;
  registerfun(user: User): Observable<any> {
    return this.http.post<User>(`${this.url}/register`, user);
  }
  loginfun(user: LoginUser): Observable<any> {
    return this.http.post<LoginUser>(`${this.url}/login`, user);
  }

  defualtRenderOn(): Observable<any> {
    const runurl = `http://localhost:8000/user/home`;
    return this.http.get<any>(runurl);
  }
  chatbotResponse(userrequest: any): Observable<any> {
    console.log('Request Made');
    return this.http.post<any>(`${this.urlhereChat}/chat`, userrequest);
  }
  defaultchatbotStart(): Observable<{ msg: string }> {
    console.log('Call For Start Chat Render');
    return this.http.get<{ msg: string }>(`${this.urlhereChat}/`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enrolmentdata } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EnrolmentsService {
  constructor(private http: HttpClient) {}
  appurl = `http://localhost:8000/enrol`;
  userEnrollment(id: number): Observable<any> {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.post<any>(`${this.appurl}/create/${id}`, {}, { headers });
  }

  getallEnrolments(): Observable<{ data: Enrolmentdata[] }> {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<{ data: Enrolmentdata[] }>(`${this.appurl}/get`, {
      headers,
    });
  }
}

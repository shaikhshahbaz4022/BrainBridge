import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enrolmentdata, assignInter } from 'src/interfaces';

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
  //get all assignments
  getAssignmentsall(): Observable<{ data: assignInter[] }> {
    const assignURL = `http://localhost:8000/assignment/getassign`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<{ data: assignInter[] }>(assignURL, { headers });
  }

  //get perticular Assignment
  getperticularAssi(): Observable<{ data: assignInter }> {
    const assignURL = `http://localhost:8000/assignment/getbyid`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    let id = localStorage.getItem('assignID');
    return this.http.get<{ data: assignInter }>(`${assignURL}/${id}`, {
      headers,
    });
  }
}

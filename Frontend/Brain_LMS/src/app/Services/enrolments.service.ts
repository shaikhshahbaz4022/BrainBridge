import { AnnouncementUser, AssignmentSubmit } from './../../interfaces';
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
  submitAssignment(obj: any, id: any): Observable<AssignmentSubmit> {
    const submitUrl = `http://localhost:8000/sub`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    // let assignID = localStorage.getItem('assignID');
    // console.log(assignID);
    return this.http.post<AssignmentSubmit>(`${submitUrl}/submit/${id}`, obj, {
      headers,
    });
  }
  //get announcements service

  getUserAnnouncement(): Observable<{ data: AnnouncementUser[] }> {
    const geturl = `http://localhost:8000/announcement/get`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<{ data: AnnouncementUser[] }>(geturl, { headers });
  }
}

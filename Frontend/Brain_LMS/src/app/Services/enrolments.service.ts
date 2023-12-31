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
  appurl = `https://brainbridge.onrender.com/enrol`;
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
    const assignURL = `https://brainbridge.onrender.com/assignment/getassign`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<{ data: assignInter[] }>(assignURL, { headers });
  }

  //get perticular Assignment
  getperticularAssi(): Observable<{ data: assignInter }> {
    const assignURL = `https://brainbridge.onrender.com/assignment/getbyid`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    let id = localStorage.getItem('assignID');
    return this.http.get<{ data: assignInter }>(`${assignURL}/${id}`, {
      headers,
    });
  }
  submitAssignment(obj: any, id: any): Observable<any> {
    const submitUrl = `https://brainbridge.onrender.com/sub`;
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
    const geturl = `https://brainbridge.onrender.com/announcement/get`;
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<{ data: AnnouncementUser[] }>(geturl, { headers });
  }
}

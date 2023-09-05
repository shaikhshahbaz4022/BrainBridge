import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InstructorCourse,
  SubmissionGet,
  assignInter,
  createAnnounInter,
  createAssignInter,
} from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class InstructorserviceService {
  private appurl: string = `https://brainbridge.onrender.com`;
  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token') || '';

  getInstCourses(): Observable<InstructorCourse[]> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<InstructorCourse[]>(`${this.appurl}/course/getinst`, {
      headers,
    });
  }

  seeassignment(id: any): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    console.log(id);
    return this.http.get<assignInter[]>(
      `${this.appurl}/assignment/getcourseassign/${id}`,
      { headers }
    );
  }
  seesubmissions(id: any): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<SubmissionGet[]>(`${this.appurl}/sub/getsub/${id}`, {
      headers,
    });
  }
  //create assignments to particular course
  //create assignments to particular course
  createAssignments(obj: createAssignInter, id: number): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    let createurl = `https://brainbridge.onrender.com/assignment/create/${id}`;
    return this.http.post<createAssignInter>(createurl, obj, { headers });
  }

  //create announcemnent for particular course

  createAnn(obj: createAnnounInter, id: number): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    let announceurl = `https://brainbridge.onrender.com/announcement/create/${id}`;
    return this.http.post<createAnnounInter>(announceurl, obj, { headers });
  }
}

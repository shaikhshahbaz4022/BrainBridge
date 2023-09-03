import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstructorCourse, SubmissionGet, assignInter } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class InstructorserviceService {
  appurl: string = `http://localhost:8000`;
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
}

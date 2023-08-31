import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseData, Create_Course, data } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = `http://localhost:8000/course`;
  constructor(private http: HttpClient) {}
  userData: any = JSON.parse(localStorage.getItem('user') || '{}');
  id: number = this.userData.id;

  createCoursedata(obj: Create_Course): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post<Create_Course>(`${this.url}/create`, obj, {
      headers,
    });
  }
  getallcourses(): Observable<data> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get<data>(`${this.url}/get`, { headers });
  }
}

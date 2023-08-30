import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Create_Course } from 'src/interfaces';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = `http://localhost:8000/course`;
  constructor(private http: HttpClient) {}
  userData: any = JSON.parse(localStorage.getItem('user') || '{}');
  id: number = this.userData.id;

  createCoursedata(obj: Create_Course): Observable<any> {
    return this.http.post<Create_Course>(`${this.url}/create/${this.id}`, obj, {
      withCredentials: true,
    });
  }
}

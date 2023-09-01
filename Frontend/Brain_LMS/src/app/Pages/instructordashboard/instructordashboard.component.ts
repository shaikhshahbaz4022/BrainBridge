import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstructorserviceService } from 'src/app/Services/instructorservice.service';
import { InstructorCourse, assignInter } from 'src/interfaces';

@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.css'],
})
export class InstructordashboardComponent implements OnInit {
  isloading: boolean = true;
  data: InstructorCourse[] = [];

  ngOnInit(): void {
    this.getcourseIntru();
  }
  constructor(
    private instructorService: InstructorserviceService,
    private router: Router
  ) {}
  getcourseIntru() {
    this.instructorService.getInstCourses().subscribe((data: any) => {
      this.data = data.data;
      console.log(data);
      this.isloading = false;
    });
  }

  SeeAssignment(id: any) {
    localStorage.setItem('courseID', id);
    console.log(id);
    this.router.navigate(['/intructorassignment']);
  }
}

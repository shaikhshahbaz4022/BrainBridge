import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { CourseData } from 'src/interfaces';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css'],
})
export class AllcoursesComponent implements OnInit {
  data: CourseData[] = [];
  constructor(
    private courseService: CourseService,
    private enrolService: EnrolmentsService
  ) {}
  ngOnInit(): void {
    this.getallcourses();
  }
  getallcourses(): void {
    this.courseService.getallcourses().subscribe((getdata) => {
      console.log(getdata);
      this.data = getdata.data;
    });
  }
  CreateEnrolmanet(id: number) {
    this.enrolService.userEnrollment(id).subscribe((data) => {
      console.log(data);
      alert(data.msg);
    });
  }
}

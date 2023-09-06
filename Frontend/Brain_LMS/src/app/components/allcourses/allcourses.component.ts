import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { CourseData } from 'src/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css'],
})
export class AllcoursesComponent implements OnInit {
  isloading: boolean = true;
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
      this.isloading = false;
    });
  }
  CreateEnrolmanet(id: number) {
    this.enrolService.userEnrollment(id).subscribe((data) => {
      console.log(data);
      if (data.msg == 'Enrollment Added Succesfully') {
        Swal.fire({
          title: data.msg,
          text: 'Succesfully Enrolled',
        });
      } else {
        Swal.fire('Already Enrolled', 'Checkout Other Courses !!', 'question');
      }
    });
  }
}

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseCall();
  }
  ngOnInit(): void {}
  createCourse!: FormGroup;

  courseCall() {
    this.createCourse = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  OnSubmit() {
    console.log('clicked');
    if (this.createCourse.valid) {
      const data = this.createCourse.value;
      console.log(data);
      this.courseService.createCoursedata(data).subscribe((data) => {
        console.log(data);
      });
    }
  }
}

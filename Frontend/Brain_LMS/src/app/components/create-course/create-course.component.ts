import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
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
        alert('Created Course ');
      });
    }
  }
}

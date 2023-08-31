import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { CourseData } from 'src/interfaces';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css'],
})
export class AllcoursesComponent implements OnInit {
  data: CourseData[] = [];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.getallcourses();
  }
  getallcourses(): void {
    this.courseService.getallcourses().subscribe((getdata) => {
      console.log(getdata);
      this.data = getdata.data;
    });
  }
}

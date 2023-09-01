import { assignInter } from './../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorserviceService } from 'src/app/Services/instructorservice.service';

@Component({
  selector: 'app-instructorassi',
  templateUrl: './instructorassi.component.html',
  styleUrls: ['./instructorassi.component.css'],
})
export class InstructorassiComponent implements OnInit {
  courseID = localStorage.getItem('courseID') || '';

  isloading: boolean = true;
  // seeSubmisssions(id) {}
  constructor(
    private instructorService: InstructorserviceService,
    private router: Router
  ) {}
  data: assignInter[] = [];
  ngOnInit(): void {
    this.getassignment();
  }

  getassignment() {
    this.instructorService.seeassignment(this.courseID).subscribe((data) => {
      console.log(data);
      this.data = data.data;
      this.isloading = false;
    });
  }
  SeeSubmissions(id: any) {
    localStorage.setItem('assignID', id);
    this.router.navigate(['/submissions']);
  }
}

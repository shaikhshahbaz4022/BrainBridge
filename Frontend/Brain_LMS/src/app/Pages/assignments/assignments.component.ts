import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { assignInter } from 'src/interfaces';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  ngOnInit(): void {
    this.getAllAssignments();
  }
  alldata: assignInter[] = [];
  constructor(
    private enrolmentservice: EnrolmentsService,
    private router: Router
  ) {}

  getAllAssignments() {
    this.enrolmentservice.getAssignmentsall().subscribe((data) => {
      console.log(data);
      this.alldata = data.data;
    });
  }
  //
  // this.enrolmentservice.getperticularAssi(id).subscribe((data) => {
  //   console.log(data);
  // });
  getperticularAss(id: number) {
    localStorage.setItem('assignID', id.toString());
    this.router.navigate(['/perticular']);
  }
}

import { Component, OnInit } from '@angular/core';
import { InstructorserviceService } from 'src/app/Services/instructorservice.service';
import { SubmissionGet } from 'src/interfaces';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
})
export class SubmissionsComponent implements OnInit {
  data: SubmissionGet[] = [];
  isloading: boolean = true;
  ngOnInit(): void {
    this.seeSubmissions();
  }
  constructor(private instructorServices: InstructorserviceService) {}
  assignID = localStorage.getItem('assignID');

  seeSubmissions() {
    this.instructorServices.seesubmissions(this.assignID).subscribe((data) => {
      this.data = data.data;
      console.log(data);
      this.isloading = false;
    });
  }
}

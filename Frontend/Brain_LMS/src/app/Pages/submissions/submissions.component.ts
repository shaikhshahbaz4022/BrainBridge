import { Component, OnInit } from '@angular/core';
import { InstructorserviceService } from 'src/app/Services/instructorservice.service';
import { SubmissionGet } from 'src/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
})
export class SubmissionsComponent implements OnInit {
  data: SubmissionGet[] = [];
  isloading: boolean = true;
  showEmpty: boolean = false;
  emptyimage: string =
    'https://static.vecteezy.com/system/resources/previews/005/163/930/non_2x/incomplete-data-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg';
  ngOnInit(): void {
    this.seeSubmissions();
  }
  constructor(private instructorServices: InstructorserviceService) {}
  assignID = localStorage.getItem('assignID');

  seeSubmissions() {
    this.instructorServices.seesubmissions(this.assignID).subscribe((data) => {
      this.data = data.data;

      console.log(data);
      if (data.data.length == 0) {
        this.showEmpty = true;
      }
      this.isloading = false;
    });
  }
}

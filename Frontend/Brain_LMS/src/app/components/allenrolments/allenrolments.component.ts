import { Component, OnInit } from '@angular/core';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { Enrolmentdata } from 'src/interfaces';

@Component({
  selector: 'app-allenrolments',
  templateUrl: './allenrolments.component.html',
  styleUrls: ['./allenrolments.component.css'],
})
export class AllenrolmentsComponent implements OnInit {
  ngOnInit(): void {
    this.getAllEnrolData();
  }
  alldata: Enrolmentdata[] = [];
  constructor(private enrolService: EnrolmentsService) {}

  getAllEnrolData() {
    this.enrolService.getallEnrolments().subscribe((data) => {
      this.alldata = data.data;
      console.log(data);
    });
  }
}

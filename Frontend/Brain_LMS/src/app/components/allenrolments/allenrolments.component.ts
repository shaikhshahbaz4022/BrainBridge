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
  showEmpty: boolean = false;
  emptyimage: string =
    'https://static.vecteezy.com/system/resources/previews/005/163/930/non_2x/incomplete-data-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg';
  isloading = true;
  alldata: Enrolmentdata[] = [];
  constructor(private enrolService: EnrolmentsService) {}

  getAllEnrolData() {
    this.enrolService.getallEnrolments().subscribe((data) => {
      this.alldata = data.data;
      this.isloading = false;
      console.log(data);
      if (this.alldata.length == 0) this.showEmpty = true;
    });
  }
}

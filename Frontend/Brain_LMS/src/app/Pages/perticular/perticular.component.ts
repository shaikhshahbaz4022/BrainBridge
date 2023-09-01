import { Component, OnInit } from '@angular/core';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { assignInter } from 'src/interfaces';

@Component({
  selector: 'app-perticular',
  templateUrl: './perticular.component.html',
  styleUrls: ['./perticular.component.css'],
})
export class PerticularComponent implements OnInit {
  isloading: boolean = true;
  alldata: any = {};
  ngOnInit(): void {
    this.getperticularAssign();
  }
  constructor(private enrolmentservice: EnrolmentsService) {}
  getperticularAssign() {
    this.enrolmentservice.getperticularAssi().subscribe((data) => {
      console.log(data);
      this.alldata = data.data;
      this.isloading = false;
    });
  }
}

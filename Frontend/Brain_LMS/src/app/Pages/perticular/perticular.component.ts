import { Component, OnInit } from '@angular/core';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { assignInter } from 'src/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perticular',
  templateUrl: './perticular.component.html',
  styleUrls: ['./perticular.component.css'],
})
export class PerticularComponent implements OnInit {
  isloading: boolean = true;
  alldata: any = {};
  submitInput: any;
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
  SubmitAssignment(id: any) {
    const obj = {
      submission_link: this.submitInput,
    };
    this.enrolmentservice.submitAssignment(obj, id).subscribe((data) => {
      if (data.msg == 'Assignment Submitted Succesfully') {
        Swal.fire({
          icon: 'success',
          title: `Submission Successful`,
          text: `${data.msg}`,
          html: `<h1>${data.msg}</h1>`,
          background: `yellow`,
          iconColor: 'green',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: `Already Submitted`,
          text: `${data.msg}`,
          html: `<h1>${data.msg}</h1>`,
          background: `cayn`,
          iconColor: 'red',
          color: 'white',
        });
      }
    });
  }
}

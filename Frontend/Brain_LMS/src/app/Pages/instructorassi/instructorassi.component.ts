import { assignInter } from './../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorserviceService } from 'src/app/Services/instructorservice.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

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
    private router: Router,
    private fb: FormBuilder
  ) {
    this.callcreate();
    this.callfromannounce();
  }
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
  showform: boolean = false;
  toggleform() {
    this.showform = !this.showform;
  }
  showformAnnounce: boolean = false;
  toggleformannounce() {
    console.log('Clicked');
    this.showformAnnounce = !this.showformAnnounce;
  }
  createassigroup!: FormGroup;
  callcreate() {
    this.createassigroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      due_date: ['', Validators.required],
    });
  }

  /*
  Assignment created By Instructor In Particular Course
  */
  createAssignment() {
    if (this.createassigroup.valid) {
      let data = this.createassigroup.value;
      let id = localStorage.getItem('courseID');
      this.instructorService
        .createAssignments(data, Number(id))
        .subscribe((res) => {
          console.log(res);
          if (res.msg == 'Assignment created Succesfully') {
            Swal.fire({
              icon: 'success',
              title: `Assignment Created Succesfully`,
              text: `${res.msg}`,
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            Swal.fire({
              icon: 'error',
              title: `Something Went Wrong`,
              text: `${res.msg}`,
            });
          }
        });
    }
  }
  announcementGroup!: FormGroup;
  callfromannounce() {
    this.announcementGroup = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  createAnnouncement() {
    if (this.announcementGroup.valid) {
      const formdata = this.announcementGroup.value;
      const courseID = localStorage.getItem('courseID');
      this.instructorService
        .createAnn(formdata, Number(courseID))
        .subscribe((res) => {
          console.log(res.msg);
          if (res.msg == 'Announcement Created Succesfully') {
            Swal.fire({
              icon: 'success',
              title: `Announcement Created `,
              text: `${res.msg}`,
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            Swal.fire({
              icon: 'error',
              title: `Something Went Wrong`,
              text: `${res.msg}`,
            });
          }
        });
    }
  }
}

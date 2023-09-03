import { Router } from '@angular/router';
import { EnrolmentsService } from 'src/app/Services/enrolments.service';
import { Component, OnInit } from '@angular/core';
import { AnnouncementUser } from 'src/interfaces';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {
  isloading: boolean = true;

  ngOnInit(): void {
    this.getalldata();
  }
  constructor(
    private enrollmentservice: EnrolmentsService,
    private router: Router
  ) {}
  dataa: AnnouncementUser[] = [];
  getalldata() {
    this.enrollmentservice.getUserAnnouncement().subscribe((res) => {
      this.dataa = res.data;
      console.log(res.data);
      this.isloading = false;
      console.log(this.dataa);
    });
  }
  HandleClick(item: AnnouncementUser) {
    localStorage.setItem('announcement', JSON.stringify(item));
    setTimeout(() => {
      this.router.navigate(['announcementper']);
    }, 1000);
  }
}

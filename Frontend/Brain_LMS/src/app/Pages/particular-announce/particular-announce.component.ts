import { Component, OnInit } from '@angular/core';
import { AnnouncementUser, SubmissionGet, data } from 'src/interfaces';

@Component({
  selector: 'app-particular-announce',
  templateUrl: './particular-announce.component.html',
  styleUrls: ['./particular-announce.component.css'],
})
export class ParticularAnnounceComponent implements OnInit {
  constructor() {}

  isloading: boolean = true;
  ngOnInit(): void {}
  data: AnnouncementUser = JSON.parse(
    localStorage.getItem('announcement') || '{}'
  );

  firstletter: string = this.data.instructor_name[0];
  lastletter: string =
    this.data.instructor_name[this.data.instructor_name.length - 1];
  imageurl: string = `https://ui-avatars.com/api/?name=${this.firstletter}+${this.lastletter}&amp;color=7F9CF5&amp;background=EBF4FF`;
}

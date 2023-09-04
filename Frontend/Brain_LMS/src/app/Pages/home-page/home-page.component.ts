import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  ngOnInit(): void {
    this.startRender();
  }
  startRender() {
    this.authservice.defualtRenderOn().subscribe((res) => {
      console.log(res);
    });
  }
}

import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginCall();
  }
  ngOnInit(): void {}
  logingroup!: FormGroup;

  loginCall() {
    this.logingroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  OnSubmit() {
    console.log('clicked');
    if (this.logingroup.value) {
      let data: LoginUser = this.logingroup.value;
      this.authService.loginfun(data).subscribe((data) => {
        console.log(data);
        if (data.msg == 'login succesfull') {
          console.log('Inside', data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
          alert(data.msg);
          this.router.navigate(['/dashboard']);
        } else {
          alert(data.msg);
        }
      });
    }
  }
}

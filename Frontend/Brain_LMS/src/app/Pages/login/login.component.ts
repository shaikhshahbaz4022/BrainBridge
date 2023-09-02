import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/interfaces';
import Swal from 'sweetalert2';

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
  isloading!: boolean;

  loginCall() {
    this.logingroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  OnSubmit() {
    console.log('clicked');
    this.isloading = true;
    if (this.logingroup.value) {
      let data: LoginUser = this.logingroup.value;
      this.authService.loginfun(data).subscribe((data) => {
        console.log(data);
        if (data.msg == 'login succesfull') {
          console.log('Inside', data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          this.isloading = false;
          Swal.fire({
            icon: 'success',
            title: `Enjoy The Services`,
            text: `${data.msg}`,
            footer: '<a href="/register">Go To Register!</a>',
          });
          setTimeout(() => {
            if (data.user.role == 'student') {
              this.router.navigate(['/homepage']);
            } else {
              this.router.navigate(['/instructordashboard']);
            }
          }, 2500);
        } else {
          this.isloading = false;
          Swal.fire({
            icon: 'error',
            title: `${data.msg}`,
            text: `${data.msg}`,
          });
        }
      });
    }
  }
}

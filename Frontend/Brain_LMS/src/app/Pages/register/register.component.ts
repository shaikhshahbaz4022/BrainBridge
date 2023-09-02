import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/interfaces';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;
  isloading!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerCall();
  }
  ngOnInit(): void {}

  registerCall() {
    this.registerGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
  OnSubmit() {
    this.isloading = true;
    console.log('clicked');
    if (this.registerGroup.value) {
      let data: User = this.registerGroup.value;
      this.authService.registerfun(data).subscribe((data) => {
        if (data.msg == 'Registration Successful') {
          this.isloading = false;
          Swal.fire({
            icon: 'success',
            title: `Enjoy The Services`,
            text: `${data.msg}`,
            footer: '<a href="/register">Go To Register!</a>',
          });
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
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

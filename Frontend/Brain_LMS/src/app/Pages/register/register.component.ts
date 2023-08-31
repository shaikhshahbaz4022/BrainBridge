import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/interfaces';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;

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
    console.log('clicked');
    if (this.registerGroup.value) {
      let data: User = this.registerGroup.value;
      this.authService.registerfun(data).subscribe((data) => {
        if (data.msg == 'Registration Successful') {
          alert(data.msg);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          alert(data.msg);
        }
      });
    }
  }
}

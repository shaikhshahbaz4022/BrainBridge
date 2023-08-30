import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/interfaces';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
        alert(data.msg);
      });
    }
  }
}

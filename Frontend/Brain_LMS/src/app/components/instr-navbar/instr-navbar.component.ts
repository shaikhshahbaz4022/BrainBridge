import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instr-navbar',
  templateUrl: './instr-navbar.component.html',
  styleUrls: ['./instr-navbar.component.css'],
})
export class InstrNavbarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  logoutinst() {
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'logout Succesfully',
    });
    setTimeout(() => {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }, 1000);
  }
}

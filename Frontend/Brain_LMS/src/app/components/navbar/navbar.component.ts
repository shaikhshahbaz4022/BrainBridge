import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data = JSON.parse(localStorage.getItem('user') || '[]');
  mobileMenuIcon = faBars;
  closeIcon = faTimes;
  isMobileMenuOpen = false;
  search = faSearch;
  profile: boolean = false;
  constructor(private router: Router, private cdref: ChangeDetectorRef) {}
  showname: string = '';
  showemail: string = '';
  role: string = '';
  toggleLogin: boolean = false;

  ngOnInit(): void {
    this.showname = this.showName();
    this.showemail = this.data.email;
    this.role = this.data.role;
    this.toggleLogin = this.data && this.data.name ? true : false;
    console.log(this.toggleLogin);
  }

  showName(): string {
    if (this.data && this.data.name) {
      console.log(this.data.name);
      return this.data.name;
    }
    return '';
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  hideAndShow() {
    this.profile = !this.profile;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
  rigisterRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/login']);
    }
  }
  logout(): void {
    localStorage.clear();
    this.showname = '';
    this.toggleLogin = false;
    this.cdref.detectChanges();
    Swal.fire({
      icon: 'success',
      text: `Thankyou ! Visit Again `,
      title: `Logout Succesfull`,
    });

    setTimeout(() => {
      this.router.navigate(['/homepage']);
    }, 2000);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}

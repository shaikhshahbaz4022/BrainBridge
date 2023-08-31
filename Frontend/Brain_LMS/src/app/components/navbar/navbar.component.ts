import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router, private cdref: ChangeDetectorRef) {}
  showname: string = '';
  toggleLogin: boolean = false;

  ngOnInit(): void {
    this.showname = this.showName();
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

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
  rigisterRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/register']);
    }
  }
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.showname = '';
    this.toggleLogin = false;
    this.cdref.detectChanges();
    alert('Logout Succesfully');
    window.location.reload();
  }
}

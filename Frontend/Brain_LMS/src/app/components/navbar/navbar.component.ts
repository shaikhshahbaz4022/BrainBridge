import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  mobileMenuIcon = faBars;
  closeIcon = faTimes;
  isMobileMenuOpen = false;
  search = faSearch;

  constructor(private router: Router) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
  rigisterRoute() {
    this.router.navigate(['/register']);
  }
}

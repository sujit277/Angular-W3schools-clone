import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  navOptionsVisibility = false;
  userName!: string | null;

  ngOnInit(): void {
    this.userName = localStorage.getItem('UserName');
  }

  launchNavOptions() {
    this.navOptionsVisibility = !this.navOptionsVisibility;
  }

  navigateToContent() {
    this.router.navigate(['/content']);
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  logout(){
    this.userName = '';
    localStorage.removeItem('UserName');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  userName: any;
  loginForm!: FormGroup;
  userData: any;
  flag = false;

  ngOnInit(): void {
    this.getUsers();
    this.loginForm = new FormGroup({
      emailLogin: new FormControl('', [Validators.required]),
      passwordLogin: new FormControl('', [Validators.required]),
    });
  }

  getUsers() {
    this.api.getUsers().subscribe((data) => {
      this.userData = data;
    });
  }

  login() {
    for (let i = 0; this.userData.length; i++) {
      if (
        this.userData[i].email == this.loginForm.value.emailLogin &&
        this.userData[i].password == this.loginForm.value.passwordLogin
      ) {
        this.flag = true;
        this.userName = this.userData[i].name;
        break;
      }
    }
    if (this.flag) {
      alert('Logined Successfully');
      localStorage.setItem('UserName', this.userName);
      this.router.navigate(['/']);
    }
  }
}

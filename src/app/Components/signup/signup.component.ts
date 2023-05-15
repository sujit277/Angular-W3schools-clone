import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from 'src/app/Model/signupModel';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private api: ApiService) {}

  signUpForm!: FormGroup;
  signupObj!: Signup;
  userData!: any;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signup() {
    this.signupObj = new Signup(
      this.signUpForm.value.name,
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
    this.api.postUser(this.signupObj).subscribe(() => {
      alert('User Registered Succesfully');
      this.signUpForm.reset();
    });
  }
}

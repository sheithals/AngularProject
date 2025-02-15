import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'besant-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  signInForm!: FormGroup;
  predefinedCredentials = {
    email: 'user@example.com',
    password: 'password123'
  };
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required, Validators.minLength(6)]] // Password validation
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;

      if (formData.email === this.predefinedCredentials.email && formData.password === this.predefinedCredentials.password) {
        console.log('Form Submitted and Credentials Valid!');
        localStorage.setItem("token", formData.email + formData.password)
        this.router.navigate(['/users']);
      } else {
        console.log('Invalid credentials!');
      }
    } else {
      console.log('Form is invalid!');
    }
  }
}

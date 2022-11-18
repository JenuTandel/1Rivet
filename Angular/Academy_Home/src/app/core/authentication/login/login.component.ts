import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegistrationService } from '../registration.service';
import { RegistrationData } from '../registrationData.model';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userIsLoginSubject: BehaviorSubject<boolean>;
  public userIsLoginObservable$: Observable<boolean>;
  public loginForm: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup('');
    this.userIsLoginSubject = new BehaviorSubject(true);
    this.userIsLoginObservable$ = this.userIsLoginSubject.asObservable();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')]]
    })
  }

  onLogin() {
    if (this.loginForm.controls['email'].value == 'admin@gmail.com' && this.loginForm.controls['password'].value == 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('role', 'admin');
      this.router.navigateByUrl('home')
    }
    else {
      // console.log("Hello");
      
      this.registrationService.getUser().subscribe((res) => {
       
        let user = res.find((data) => data.emailId === this.loginForm.controls['email'].value && ((CryptoJS.AES.decrypt(data.password,'password')).toString(CryptoJS.enc.Utf8)).replace(/['"]+/g, '') === this.loginForm.controls['password'].value);
        console.log(user);
        
        if (user) {
          debugger
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigateByUrl('courses');
        }
        else {
          alert("Invalid Username or Password");
          this.router.navigateByUrl('registration');
        }
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = new FormGroup('');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')]]
    })
  }

  onLogin() {
    this.localStorage.store('isAuthenticated', true);
    console.log(this.loginForm.controls['email'].value);

    if (this.loginForm.controls['email'].value == 'admin@gmail.com' && this.loginForm.controls['password'].value == 'admin123') {
      this.router.navigateByUrl('admin')
    }
    else {
      this.router.navigateByUrl('courses');
    }
  }
}

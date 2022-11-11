import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router:Router) {
    this.loginForm = new FormGroup('')
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: [''],
      password: ['']
    });
  }
  onSubmit() {
    this.authService.login(this.loginForm.controls['emailId'].value, this.loginForm.controls['password'].value).subscribe((data)=>{
      this.router.navigateByUrl("home");
    });

  }
}

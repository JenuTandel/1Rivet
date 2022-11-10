import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService) {
      this.loginForm = new FormGroup('')
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: [''],
      password: ['']
  });
  }
  onSubmit(){
    
  }
}

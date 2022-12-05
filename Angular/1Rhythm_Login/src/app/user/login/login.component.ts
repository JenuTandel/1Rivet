import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastrMessageService } from 'src/app/shared/services/toastrMessage.service';
import jwt_decode from "jwt-decode";
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loaderValue: boolean;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router, private loaderService: LoaderService, private toastrService: ToastrMessageService) {
    this.loginForm = new FormGroup('');
    this.loaderValue = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: [''],
      password: ['']
    });
  }
  /**
   * @author Jinal Tandel
   * @param token 
   * @returns decoded token
   */
  DecodeToken(token: string): string {
    return jwt_decode(token)
  }
  onSubmit() {
    // this.loaderService.status.subscribe((value) => {
    //   this.loaderValue = value;
    // })

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: string) => {
        const token = this.DecodeToken(res);
        localStorage.setItem('user', token);
        this.router.navigateByUrl("/home");
      })
    }
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastrMessageService } from 'src/app/shared/services/toastrMessage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  public loaderValue:boolean;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router, private loaderService: LoaderService, private toastrService:ToastrMessageService) {
    this.loginForm = new FormGroup('');
    this.loaderValue = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: [''],
      password: ['']
    });


  }
  onSubmit() {
    // this.authService.loginpost(this.loginForm.value).subscribe((response:string)=>{
    //   console.log(response);
    // })
    // console.log(this.loaderValue);
    this.loaderService.status.subscribe((value)=>{
      this.loaderValue = value;
    })
    
    if(this.loginForm.valid){
      
      this.authService.login(this.loginForm.controls['emailId'].value, this.loginForm.controls['password'].value).subscribe({
        next:()=>{
          // setTimeout(() => {  
            this.router.navigateByUrl("/home");
          // }, 3000);
        },
        error:(err)=>{
          // this.loaderValue = false;
          // this.toastrService.showError(err);
        }
      })
    }
  }

  // ngAfterViewInit(): void {
  //   this.loaderService.status.subscribe((res) => {
  //     this.loaderValue = res;
  //   })
  // }
}

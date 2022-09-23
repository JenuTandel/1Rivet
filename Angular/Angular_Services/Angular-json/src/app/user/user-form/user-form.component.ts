import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public isSubmitted: boolean = false;
  public userform: FormGroup;

  constructor(
    public router: Router,
    private userService: UserService,
    public formBuilder: FormBuilder
  ) {
    this.userform = new FormGroup('');
  }

  ngOnInit(): void {

    this.userform = this.formBuilder.group(
      {
        id: [''],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        age: ['', Validators.required],
        contactNumber: ['', Validators.required]
      }
    )
  }

  onSubmit() {
    this.isSubmitted = true;
    
    if(this.userform.valid){
      this.userService.addUsers(this.userform.value).subscribe(()=>{
        this.router.navigateByUrl('user/list');
      })
    }
  }
}

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

  public id: any;
  public isSubmitted: boolean = false;
  public userform: FormGroup;
  public title: string;
  public userid: string;
  constructor(
    public router: Router,
    private userService: UserService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) {
    this.id = '';
    this.userid = "";
    this.userform = new FormGroup('');
    console.log(activatedRoute);
    
    activatedRoute.params.subscribe((params) => {
      this.id = params['userId']
      this.getUserDetails();
    })
    this.userid = activatedRoute.snapshot.params['userId'];
    this.title = this.userid ? "Edit" : "Add";
  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group(
      {
        id: [],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        age: ['', Validators.required],
        gender: [''],
        contactNumber: ['', Validators.required]
      }
    )
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.userform.valid) {
      // this.isSubmitted = false;???
      if (this.id) {
        console.log(this.id);
        this.userService.editUsers(this.userform.value, this.id).subscribe(() => {
          this.router.navigateByUrl('user/list');
        })
      }
      else {
        this.userService.addUsers(this.userform.value).subscribe((data) => {
          // console.log(data);
          this.router.navigateByUrl('user/list');
        })
      }
    }
  }

  getUserDetails() {
    this.userService.getUserById(Number(this.id)).subscribe((data) => {
      this.userform.patchValue(data);
    })
  }
}

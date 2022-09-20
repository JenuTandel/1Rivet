import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControlStatus, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public isSubmitted: boolean = false;
  public userform: FormGroup;
  public userData:any;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.userform = new FormGroup('');
    this.userData = {
      firstname: 'Jinal',
      lastname: 'Tandel',
      email: 'jinaltandel06@gmail.com',
      mobilenumber:'1234567890',
      address:{
      city: 'Valsad',
      state: 'Gujarat',
      zipcode:'396001'
      }
    };
    // this.userform = new FormGroup({
    //   firstname: new FormControl("",Validators.required),
    //   lastname: new FormControl(""),
    //   email: new FormControl(""),
    //   mobilenumber: new FormControl("")
    // });
  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(7)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")]],
      mobilenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]]
      }),
    });

    this.userform.patchValue(this.userData);
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userform);
    
    // console.log(this.userform.controls['address']);
    
    // console.log(this.userform.controls['firstname'].dirty);
    
    // if(this.userform.valid){
    //   alert(JSON.stringify(this.userform.value))
    // }

  }

}

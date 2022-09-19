import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public isSubmitted: boolean = false;
  public userform: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.userform = new FormGroup('');
    // this.userform = new FormGroup({
    //   firstname: new FormControl("",Validators.required),
    //   lastname: new FormControl(""),
    //   email: new FormControl(""),
    //   mobilenumber: new FormControl("")
    // });
  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      firstname: ['', Validators.required, Validators.maxLength(7)],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required, Validators.pattern("[0-9]{10}")]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userform);

  }

}

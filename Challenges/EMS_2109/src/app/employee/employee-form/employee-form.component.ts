import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public employeeData: any;

  public isSubmitted:boolean = false;
  public title:string;
  public employeeform: FormGroup;
  // public empname: string

  public edata:any;
  public emdata:any;

  constructor(
    public formbuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) { 
    this.title = 'Add';

    // this.empname = this.activatedRoute.snapshot.queryParams[''];
    // console.log(activatedRoute);
    // this.title = this.empname ? "Edit" : "Add";

    this.employeeform = new FormGroup('');
    this.employeeData = [];

    this.edata = {};
    this.emdata = {}

  }


  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]], 
      Gender: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      DOB: ['', Validators.required],
      Salary:['', [Validators.required, Validators.pattern('[0-9]*')]]
    })
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log(this.employeeform);
    this.employeeData.push(this.employeeform.value);
    this.employeeform.reset();
      // console.log(this.employeeData);
  }

  onReset(){
    this.employeeform.reset();
  }

  EditEmployee(data:string){
    // console.log(data);
    this.edata = data;
    this.employeeform.patchValue(this.edata);
    this.title = "Edit";
  }

  DeleteEmployee(data:string){
    console.log(data);
    this.emdata = data;

    this.employeeData.pop(this.emdata);
  }
}

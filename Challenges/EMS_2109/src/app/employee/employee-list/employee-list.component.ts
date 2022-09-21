import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  @Input() employeeList: any;
  @Output() addData: EventEmitter<any>
  @Output() deleteData: EventEmitter<string>

  public empdata: any;

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {
    this.employeeList = [{}];

    this.empdata = {};

    this.addData = new EventEmitter();
    this.deleteData = new EventEmitter();

  }

  ngOnInit(): void {
    console.log(this.employeeList);
  }

  onDelete(employee: any) {
    this.deleteData.emit(employee)
  }

  onEdit(employee: any) {
    console.log(employee);
    this.addData.emit(employee);
  }

  onDetails() {
    // this.router.navigateByUrl('employee/details')
  }

}

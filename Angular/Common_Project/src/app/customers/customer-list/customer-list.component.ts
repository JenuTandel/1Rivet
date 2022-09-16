import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  Person_Details: any[] = [
    {
      id: 1,
      name: "Jinal",
      gender: "F"
    },
    {
      id: 2,
      name: "Arpan",
      gender: "M"
    },
    {
      id: 3,
      name: "Hetal",
      gender: "F"
    },
    {
      id: 4,
      name: "Roshan",
      gender: "M"
    },
    {
      id: 5,
      name: "Pradip",
      gender: "M"
    }
  ];
  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

  onEdit() {

  }

  onAdd() {
    // this.router.navigate(["customers","add"],{queryParams:{name:"Jinal"}});
    this.router.navigateByUrl("customers/add");
  }
}

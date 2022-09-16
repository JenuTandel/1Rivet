import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customer_id:number;
  title:string;
  public customers: Customers;

  constructor(
    private router: Router, 
    public activatedroute:ActivatedRoute) { 
    console.log(this.activatedroute);

    this.customer_id = this.activatedroute.snapshot.params['customerId'];
    console.log(this.customer_id);
    this.title = this.customer_id ? "Edit" : "Add";

    this.customers = new Customers();
  }

  ngOnInit(): void {

  }

  onSave(){
    this.router.navigateByUrl("customers/list");
  }
}

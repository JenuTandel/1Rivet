import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customer_id: number;
  title: string;
  public customers: Customers;
  
  @ViewChild('customerform') customerForm = NgForm;

  isSubmitted: boolean = false;

  constructor(
    private router: Router,
    public activatedroute: ActivatedRoute) {
    console.log(this.activatedroute);

    this.customer_id = this.activatedroute.snapshot.params['customerId'];
    console.log(this.customer_id);
    this.title = this.customer_id ? "Edit" : "Add";

    this.customers = new Customers('', '', '', '');

  }

  ngOnInit(): void {

  }

  onSave() {
    this.router.navigateByUrl("customers/list");
  }

  onSubmit(customerForm) {
    this.isSubmitted = true;
    console.log(customerForm);
    
    // console.log(customerForm.form.controls.firstname.errors['required']);

    //console.log(customerForm.form.value);
    
  }
}

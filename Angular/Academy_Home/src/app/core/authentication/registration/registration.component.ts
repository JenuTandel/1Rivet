import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { RegistrationService } from '../registration.service';
import { City, Country, RegistrationData, State } from '../registrationData.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  public countryList: Country[];
  public stateList: State[];
  public cityList: City[];
  public value:any;

  constructor(private router: Router, private formBuilder: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = new FormGroup('');
    this.countryList = [];
    this.stateList = [];
    this.cityList = [];
  }

  ngOnInit(): void {
    this.registrationService.getCountries().subscribe((res)=>{
      console.log(res);
      this.countryList = res;
      console.log(this.countryList);
      
    })
    this.registrationForm = this.formBuilder.group(
      {
        firstname: [''],
        lastname: [''],
        emailId: [''],
        password: [''],
        country:[''],
        state:[''],
        city:['']
      }
    )
  }
  onRegister() {
    if(this.registrationForm.valid){
      this.registrationService.AddUser(this.registrationForm.value).subscribe((res)=>{
      })
    }
    this.router.navigateByUrl("login")
  }

  selectCountry(e:any){
    this.value = e.target.value;
    console.log(this.value);
    
    this.registrationService.getStatesByCountry().subscribe((res)=>{
      this.stateList = res.filter((i: any) => i.country == this.value)
      // console.log(this.stateList); 
      // console.log(res); 
    })
  }
  selectState(e:any){
    this.value = e.target.value;
    this.registrationService.getCitiesByState().subscribe((res)=>{
      this.cityList = res.filter((i: any) => i.state == this.value)
    })
    
  }
}

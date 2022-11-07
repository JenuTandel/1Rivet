import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/core/authentication/registration.service';
import { RegistrationData } from 'src/app/core/authentication/registrationData.model';
import { pipe, map, of, first } from 'rxjs'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: RegistrationData[];
  // public firstname: string[];
  // public lastname: string[];
  // public namedata: string[];
  constructor(private registrationService: RegistrationService) {
    this.userList = [];
    // this.firstname = [];
    // this.lastname = [];
    // this.namedata = [];
  }

  ngOnInit(): void {
    this.registrationService.getUser().subscribe((res: any) => {
      this.userList = res;
      console.log(res);
      
      // this.namedata = res.map((i:any)=> of(i.firstname,i.lastname).pipe(map(()=>{i.firstname.concat(i.lastname)})))
      // console.log(this.namedata);
      // this.firstname = res.map((i:any)=>i.firstname)
      // this.lastname = res.map((i:any)=>i.firstname)
      // console.log(this.firstname);
      // console.log(this.lastname);

      // this.namedata = res.map((x: any) => x.firstname.concat(x.lastname))
      // console.log(this.namedata);

      // of(this.firstname,this.lastname).pipe(map((x,y)=>{x.concat(y)})).subscribe((v) => console.log(`value: ${v}`))
      // res.forEach((x:any) => {
      //   this.namedata = x.firstname + x.lastname;
      // });

      // console.log(this.namedata);
    })
  }
}

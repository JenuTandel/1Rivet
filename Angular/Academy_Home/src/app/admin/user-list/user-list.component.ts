import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/core/authentication/registration.service';
import { RegistrationData } from 'src/app/core/authentication/registrationData.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: RegistrationData[];
  constructor(private registrationService:RegistrationService) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.registrationService.getUser().subscribe((res:RegistrationData[])=>{
      this.userList = res;
    })
  }

}

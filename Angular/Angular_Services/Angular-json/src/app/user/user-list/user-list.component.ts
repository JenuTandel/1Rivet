import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  public userList: Users[];

  constructor(private userService: UserService) {
    this.userList = [];
    
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.userService.getUsers().subscribe((data)=>{
      this.userList = data;

      console.log(this.userList)
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public particularuser:any;

  constructor(private userService: UserService,
    private router: Router) {
    this.userList = [];
    this.particularuser={}
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
      console.log(this.userList)
    })
  }

  onEdit(user: any) {
    this.router.navigate(['user/edit', user.id]);
  }

  onDelete(userId: any) {
    if (confirm('Are you sure to delete this item?')) {
      this.userService.deleteUser(userId).subscribe(x => {
        this.getUserData();
      })
    }
  }

  onDetails(user:any){
    this.userService.getUserById(user.id).subscribe(userdata=>{
      this.particularuser=userdata;
    })
  }
}

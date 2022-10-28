import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  public loginbtn: boolean = false;
  public header:boolean = false;
  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('role');
    if(role == 'admin'){
      this.header = true;
    }
    else{
      this.header = false;
    }
    // console.log(isAuthenticated);
    if (isAuthenticated) {
      this.loginbtn = true;
    }
    else {
      this.loginbtn = false;
    }
  }
  onLogout(){
    localStorage.clear();
  }

}

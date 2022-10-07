import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private user= document.getElementById("user_home");

  constructor(private localStorage: LocalStorageService) {
  }
  
  
  ngOnInit(): void {
    this.localStorage.store('isAuthenticated', false);
  }

}

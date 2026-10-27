import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  siteTitle: string = 'Angular приложение';
  
  isLoggedIn: boolean = false;

  toggleLogin(){
    this.isLoggedIn = !this.isLoggedIn;
  }

}

import { Component, OnInit } from '@angular/core';
// import { User } from '../shared/model/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Tweets:Array<User>;
  statusSideNav: boolean = true;
  constructor(private userService: UserService) {
      // this.userService = userService;
   }

  ngOnInit() {
    // this.userService.getTweetsUser()
    // .subscribe((data : Array<User>) =>{
    //   this.Tweets = data.slice(0,50);
    // },error => {
    //   console.log(`Error ${error}`);
    // });
  }

  viewSideBar() {
    this.statusSideNav = true;
    let sidenav = document.getElementById('side-nav');
    sidenav.classList.remove('show-side-nav');
  }

  hideSideBar() {
    this.statusSideNav = false;
    let sidenav = document.getElementById('side-nav');
    sidenav.classList.add('show-side-nav');
  }

}

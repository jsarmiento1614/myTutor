import { Component, OnInit } from '@angular/core';
// import { User } from '../shared/model/user';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserApp } from '../shared/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Tweets:Array<User>;
  statusSideNav: boolean = true;
  usersList:Array<UserApp>;
  user:any;
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (localStorage.getItem('users')) {
      let data: any = (new Function("return [" + localStorage.getItem('users') + "];")());
      this.usersList = data[0] as Array<UserApp>;
      this.user = this.usersList.find(f => f.userId === Number(id));
    } 

    console.log(this.user)
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

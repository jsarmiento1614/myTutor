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

}

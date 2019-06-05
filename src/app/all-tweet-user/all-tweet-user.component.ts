import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-tweet-user',
  templateUrl: './all-tweet-user.component.html',
  styleUrls: ['./all-tweet-user.component.css']
})
export class AllTweetUserComponent implements OnInit {
  allTweets: User;
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.userService=userService;
    this.route=route;
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(parameters => {
      let userId =  Number(parameters.get("id"));
      this.getUserTweet(userId);
    },error => {
      console.log(`Error ${error}`);
    });
  }

  getUserTweet(userId:number){
    this.userService.getTweetsUserSelected(userId)
    .subscribe((data : User) => this.allTweets = data);
   
  }

}

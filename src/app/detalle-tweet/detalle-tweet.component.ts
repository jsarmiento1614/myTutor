import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../shared/model/tweet';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {
  Tweets: User;
  tweetDetails:Tweet;
  constructor(private userService: UserService, private route: ActivatedRoute) {
      this.userService=userService;
      this.route=route;
   }

  ngOnInit() { 
    this.route.paramMap
    .subscribe(parameters => {
      let postId =  Number(parameters.get("id"));
      let idTweet =  Number(parameters.get("id"));
      this.getUserTweet(idTweet);
      this.getDetails(postId);
    },error => {
      console.log(`Error ${error}`);
    });
  }

  getDetails(postId:number){
    this.userService.getTweetDetails(postId)
    .subscribe((data : Tweet) => this.tweetDetails = data);
  }

  getUserTweet(idTweet:number){
    this.userService.getTweetSelected(idTweet)
    .subscribe((data : User) => this.Tweets = data);
  }

}

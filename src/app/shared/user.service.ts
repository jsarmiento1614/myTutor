import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserApp } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { 
    this.http=http;
  }

   getTweetsUser(){ 
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }

  getTweetsUserSelected(userId:number){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+ userId);
  }

  getTweetSelected(idTweet:number){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?id="+ idTweet);
  }

  getTweetDetails(postId:number){ 
    return this.http.get("http://jsonplaceholder.typicode.com/comments?postId=" + postId);
  }

  crearUser(user : UserApp){
    return this.http.post("./app/json/users.json", user);
  }
}

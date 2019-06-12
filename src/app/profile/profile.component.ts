import { Component, OnInit } from '@angular/core';
import { UserApp } from '../shared/model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usersList:Array<UserApp>;
  tutorSelected: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || 2;
    if (localStorage.getItem('users')) {
      let data: any = (new Function("return [" + localStorage.getItem('users') + "];")());
      this.usersList = data[0] as Array<UserApp>;
      this.tutorSelected = this.usersList.find(f => f.userId === Number(id));
    } 

  }

}

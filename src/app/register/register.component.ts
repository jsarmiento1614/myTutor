import { Component, OnInit } from '@angular/core';
import { UserApp } from '../shared/model/user';
import { UserService } from '../shared/user.service';
import { userMock } from '../shared/mock/user-mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userNew: UserApp;
  users:Array<UserApp>;
  createMode : boolean;
  SelectedUser: UserApp;
  typeUserSelected:string;

  constructor(private usuarioService:UserService, private router: Router) { 

    if (localStorage.getItem('users')) {
      let data: any = (new Function("return [" + localStorage.getItem('users') + "];")());
      this.users = data[0] as Array<UserApp>;
    } else {
      this.users = userMock;
    }

    this.usuarioService = usuarioService;
    console.log(this.users)
    this.createMode = false;
  }

  ngOnInit() {
    this.initialDataUser();
  }

  initialDataUser() {
    this.userNew = {
      userId: 0,
      typeUser: '',
      name:  '',
      email:  '',
      password:  '',
    };
  }
  onCreateUser() : void{

    this.userNew.typeUser = this.typeUserSelected;
    this.userNew.userId = this.users.length + 1;
    this.users.push(this.userNew);

    // Guardo el objeto como un string
    localStorage.setItem('users', JSON.stringify(this.users));
    this.gotoLogin();
  }

  selectTypeUser(typeUser:string) {
      this.typeUserSelected = typeUser;
      let docTutor = document.getElementById('tutor');
      let docStudent = document.getElementById('student');

      if(typeUser == 'tutor') {
        if( docTutor.classList.contains('style-circle')) {
          docTutor.classList.remove('style-circle');
          docStudent.classList.add('style-circle');

        } else {
          docTutor.classList.add('style-circle');
          docStudent.classList.remove('style-circle');
        }
      } else if(typeUser == 'student') {
        if( docStudent.classList.contains('style-circle')) {
          docStudent.classList.remove('style-circle');
          docTutor.classList.add('style-circle');
        } else {
          docStudent.classList.add('style-circle');
          docTutor.classList.remove('style-circle');
        }
      }
     
  }

  gotoLogin() {
    this.router.navigate(['/']);
  }

}

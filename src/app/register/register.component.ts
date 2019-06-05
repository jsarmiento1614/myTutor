import { Component, OnInit } from '@angular/core';
import { UserApp } from '../shared/model/user';
import { UserService } from '../shared/user.service';
import userMock from '../shared/mock/user-mock';


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

  constructor(private usuarioService:UserService) { 
    this.usuarioService = usuarioService;
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
    debugger
    this.users = [];
    this.userNew.typeUser = this.typeUserSelected;
    this.users.push(this.userNew);
    user:userMock;
    
    localStorage.setItem('users', `${this.users}`)
    // this.usuarioService.crearUser(this.userNew)
    //   .subscribe((data : UserApp ) =>{
    //     this.users.push(data);
    //     this.createMode = false;
    //   }, error => console.log("error "+ error));
  }

  selectTypeUser(typeUser:string) {
    debugger
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

}

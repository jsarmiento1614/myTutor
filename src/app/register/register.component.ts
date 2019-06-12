import { Component, OnInit } from '@angular/core';
import { UserApp, TutorApp } from '../shared/model/user';
import { UserService } from '../shared/user.service';
import { userMock, tutorMock } from '../shared/mock/user-mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userNew: UserApp;
  users: Array<UserApp>;
  createMode: boolean;
  SelectedUser: UserApp;
  typeUserSelected: string;
  tutor: Array<TutorApp>
  tutorNew: TutorApp;

  constructor(private usuarioService: UserService, private router: Router) {

    if (localStorage.getItem('users')) {
      let data: any = (new Function("return [" + localStorage.getItem('users') + "];")());
      this.users = data[0].filter(f => f.typeUser==='student') as Array<UserApp>;
      this.tutor = data[0].filter(f => f.typeUser==='tutor') as Array<TutorApp>;

      console.log("this is Student ->", this.users);
      console.log("This is tutor ->",this.tutor);
    } else {
      this.users = userMock;
      this.tutor = tutorMock;
    }

    this.usuarioService = usuarioService;
    console.log(this.users)
    this.createMode = false;
  }

  ngOnInit() {
    this.initialDataUser();
    this.initialDataTutor();
  }

  initialDataUser() {
    this.userNew = {
      userId: 0,
      typeUser: '',
      name: '',
      email: '',
      password: '',
    };
  }

  initialDataTutor() {
    this.tutorNew = {
      userId: 0,
      typeUser: '',
      name: '',
      email: '',
      password: '',
      description: '',
      workPlace: '',
      background: '',
      thumb: '',
    };
  }
  onCreateUser(): void {
    if (this.typeUserSelected === 'student') {
      this.userNew.typeUser = this.typeUserSelected;
      this.userNew.userId = this.users.length + 1;
      this.users.push(this.userNew);
    }
    if (this.typeUserSelected === 'tutor') {
      this.tutorNew.typeUser = this.typeUserSelected;
      this.tutorNew.userId = this.tutor.length + 1;
      this.tutor.push(this.tutorNew);
    } 

    this.tutor.forEach(item => {
      this.users.push(item);
    });

    // Guardo el objeto como un string
    localStorage.setItem('users', JSON.stringify(this.users));
    this.gotoLogin();
  }

  selectTypeUser(typeUser: string) {
    this.typeUserSelected = typeUser;
    let docTutor = document.getElementById('tutor');
    let docStudent = document.getElementById('student');

    if (typeUser == 'tutor') {
      if (docTutor.classList.contains('style-circle')) {
        docTutor.classList.remove('style-circle');
        docStudent.classList.add('style-circle');

      } else {
        docTutor.classList.add('style-circle');
        docStudent.classList.remove('style-circle');
      }
    } else if (typeUser == 'student') {
      if (docStudent.classList.contains('style-circle')) {
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

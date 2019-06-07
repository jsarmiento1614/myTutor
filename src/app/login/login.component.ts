import { Component, OnInit } from '@angular/core';
import { UserApp } from '../shared/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:Array<UserApp>;
  constructor(private router: Router) {
    
    if (localStorage.getItem('users')) {
      let data: any = (new Function("return [" + localStorage.getItem('users') + "];")());
      this.users = data[0] as Array<UserApp>;
    } 
   }

  ngOnInit() {
  }

  onLoginUser(event) : void{
   let email = event.target.elements.email.value;
   let password = event.target.elements.password.value;

   // Buscar por email y Passwprd
   let userEntry = this.users.find(f => f.email === email && f.password === password);
   if(userEntry) {
      // Email y pass correctamente
      this.gotoHome()
   } else {
    console.log("Usuario invalido");
   }

  }

  gotoHome() {
    this.router.navigate(['/home']);
  }


}

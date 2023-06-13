import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  data: Ilogin = {
    email: '',
    password: ''
  }
  constructor(private authSvc: AuthService, private router: Router) { }

  login() {
    this.authSvc.login(this.data)
      .subscribe(res => {
        console.log('ti sei loggato con quest utente:', res)
        this.router.navigate(['../../home']);
      }
      )
  }
}

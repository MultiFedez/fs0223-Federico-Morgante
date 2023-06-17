import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  audio: any;

  constructor(private authSvc: AuthService, private router: Router, private sanitizer: DomSanitizer) {

    this.audio = new Audio("./../../../../assets/maro-jump-sound-effect_1.mp3")
  }

  login() {
    this.authSvc.login(this.data)
      .subscribe(res => {
        console.log('ti sei loggato con quest utente:', res)
        this.router.navigate(['../../home']);
      }
      )
  }

  playAudio() {
    this.audio.play()
  }
}

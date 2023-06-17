import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Iregister } from 'src/app/interfaces/iregister';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  /* i validators sono un componente di angular che mi permette di definire le mie validazioni */
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(3)])

  data: Iregister = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }
  audio: any;

  constructor(private authSvc: AuthService, private router: Router, private sanitizer: DomSanitizer) {
    this.audio = new Audio("../../../../assets/Sonic Ring - Sound Effect (HD).mp3")
  }

  mari() {
    this.authSvc.register(this.data)
      .subscribe(res => {
        this.router.navigate(['./auth/login'])
        console.log(res);
      }
      )
  }
  playAudio() {
    this.audio.play()
  }
}
